package tpmhutils

import "time"

func UnixMillis(time time.Time) int64 {
	return (time.Unix() * 1000) + (time.UnixNano() / (1000 * 1000))
}
