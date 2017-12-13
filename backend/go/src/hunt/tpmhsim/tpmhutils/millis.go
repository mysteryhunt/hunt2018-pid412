package tpmhutils

import "time"

func UnixMillis(t time.Time) int64 {
	return t.UnixNano() / (1000 * 1000)
}

func TimeFromMillis(millis int64) time.Time {
	return time.Unix(millis/1000, (millis%1000)*1000000)
}
