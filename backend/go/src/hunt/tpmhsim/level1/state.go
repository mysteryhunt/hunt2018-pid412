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

	if validMoves[y][x] {
		state.ninjaX = x
		state.ninjaY = y
		return true
	}

	return false
}

func (state *State) RunFrame() (bool, []string) {
	t := int(time.Now().Sub(state.startTime).Seconds())

	if squareIsLava(state.ninjaX, state.ninjaY, t) {
		state.ninjaX = spawnX
		state.ninjaY = spawnY

		return true, []string{"You fell into lava!"}
	}

	if squareIsGuarded(state.ninjaX, state.ninjaY, t) {
		state.ninjaX = spawnX
		state.ninjaY = spawnY

		return true, []string{"You were spotted by a guard!"}
	}

	return false, nil
}

func (state *State) CurrentChunk() int8 {
	// TODO: implmement
	return 0
}

func (state *State) Serialize() string {
	return fmt.Sprintf("1,%d,%d,%d", tpmhutils.UnixMillis(state.startTime), state.ninjaX, state.ninjaY)
}

func (state *State) IsWon() bool {
	return (state.ninjaX == 28) && (state.ninjaY == 1)
}
