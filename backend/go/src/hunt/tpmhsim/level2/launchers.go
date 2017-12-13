package level2

import (
	"time"
)

// Position of each launcher, the velocity of the darts coming out of them
// (in practice, only one of vs and vy is non-zero, and the only non-zero values
// are 1 and -1)
//
// Note that the indices of the launchers correspond to the launcher indices
// specified in the pressurePlates grid
type launcherSpec struct {
	x  int8
	y  int8
	vx int8
	vy int8
}

var launchers = [25]*launcherSpec{
	&launcherSpec{x: 10, y: 18, vx: 1, vy: 0},
	&launcherSpec{x: 19, y: 15, vx: -1, vy: 0},
	&launcherSpec{x: 18, y: 7, vx: 0, vy: 1},
	&launcherSpec{x: 13, y: 8, vx: -1, vy: 0},
	&launcherSpec{x: 13, y: 9, vx: 1, vy: 0},
	&launcherSpec{x: 0, y: 1, vx: 1, vy: 0},
	&launcherSpec{x: 16, y: 1, vx: -1, vy: 0},
	&launcherSpec{x: 6, y: 4, vx: 1, vy: 0},
	&launcherSpec{x: 6, y: 6, vx: 1, vy: 0},
	&launcherSpec{x: 22, y: 0, vx: 0, vy: 1},
	&launcherSpec{x: 23, y: 0, vx: 0, vy: 1},
	&launcherSpec{x: 24, y: 0, vx: 0, vy: 1},
	&launcherSpec{x: 25, y: 0, vx: 0, vy: 1},
	&launcherSpec{x: 26, y: 0, vx: 0, vy: 1},
	&launcherSpec{x: 29, y: 2, vx: -1, vy: 0},
	&launcherSpec{x: 29, y: 3, vx: -1, vy: 0},
	&launcherSpec{x: 29, y: 4, vx: -1, vy: 0},
	&launcherSpec{x: 29, y: 5, vx: -1, vy: 0},
	&launcherSpec{x: 29, y: 6, vx: -1, vy: 0},
	&launcherSpec{x: 29, y: 7, vx: -1, vy: 0},
	&launcherSpec{x: 26, y: 9, vx: 0, vy: -1},
	&launcherSpec{x: 25, y: 9, vx: 0, vy: -1},
	&launcherSpec{x: 24, y: 9, vx: 0, vy: -1},
	&launcherSpec{x: 23, y: 9, vx: 0, vy: -1},
	&launcherSpec{x: 22, y: 9, vx: 0, vy: -1},
}

const secondsPerDartMove = 2

func dartPosition(launcherIdx int, launchedAgo time.Duration) (int8, int8) {
	numMoves := (int8(launchedAgo.Seconds()) / secondsPerDartMove) + 1
	launcher := launchers[launcherIdx]

	return launcher.x + (launcher.vx * numMoves), launcher.y + (launcher.vy * numMoves)
}
