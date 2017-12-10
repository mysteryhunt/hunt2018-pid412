package main

import "database/sql"
import _ "github.com/go-sql-driver/mysql"
import "fmt"

type mysqlTeamData struct {
	level int8

	level1Won            bool
	level1UnlockedChunks int8

	level2Won            bool
	level2UnlockedChunks int8

	level3Won            bool
	level3UnlockedChunks int8
}

type mysqlConnection struct {
	client *sql.DB
}

func newMysqlConnection(host string,
	port int,
	user string,
	password string,
	db string,
) (*mysqlConnection, error) {
	var auth string
	if len(password) > 0 {
		auth = fmt.Sprintf("%s:%s", user, password)
	} else {
		auth = user
	}

	client, err := sql.Open("mysql", fmt.Sprintf("%s@tcp(%s:%d)/%s", auth, host, port, db))
	if err != nil {
		return nil, fmt.Errorf("Error connecting to MySQL: %s", err)
	}

	return &mysqlConnection{client}, nil
}

func (conn *mysqlConnection) flushMysql(teamID string, data *mysqlTeamData) {

}
