package main

import (
	"fmt"
	"hunt/tpmhsim/tpmhutils"
	golog "log"
	"net/http"
	"os"
	"time"

	ginzap "github.com/gin-contrib/zap"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

var rawlog *zap.Logger
var log *zap.SugaredLogger
var config *tpmhConfig

func init() {
	var logConfig zap.Config
	if os.Getenv("TPMHSIM_DEBUG") != "" {
		logConfig = zap.NewDevelopmentConfig()
	} else {
		logConfig = zap.NewProductionConfig()
	}

	var err error
	rawlog, err = logConfig.Build()
	if err != nil {
		golog.Print(err)
		panic("Unable to create a logger")
	}

	log = rawlog.Sugar()
}

func main() {
	defer rawlog.Sync()

	var err error
	config, err = parseEnv()
	if err != nil {
		log.Errorw("Invalid environment variables",
			"error", err,
		)
		return
	}

	app := gin.New()
	app.Use(gin.Recovery())
	app.GET("/healthz", healthzRoute)

	endpoints := app.Group("/")
	endpoints.Use(ginzap.Ginzap(rawlog, time.RFC3339, true))

	moveChannel := make(chan *moveCommand, config.MaxBufferLength)
	heartbeatChannel := make(chan string, config.MaxBufferLength)
	refreshGameStateChannel := make(chan string, config.MaxBufferLength)
	changeLevelChannel := make(chan *changeLevelCommand, config.MaxBufferLength)

	go startSimulator(moveChannel, heartbeatChannel, refreshGameStateChannel, changeLevelChannel)

	endpoints.POST("/:teamID/move/:dir", func(c *gin.Context) {
		dir, err := parseDirection(c.Param("dir"))
		if err != nil {
			c.String(http.StatusUnprocessableEntity, "Invalid direction: %s", c.Param("dir"))
			return
		}

		moveChannel <- &moveCommand{c.Param("teamID"), dir}
	})

	endpoints.POST("/:teamID/heartbeat", func(c *gin.Context) {
		heartbeatChannel <- c.Param("teamID")
	})

	endpoints.POST("/:teamID/refreshGameState", func(c *gin.Context) {
		refreshGameStateChannel <- c.Param("teamID")
	})

	endpoints.GET("/currentTime", func(c *gin.Context) {
		c.String(http.StatusOK, "%d", tpmhutils.UnixMillis(time.Now()))
	})

	endpoints.POST("/:teamID/changeLevel/:level", func(c *gin.Context) {
		var level int8
		switch c.Param("level") {
		case "1":
			level = 1
		case "2":
			level = 2
		case "3":
			level = 3
		default:
			c.String(http.StatusUnprocessableEntity, "Invalid level: %s", c.Param("level"))
		}

		changeLevelChannel <- &changeLevelCommand{c.Param("teamID"), level}
	})

	app.Run(fmt.Sprintf("0.0.0.0:%d", config.Port))

}

func healthzRoute(c *gin.Context) {
	c.JSON(http.StatusOK, &gin.H{
		"ok": true,
	})
}
