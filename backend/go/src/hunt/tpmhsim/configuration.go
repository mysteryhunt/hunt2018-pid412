package main

import "github.com/kelseyhightower/envconfig"

type tpmhConfig struct {
	Port  int    `default:"8080"`
	MySQL string `required:"true"`
	Redis string `required:"true"`

	// This is the maximum FPS to run the simulator at. If we're processing
	// frames faster than 1/MaxFPS seconds, we'll increase the length
	// of the Sleep() between frames
	MaxFPS int `default:"30" split_words:"true"`

	// This is the minimum number of milliseconds to sleep in between frames.
	// If we can't process frames fast enough to hit MaxFPS with at least
	// this much sleep between each frame, we'll slow down the simulation
	// to achieve at least this amount of sleep.
	MinSleepMillis int `default:"10" split_words:"true"`

	// The number of commands of each type to accept during each frame. When
	// a request comes in, if we have space in the buffer, we queue the
	// operation and respond with a 204. If we don't have space in the buffer,
	// we wait to respond to the HTTP request until we have space in the buffer
	// to queue the event.
	//
	// Tuning this higher will allow us to respond quickly to requests even
	// during high load, at the expense of lower FPS (becuase we'll be
	// processing more commands per frame). Tuning it lower will keep FPS
	// consistent even during high load, at the expense of taking a long
	// time to respond to requests under high load.
	MaxBufferLength int `default:"10" split_words:"true"`
}

func parseEnv() (*tpmhConfig, error) {
	var config tpmhConfig

	err := envconfig.Process("tpmh", &config)
	if err != nil {
		return nil, err
	}

	return &config, nil
}
