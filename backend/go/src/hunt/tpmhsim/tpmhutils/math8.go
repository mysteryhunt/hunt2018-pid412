package tpmhutils

func Abs8(x int8) int8 {
	if x < 0 {
		return -x
	}

	return x
}

func Max8(a int8, b int8) int8 {
	if a > b {
		return a
	}

	return b
}

func Min8(a int8, b int8) int8 {
	if b > a {
		return a
	}

	return b
}
