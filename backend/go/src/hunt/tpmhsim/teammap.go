package main

import (
	"fmt"
	"hunt/tpmhsim/level1"
	"hunt/tpmhsim/level2"
	"hunt/tpmhsim/level3"
	"time"
)

// Internal representation of team state
type levelStatus struct {
	won            bool
	unlockedChunks int8
	state          levelState
}

type levelState interface {
	MoveNinja(int8, int8) bool
	RunFrame() (bool, []string)
	CurrentChunk() int8
	Serialize() string
	IsWon() bool
}

type teamData struct {
	currentLevel  int8
	lastHeartbeat time.Time
	levels        [3]*levelStatus
}

type teamMap map[string]*teamData

// Returns the levelStatus for the given team's current level
func (teams teamMap) getLevelStatus(teamID string) (*levelStatus, error) {
	team := teams[teamID]

	if team == nil {
		return nil, fmt.Errorf("No data for team %s", teamID)
	}

	return team.getLevelStatus(), nil
}

func (team *teamData) getLevelStatus() *levelStatus {
	return team.levels[team.currentLevel-1]
}

// Call this before working with teams[teamID]. Initializes values from Redis,
// MySQL, or default starting state if the team isn't in the map. Marks the
// team as active so it won't get evicted for the next 5 minuts.
func (teams teamMap) touch(teamID string) (bool, error) {
	if teams[teamID] != nil {
		teams[teamID].lastHeartbeat = time.Now()
		return false, nil
	}

	// TODO: hydrate from Redis or MySQL
	teams[teamID] = &teamData{
		currentLevel:  1,
		lastHeartbeat: time.Now(),
		levels: [3]*levelStatus{
			&levelStatus{
				won:            false,
				unlockedChunks: 2,
				state:          level1.DefaultState(),
			},
			&levelStatus{
				won:            false,
				unlockedChunks: 0,
				state:          level2.DefaultState(),
			},
			&levelStatus{
				won:            false,
				unlockedChunks: 0,
				state:          level3.DefaultState(),
			},
		},
	}

	return true, nil
}

func (team *teamData) resetLevelStates() {
	team.levels[0].state = level1.DefaultState()
	team.levels[1].state = level2.DefaultState()
	team.levels[2].state = level3.DefaultState()
}
