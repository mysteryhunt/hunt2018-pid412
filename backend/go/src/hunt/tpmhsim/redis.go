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
	conn.client.Set(conn.buildRedisKey(teamID, "gameState"), levelStateStr, 0)
	conn.client.Publish(conn.buildRedisKey(teamID, "gameState"), levelStateStr)
}

func (conn *redisConnection) publishMessage(teamID string, message string) {
	conn.client.Publish(conn.buildRedisKey(teamID, "notifications"), message)
}
