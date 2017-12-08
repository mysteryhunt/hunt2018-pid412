package main

// Commands from the API server
type moveCommand struct {
	teamID string
	dir    direction
}

type changeLevelCommand struct {
	teamID   string
	newLevel int8
}

// A set of teams. Used to track which teams we need to flush redis and/or
// mysql data for.
type teamSet map[string]bool

// Main simulation loop
func startSimulator(
	moveChannel chan *moveCommand,
	heartbeatChannel chan string,
	refreshGameStateChannel chan string,
	changeLevelChannel chan *changeLevelCommand,
) {
	teams := make(teamMap)

	for {
		redisNeedsFlush := make(teamSet)
		mysqlNeedsFlush := make(teamSet)

		// Process commands from the channels
		simulatorProcessMoves(moveChannel, teams, redisNeedsFlush)
		simulatorProcessHeartbeats(heartbeatChannel, teams)
		simulatorProcessRefreshRequests(refreshGameStateChannel, redisNeedsFlush)
		simulatorProcessLevelChanges(changeLevelChannel, teams, redisNeedsFlush, mysqlNeedsFlush)

		// Simulate a frame
		// If there were changes:
		// - add to redisNeedsFlush
		// - add to mysqlNeedsFlush if any of
		//   - team has not won the level and the level is now won
		//   - (current chunk + 2) > unlockedChunks
		for teamID, team := range teams {
			teamLevelStatus := team.getLevelStatus()
			teamLevelState := teamLevelStatus.state

			didChange := teamLevelState.RunFrame()

			if didChange {
				redisNeedsFlush[teamID] = true

				if !teamLevelStatus.won && teamLevelState.IsWon() {
					teamLevelStatus.won = true
					mysqlNeedsFlush[teamID] = true
				}

				if (teamLevelState.CurrentChunk() + 2) > teamLevelStatus.unlockedChunks {
					teamLevelStatus.unlockedChunks = (teamLevelState.CurrentChunk() + 2)
					mysqlNeedsFlush[teamID] = true
				}
			}
		}

		// Fush redis and mysql

		// Prune abandoned games

		// Log status

		// Sleep
	}
}

// Channel processors
func simulatorProcessMoves(moveChannel chan *moveCommand, teams teamMap, redisNeedsFlush teamSet) {
	for i := 0; i < config.MaxBufferLength; i++ {
		select {
		case moveCmd := <-moveChannel:
			teamID := moveCmd.teamID

			err := teams.touch(teamID)
			if err != nil {
				log.Errorw("Encountered an error touching team state while processing move command",
					"error", err,
					"teamID", teamID)
				continue
			}

			levelStatus, err := teams.getLevelStatus(teamID)
			if err != nil {
				log.Errorw("Encountered an error getting level state while processing move command",
					"error", err,
					"teamID", teamID)
				continue
			}

			deltaX, deltaY := moveCmd.dir.offsets()
			if levelStatus.state.MoveNinja(deltaX, deltaY) {
				redisNeedsFlush[teamID] = true
			}
		default:
			return
		}
	}
}

func simulatorProcessHeartbeats(heartbeatChannel chan string, teams teamMap) {
	for i := 0; i < config.MaxBufferLength; i++ {
		select {
		case teamID := <-heartbeatChannel:
			err := teams.touch(teamID)
			if err != nil {
				log.Errorw("Encountered an error touching team state while processing heartbeat command",
					"error", err,
					"teamID", teamID)
			}
		default:
			return
		}
	}
}

func simulatorProcessRefreshRequests(refreshGameStateChannel chan string, redisNeedsFlush teamSet) {
	for i := 0; i < config.MaxBufferLength; i++ {
		select {
		case teamID := <-refreshGameStateChannel:
			redisNeedsFlush[teamID] = true
		default:
			return
		}
	}
}

func simulatorProcessLevelChanges(
	changeLevelChannel chan *changeLevelCommand,
	teams teamMap,
	redisNeedsFlush teamSet,
	mysqlNeedsFlush teamSet,
) {
	for i := 0; i < config.MaxBufferLength; i++ {
		select {
		case changeLevelCommand := <-changeLevelChannel:
			teamID := changeLevelCommand.teamID
			newLevel := changeLevelCommand.newLevel

			err := teams.touch(teamID)
			if err != nil {
				log.Errorw("Encountered an error touching team state while processing changeLevel command",
					"error", err,
					"teamID", teamID)
				continue
			}

			team := teams[teamID]
			if team != nil {
				log.Errorw("Team was nil while processing changeLevel command",
					"teamID", teamID)
				continue
			}

			if team.currentLevel == newLevel {
				log.Warnw("changeLevel command was a no-op while processing changeLevel command",
					"teamID", teamID,
					"level", newLevel)
				continue
			}

			if (newLevel < 1) || (newLevel > 3) {
				log.Errorw("changeLevel command issues for invalid level",
					"teamID", teamID,
					"level", newLevel)
			}

			if (newLevel > 1) && (!team.levels[newLevel-2].won) {
				log.Errorw("changeLevel command issued for a level that was not unlocked",
					"teamID", teamID,
					"level", newLevel)
			}

			team.currentLevel = newLevel
			team.resetLevelStates()

			redisNeedsFlush[teamID] = true
			mysqlNeedsFlush[teamID] = true

		default:
			return
		}
	}
}
