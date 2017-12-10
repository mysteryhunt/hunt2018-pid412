package main

import "time"

func averageDuration(durations []time.Duration) time.Duration {
	sum := time.Duration(0)
	for _, duration := range durations {
		sum = sum + duration
	}

	return sum / time.Duration(len(durations))
}
