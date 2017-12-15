package level3

import (
	"bytes"
	"fmt"
	"hunt/tpmhsim/tpmhutils"
	"time"
)

// TODO: correct values for these
const spawnX = 1
const spawnY = 24

type statueState struct {
	wakeTime *time.Time
	moveTime *time.Time
	x        int8
	y        int8
}

type statueStates = [9]*statueState

type State struct {
	startTime time.Time
	ninjaX    int8
	ninjaY    int8
	statues   statueStates
}

func DefaultState() *State {
	state := State{
		startTime: time.Now(),
		ninjaX:    spawnX,
		ninjaY:    spawnY,
	}

	state.killNinja()

	return &state
}

func (state *State) killNinja() {
	state.ninjaX, state.ninjaY = spawnPointFor(state.ninjaX, state.ninjaY)

	state.statues = statueStates{
		&statueState{
			wakeTime: nil,
			moveTime: nil,
			x:        23,
			y:        28,
		},
		&statueState{
			wakeTime: nil,
			moveTime: nil,
			x:        21,
			y:        13,
		},
		&statueState{
			wakeTime: nil,
			moveTime: nil,
			x:        14,
			y:        17,
		},
		&statueState{
			wakeTime: nil,
			moveTime: nil,
			x:        14,
			y:        12,
		},
		&statueState{
			wakeTime: nil,
			moveTime: nil,
			x:        2,
			y:        16,
		},
		&statueState{
			wakeTime: nil,
			moveTime: nil,
			x:        7,
			y:        3,
		},
		&statueState{
			wakeTime: nil,
			moveTime: nil,
			x:        14,
			y:        3,
		},
		&statueState{
			wakeTime: nil,
			moveTime: nil,
			x:        23,
			y:        1,
		},
		&statueState{
			wakeTime: nil,
			moveTime: nil,
			x:        27,
			y:        1,
		},
	}
}

func (state *State) MoveNinja(deltaX int8, deltaY int8) bool {
	x := state.ninjaX + deltaX
	y := state.ninjaY + deltaY

	if isValidMove(x, y, state.statues) {
		state.ninjaX = x
		state.ninjaY = y
		return true
	}

	return false
}

func (state *State) RunFrame() (bool, []string) {
	now := time.Now()
	didChange := false
	messages := []string{}

	// Move statues
	for idx, statue := range state.statues {
		distance := statueDistance(state.ninjaX, state.ninjaY, statue.x, statue.y)

		if statue.x == -1 {
			// statue is dead
			continue
		}

		if statue.wakeTime == nil {
			// statue is asleep
			if distance <= 2 {
				statue.wakeTime = &now
				didChange = true
			}
		} else if now.Sub(*statue.wakeTime).Seconds() > 3 {
			// statue is awake
			if distance >= 7 {
				// ninja got out of range
				statue.wakeTime = nil
				statue.moveTime = nil
				didChange = true
			} else if (statue.moveTime == nil) || now.Sub(*statue.moveTime).Seconds() > 2 {
				// it's been more than 2 seconds since we moved
				canMove, moveDir := getMoveDirection(state.ninjaX, state.ninjaY, idx, state.statues)

				if canMove {
					deltaX, deltaY := moveDir.Offsets()
					statue.x += deltaX
					statue.y += deltaY
				}

				statue.moveTime = &now
				didChange = true
			}
		} else {
			// statue is awakening
			if distance > 2 {
				// ninja got out of range
				statue.wakeTime = nil
				statue.moveTime = nil
				didChange = true
			}
		}

		// check if the statue fell into lava
		if lavaMap[statue.y][statue.x] {
			statue.moveTime = nil
			statue.wakeTime = nil
			statue.x = -1
			statue.y = -1

			messages = append(messages, "A statue fell into lava!")
			didChange = true
		}

		// check if the statue caught the player
		if (statue.x == state.ninjaX) && (statue.y == state.ninjaY) {
			state.killNinja()
			return true, []string{"You were caught by a statue!"}
		}
	}

	// Check if the player fell into lava
	if lavaMap[state.ninjaY][state.ninjaX] {
		state.killNinja()
		return true, []string{"You fell into lava!"}
	}

	// Check guards
	t := int(now.Sub(state.startTime).Seconds())
	if squareIsGuarded(state.ninjaX, state.ninjaY, t) {
		state.killNinja()
		return true, []string{"You were spotted by a guard!"}
	}

	return didChange, messages
}

func (state *State) CurrentChunk() int8 {
	// TODO: implmement
	return 0
}

func (state *State) Serialize() string {
	var buffer bytes.Buffer

	buffer.WriteString(fmt.Sprintf("3,%d,%d,%d",
		tpmhutils.UnixMillis(state.startTime), state.ninjaX, state.ninjaY))

	for _, statue := range state.statues {
		buffer.WriteString(",")

		if statue.wakeTime == nil {
			buffer.WriteString("-1")
		} else {
			timeStr := fmt.Sprintf("%d", tpmhutils.UnixMillis(*statue.wakeTime))
			buffer.WriteString(timeStr)
		}

		buffer.WriteString(",")

		if statue.moveTime == nil {
			buffer.WriteString("-1")
		} else {
			timeStr := fmt.Sprintf("%d", tpmhutils.UnixMillis(*statue.moveTime))
			buffer.WriteString(timeStr)
		}

		buffer.WriteString(fmt.Sprintf(",%d,%d", statue.x, statue.y))
	}

	return buffer.String()
}

func DeserializeState(stateStr string) (*State, error) {
	state := DefaultState()

	var startTimeMillis int64
	var wakeTimeMillis [9]int64
	var moveTimeMillis [9]int64
	statues := statueStates{
		&statueState{}, &statueState{}, &statueState{},
		&statueState{}, &statueState{}, &statueState{},
		&statueState{}, &statueState{}, &statueState{},
	}

	_, err := fmt.Sscanf(
		stateStr,
		"3,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d",
		&startTimeMillis, &state.ninjaX, &state.ninjaY,
		&wakeTimeMillis[0], &moveTimeMillis[0], &statues[0].x, &statues[0].y,
		&wakeTimeMillis[1], &moveTimeMillis[1], &statues[1].x, &statues[1].y,
		&wakeTimeMillis[2], &moveTimeMillis[2], &statues[2].x, &statues[2].y,
		&wakeTimeMillis[3], &moveTimeMillis[3], &statues[3].x, &statues[3].y,
		&wakeTimeMillis[4], &moveTimeMillis[4], &statues[4].x, &statues[4].y,
		&wakeTimeMillis[5], &moveTimeMillis[5], &statues[5].x, &statues[5].y,
		&wakeTimeMillis[6], &moveTimeMillis[6], &statues[6].x, &statues[6].y,
		&wakeTimeMillis[7], &moveTimeMillis[7], &statues[7].x, &statues[7].y,
		&wakeTimeMillis[8], &moveTimeMillis[8], &statues[8].x, &statues[8].y,
	)

	if err != nil {
		return nil, err
	}

	state.statues = statues
	state.startTime = tpmhutils.TimeFromMillis(startTimeMillis)

	for i, millis := range wakeTimeMillis {
		if millis >= 0 {
			t := tpmhutils.TimeFromMillis(millis)
			statues[i].wakeTime = &t
		}
	}

	for i, millis := range moveTimeMillis {
		if millis >= 0 {
			t := tpmhutils.TimeFromMillis(millis)
			statues[i].moveTime = &t
		}
	}

	return state, nil
}

func (state *State) IsWon() bool {
	return (state.ninjaX == 28) && (state.ninjaY == 1)
}

func (state *State) ArtifactName() string {
	return "Terrific Tabi"
}
