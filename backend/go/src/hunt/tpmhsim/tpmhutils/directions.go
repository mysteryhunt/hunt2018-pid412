package tpmhutils

import (
	"fmt"
)

type Direction int

const (
	DirN Direction = iota
	DirE
	DirS
	DirW
	DirNE
	DirSW
	DirSE
	DirNW
)

func ParseDirection(dirString string) (Direction, error) {
	switch dirString {
	case "N":
		return DirN, nil
	case "E":
		return DirE, nil
	case "S":
		return DirS, nil
	case "W":
		return DirW, nil
	case "NE":
		return DirNE, nil
	case "SW":
		return DirSW, nil
	case "SE":
		return DirSE, nil
	case "NW":
		return DirNW, nil
	default:
		return -1, fmt.Errorf("Invalid direction string: %s", dirString)
	}
}

func (dir Direction) Offsets() (int8, int8) {
	switch dir {
	case DirN:
		return 0, -1
	case DirE:
		return 1, 0
	case DirS:
		return 0, 1
	case DirW:
		return -1, 0
	case DirNE:
		return 1, -1
	case DirSE:
		return 1, 1
	case DirSW:
		return -1, 1
	case DirNW:
		return -1, -1
	}

	fmt.Printf("Asked for directionOffset() of an invalid direction: %d", dir)
	return 0, 0
}
