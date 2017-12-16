package level2

import (
	"bytes"
	"fmt"
	"hunt/tpmhsim/tpmhutils"
	"time"
)

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

	if validMoves[y][x] {
		state.ninjaX = x
		state.ninjaY = y
		return true
	}

	return false
}

func (state *State) killNinja() {
	state.ninjaX, state.ninjaY = spawnPointFor(state.ninjaX, state.ninjaY)
	state.dartLaunchTimes = [24]*time.Time{}
}

func (state *State) RunFrame() (bool, []string) {
	x := state.ninjaX
	y := state.ninjaY
	now := time.Now()

	// Check lava
	if lavaMap[y][x] {
		state.killNinja()
		return true, []string{"You fell into lava!"}
	}

	// Launch darts
	activatedLauncher := pressurePlates[y][x]
	if (activatedLauncher != -1) && (state.dartLaunchTimes[activatedLauncher] == nil) {
		state.dartLaunchTimes[activatedLauncher] = &now
	}

	// Check darts
	for i, launchTime := range state.dartLaunchTimes {
		if launchTime == nil {
			continue
		}

		dartX, dartY := dartPosition(i, now.Sub(*launchTime))
		if (dartX >= 30) || (dartX < 0) || (dartY >= 30) || (dartY < 0) || !validMoves[dartY][dartX] {
			state.dartLaunchTimes[i] = nil
		}

		if (dartX == state.ninjaX) && (dartY == state.ninjaY) {
			state.killNinja()
			return true, []string{"You were hit by a dart!"}
		}
	}

	// Check guards
	t := int(now.Sub(state.startTime).Seconds())
	if squareIsGuarded(state.ninjaX, state.ninjaY, t) {
		state.killNinja()
		return true, []string{"You were spotted by a guard!"}
	}

	return false, nil
}

func (state *State) CurrentChunk() int8 {
	// TODO: implmement
	return 0
}

func (state *State) Serialize() string {
	var buffer bytes.Buffer

	buffer.WriteString(fmt.Sprintf("2,%d,%d,%d",
		tpmhutils.UnixMillis(state.startTime), state.ninjaX, state.ninjaY))

	for _, launchTime := range state.dartLaunchTimes {
		buffer.WriteString(",")

		if launchTime == nil {
			buffer.WriteString("-1")
		} else {
			timeStr := fmt.Sprintf("%d", tpmhutils.UnixMillis(*launchTime))
			buffer.WriteString(timeStr)
		}
	}

	return buffer.String()
}

func DeserializeState(stateStr string) (*State, error) {
	state := DefaultState()
	var startTimeMillis int64
	var launchTimeMillis [24]int64

	_, err := fmt.Sscanf(
		stateStr,
		"2,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d",
		&startTimeMillis, &state.ninjaX, &state.ninjaY,
		&launchTimeMillis[0], &launchTimeMillis[1], &launchTimeMillis[2], &launchTimeMillis[3],
		&launchTimeMillis[4], &launchTimeMillis[5], &launchTimeMillis[6], &launchTimeMillis[7],
		&launchTimeMillis[8], &launchTimeMillis[9], &launchTimeMillis[10], &launchTimeMillis[11],
		&launchTimeMillis[12], &launchTimeMillis[13], &launchTimeMillis[14], &launchTimeMillis[15],
		&launchTimeMillis[16], &launchTimeMillis[17], &launchTimeMillis[18], &launchTimeMillis[19],
		&launchTimeMillis[20], &launchTimeMillis[21], &launchTimeMillis[22], &launchTimeMillis[23],
	)

	if err != nil {
		return nil, err
	}

	state.startTime = tpmhutils.TimeFromMillis(startTimeMillis)

	for i, millis := range launchTimeMillis {
		if millis >= 0 {
			t := tpmhutils.TimeFromMillis(millis)
			state.dartLaunchTimes[i] = &t
		}
	}

	return state, nil
}

func (state *State) IsWon() bool {
	return (state.ninjaX == 28) && (state.ninjaY == 8)
}

func (state *State) ArtifactName() string {
	return "Majestic Mask"
}
