package level3

import (
	util "hunt/tpmhsim/tpmhutils"
)

func getMoveDirections(ninjaX int8, ninjaY int8, statueX int8, statueY int8) []util.Direction {
	deltaX := ninjaX - statueX
	deltaY := ninjaY - statueY

	wantN := deltaY < 0
	wantS := deltaY > 0
	wantE := deltaX > 0
	wantW := deltaX < 0

	if wantN && wantE { // NE
		if deltaX > deltaY {
			return []util.Direction{util.DirNE, util.DirE, util.DirN}
		}

		return []util.Direction{util.DirNE, util.DirN, util.DirE}
	} else if wantN && wantW { // NW
		if deltaX > deltaY {
			return []util.Direction{util.DirNW, util.DirW, util.DirN}
		}

		return []util.Direction{util.DirNW, util.DirN, util.DirW}
	} else if wantS && wantE { // SE
		if deltaX > deltaY {
			return []util.Direction{util.DirSE, util.DirE, util.DirS}
		}

		return []util.Direction{util.DirSE, util.DirS, util.DirE}
	} else if wantS && wantW { // SW
		if deltaX > deltaY {
			return []util.Direction{util.DirSW, util.DirW, util.DirS}
		}

		return []util.Direction{util.DirSW, util.DirS, util.DirW}
	} else if wantN { // N
		return []util.Direction{util.DirN, util.DirNE, util.DirNW}
	} else if wantE { // E
		return []util.Direction{util.DirE, util.DirSE, util.DirNE}
	} else if wantS { // S
		return []util.Direction{util.DirS, util.DirSW, util.DirSE}
	} else if wantW { // W
		return []util.Direction{util.DirW, util.DirNW, util.DirSW}
	}

	return []util.Direction{}
}

// Returns (canMove, direction, error)
func getMoveDirection(ninjaX int8, ninjaY int8, statueIdx int, statues statueStates) (bool, util.Direction) {
	x := statues[statueIdx].x
	y := statues[statueIdx].y
	for _, dir := range getMoveDirections(ninjaX, ninjaY, x, y) {
		deltaX, deltaY := dir.Offsets()

		if isValidMove(x+deltaX, y+deltaY, statues) {
			return true, dir
		}
	}

	return false, util.DirN
}

func statueDistance(ninjaX int8, ninjaY int8, statueX int8, statueY int8) int8 {
	return util.Max8(util.Abs8(statueX-ninjaX), util.Abs8(statueY-ninjaY))
}
