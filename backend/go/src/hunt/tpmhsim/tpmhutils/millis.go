package tpmhutils

import "time"

func UnixMillis(t time.Time) int64 {
	return t.UnixNano() / (1000 * 1000)
}
