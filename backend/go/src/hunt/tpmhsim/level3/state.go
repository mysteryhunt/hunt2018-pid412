package level3

import (
	"fmt"
	"hunt/tpmhsim/tpmhutils"
	"time"
)

// TODO: correct values for these
const spawnX = 1
const spawnY = 1

type statueState struct {
	active bool
	x      int8
	y      int8
}
type State struct {
	startTime time.Time
	ninjaX    int8
	ninjaY    int8
	statues   [5]*statueState
}

func DefaultState() *State {
	return &State{
		startTime: time.Now(),
		ninjaX:    spawnX,
		ninjaY:    spawnY,
		statues: [5]*statueState{
			// TODO: statue positions
			&statueState{
				active: false,
				x:      1,
				y:      1,
			},
			&statueState{
				active: false,
				x:      1,
				y:      1,
			},
			&statueState{
				active: false,
				x:      1,
				y:      1,
			},
			&statueState{
				active: false,
				x:      1,
				y:      1,
			},
			&statueState{
				active: false,
				x:      1,
				y:      1,
			},
		},
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

func (state *State) RunFrame() (bool, []string) {
	// TODO: actuall simulate
	return false, nil
}

func (state *State) CurrentChunk() int8 {
	// TODO: implmement
	return 0
}

func (state *State) Serialize() string {
	// TODO: implement
	return fmt.Sprintf("3,%d,%d,%d", tpmhutils.UnixMillis(state.startTime), state.ninjaX, state.ninjaY)
}

func (state *State) IsWon() bool {
	// TODO: implmement
	return false
}
