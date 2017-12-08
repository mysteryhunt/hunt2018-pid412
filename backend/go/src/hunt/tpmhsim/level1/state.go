package level1

import (
	"fmt"
	"hunt/tpmhsim/tpmhutils"
	"time"
)

const spawnX = 1
const spawnY = 28

type State struct {
	startTime time.Time
	ninjaX    int8
	ninjaY    int8
}

func DefaultState() *State {
	return &State{
		startTime: time.Now(),
		ninjaX:    spawnX,
		ninjaY:    spawnY,
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
	return fmt.Sprintf("1,%d,%d,%d", tpmhutils.UnixMillis(time.Now()), state.ninjaX, state.ninjaY)
}

func (state *State) IsWon() bool {
	// TODO: implmement
	return false
}
