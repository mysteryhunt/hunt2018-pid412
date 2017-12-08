package level2

import (
	"fmt"
	"hunt/tpmhsim/tpmhutils"
	"time"
)

// TODO: correct values for these
const spawnX = 18
const spawnY = 28

type State struct {
	startTime       time.Time
	ninjaX          int8
	ninjaY          int8
	dartLaunchTimes [24]*time.Time
}

func DefaultState() *State {
	return &State{
		startTime:       time.Now(),
		ninjaX:          spawnX,
		ninjaY:          spawnY,
		dartLaunchTimes: [24]*time.Time{},
	}
}

func (state *State) MoveNinja(deltaX int8, deltaY int8) bool {
	x := state.ninjaX + deltaX
	y := state.ninjaY + deltaY

	// TODO: check if x, y is valid
	state.ninjaX = x
	state.ninjaY = y

	return true
}

func (state *State) RunFrame() bool {
	// TODO: actuall simulate
	return true
}

func (state *State) CurrentChunk() int8 {
	// TODO: implmement
	return 0
}

func (state *State) Serialize() string {
	// TODO: implement
	return fmt.Sprintf("2,%d,%d,%d", tpmhutils.UnixMillis(state.startTime), state.ninjaX, state.ninjaY)
}

func (state *State) IsWon() bool {
	// TODO: implmement
	return false
}
