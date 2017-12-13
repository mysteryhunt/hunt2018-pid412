package main

import (
	"fmt"
	"net/url"

	"github.com/go-redis/redis"
)

type redisConnection struct {
	prefix string
	client *redis.Client
}

func newRedisConnection(redisURL string, prefix string) (*redisConnection, error) {
	url, err := url.Parse(redisURL)
	if err != nil {
		return nil, fmt.Errorf("Error parsing Redis URL: %s", err)
	}

	redisOptions := redis.Options{
		Addr: url.Host,
		DB:   0,
	}

	if url.User != nil {
		pw, _ := url.User.Password()
		redisOptions.Password = pw
	}

	return &redisConnection{
		prefix: prefix,
		client: redis.NewClient(&redisOptions),
	}, nil
}

func (conn *redisConnection) buildRedisKey(teamID string, key string) string {
	return fmt.Sprintf("%s:%s:%s", conn.prefix, teamID, key)
}

func (conn *redisConnection) flushRedis(teamID string, levelStateStr string) {
	err := conn.client.Set(conn.buildRedisKey(teamID, "gameState"), levelStateStr, 0).Err()
	if err != nil {
		log.Errorw("Error flushing Redis",
			"teamID", teamID,
			"stateStr", levelStateStr,
			"error", err)
	}

	err = conn.client.Publish(conn.buildRedisKey(teamID, "gameState"), levelStateStr).Err()
	if err != nil {
		log.Errorw("Error publishing game state update to Redis",
			"teamID", teamID,
			"stateStr", levelStateStr,
			"error", err)
	}
}

func (conn *redisConnection) publishMessage(teamID string, message string) {
	err := conn.client.Publish(conn.buildRedisKey(teamID, "notifications"), message).Err()
	if err != nil {
		log.Errorw("Error publishing notification to Redis",
			"teamID", teamID,
			"message", message,
			"error", err)
	}
}

// return (state, isNil, error)
func (conn *redisConnection) loadState(teamID string) (string, bool, error) {
	state, err := conn.client.Get(conn.buildRedisKey(teamID, "gameState")).Result()

	if err == redis.Nil {
		return "", true, nil
	}

	if err != nil {
		return "", false, err
	}

	return state, false, nil
}
