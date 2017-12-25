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
	RunFrame(bool, float64) (bool, []string, bool) // godMode, difficulty => didChange, []messages, didDie
	CurrentChunk() int8
	Serialize() string
	IsWon() bool
	ArtifactName() string
}

type teamData struct {
	currentLevel  int8
	difficulty    float64
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

func (team *teamData) toMysqlData() *mysqlTeamData {
	return &mysqlTeamData{
		level: team.currentLevel,

		level1Won:            team.levels[0].won,
		level1UnlockedChunks: team.levels[0].unlockedChunks,

		level2Won:            team.levels[1].won,
		level2UnlockedChunks: team.levels[1].unlockedChunks,

		level3Won:            team.levels[2].won,
		level3UnlockedChunks: team.levels[2].unlockedChunks,
	}
}

func (team *teamData) godModeActive() bool {
	return team.levels[0].won && team.levels[1].won && team.levels[2].won
}

// Call this before working with teams[teamID]. Initializes values from Redis,
// MySQL, or default starting state if the team isn't in the map. Marks the
// team as active so it won't get evicted for the next 5 minuts.
func (teams teamMap) touch(teamID string, redis *redisConnection, mysql *mysqlConnection) (bool, error) {
	if teams[teamID] != nil {
		teams[teamID].lastHeartbeat = time.Now()
		return false, nil
	}

	// Create a default state
	teamMysqlData, err := mysql.loadTeamData(teamID)
	if err != nil {
		return false, err
	}

	var data teamData

	if teamMysqlData == nil {
		// Create a fresh state
		data = teamData{
			currentLevel:  1,
			difficulty:    1,
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

		go mysql.flushMysql(teamID, data.toMysqlData())
	} else {
		// populate a state
		data = teamData{
			currentLevel:  teamMysqlData.level,
			difficulty:    teamMysqlData.difficulty,
			lastHeartbeat: time.Now(),
			levels: [3]*levelStatus{
				&levelStatus{
					won:            teamMysqlData.level1Won,
					unlockedChunks: teamMysqlData.level1UnlockedChunks,
					state:          level1.DefaultState(),
				},
				&levelStatus{
					won:            teamMysqlData.level2Won,
					unlockedChunks: teamMysqlData.level2UnlockedChunks,
					state:          level2.DefaultState(),
				},
				&levelStatus{
					won:            teamMysqlData.level3Won,
					unlockedChunks: teamMysqlData.level3UnlockedChunks,
					state:          level3.DefaultState(),
				},
			},
		}
	}

	// Try to load state from Redis
	stateStr, noState, err := redis.loadState(teamID)
	if err != nil {
		return false, err
	}

	if !noState {
		// we got the state from redis, deserialize it
		if string(stateStr[0]) == "1" {
			state, err := level1.DeserializeState(stateStr)

			if err != nil {
				log.Errorw("Error deserializing level 1 state",
					"stateStr", stateStr,
					"error", err)
				state = level1.DefaultState()
			}

			data.currentLevel = 1
			data.levels[0].state = state
		} else if string(stateStr[0]) == "2" {
			state, err := level2.DeserializeState(stateStr)

			if err != nil {
				log.Errorw("Error deserializing level 2 state",
					"stateStr", stateStr,
					"error", err)
				state = level2.DefaultState()
			}

			data.levels[1].state = state
			data.currentLevel = 2
		} else if string(stateStr[0]) == "3" {
			state, err := level3.DeserializeState(stateStr)

			if err != nil {
				log.Errorw("Error deserializing level 3 state",
					"stateStr", stateStr,
					"error", err)
				state = level3.DefaultState()
			}

			data.levels[2].state = state
			data.currentLevel = 3
		} else {
			return false, fmt.Errorf("Got Redis state but could not determine which level it's for: %s", stateStr)
		}
	}

	teams[teamID] = &data
	return true, nil
}

func (team *teamData) resetLevelStates() {
	team.levels[0].state = level1.DefaultState()
	team.levels[1].state = level2.DefaultState()
	team.levels[2].state = level3.DefaultState()
}
