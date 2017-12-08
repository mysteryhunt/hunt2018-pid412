package main

import (
	"fmt"
)

type direction int

const (
	dirN direction = iota
	dirE
	dirS
	dirW
	dirNE
	dirSW
	dirSE
	dirNW
)

func parseDirection(dirString string) (direction, error) {
	switch dirString {
	case "N":
		return dirN, nil
	case "E":
		return dirE, nil
	case "S":
		return dirS, nil
	case "W":
		return dirW, nil
	case "NE":
		return dirNE, nil
	case "SW":
		return dirSW, nil
	case "SE":
		return dirSE, nil
	case "NW":
		return dirNW, nil
	default:
		return -1, fmt.Errorf("Invalid direction string: %s", dirString)
	}
}

func (dir direction) offsets() (int8, int8) {
	switch dir {
	case dirN:
		return 0, -1
	case dirE:
		return 1, 0
	case dirS:
		return 0, 1
	case dirW:
		return -1, 0
	case dirNE:
		return 1, -1
	case dirSE:
		return 1, 1
	case dirSW:
		return -1, 1
	case dirNW:
		return -1, -1
	}

	log.Errorf("Asked for directionOffset() of an invalid direction: %d", dir)
	return 0, 0
}
