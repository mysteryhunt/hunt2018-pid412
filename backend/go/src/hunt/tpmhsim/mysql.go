package main

import "database/sql"
import _ "github.com/go-sql-driver/mysql"
import "fmt"
import "regexp"

type mysqlTeamData struct {
	level      int8
	difficulty float64

	level1Won            bool
	level1UnlockedChunks int8

	level2Won            bool
	level2UnlockedChunks int8

	level3Won            bool
	level3UnlockedChunks int8
}

type mysqlConnection struct {
	client *sql.DB
}

func newMysqlConnection(host string,
	port int,
	user string,
	password string,
	db string,
) (*mysqlConnection, error) {
	var auth string
	if len(password) > 0 {
		auth = fmt.Sprintf("%s:%s", user, password)
	} else {
		auth = user
	}

	client, err := sql.Open("mysql", fmt.Sprintf("%s@tcp(%s:%d)/%s?multiStatements=true", auth, host, port, db))
	if err != nil {
		return nil, fmt.Errorf("Error connecting to MySQL: %s", err)
	}

	return &mysqlConnection{client}, nil
}

// The Go MySQL driver can only handle parameter interpolation in single-query
// statements. So instead of using parameter interpolation, we validate
// team IDs against a whitelist of characters
var validatedTeamIDs = map[string]bool{}

func validateTeamID(teamID string) bool {
	if validatedTeamIDs[teamID] {
		return true
	}

	isValid, err := regexp.MatchString("^[a-zA-Z0-9 _\\-]+$", teamID)
	if err != nil {
		log.Errorw("Error while validating team ID",
			"teamID", teamID,
			"error", err)

		return false
	}

	validatedTeamIDs[teamID] = isValid
	return isValid
}

func boolToBit(b bool) int8 {
	if b {
		return 1
	}

	return 0
}

func bitToBool(bit int8) bool {
	if bit == 0 {
		return false
	}

	return true
}

func (conn *mysqlConnection) flushMysql(teamID string, data *mysqlTeamData) {
	if !validateTeamID(teamID) {
		log.Errorw("Team ID was invalid; not saving",
			"teamID", teamID)

		return
	}

	query := fmt.Sprintf(
		`
			INSERT INTO tpmh_team_levels
				(team, level)
			VALUES
				('%[1]s', %[2]d)
			ON DUPLICATE KEY UPDATE
				level = %[2]d;

			INSERT INTO tpmh_team_unlocks_v2
				(team, level, won, unlocked_chunks)
			VALUES
				('%[1]s', 1, %[3]d, %[4]d)
			ON DUPLICATE KEY UPDATE
				won = %[3]d,
				unlocked_chunks = %[4]d;

			INSERT INTO tpmh_team_unlocks_v2
				(team, level, won, unlocked_chunks)
			VALUES
				('%[1]s', 2, %[5]d, %[6]d)
			ON DUPLICATE KEY UPDATE
				won = %[5]d,
				unlocked_chunks = %[6]d;

			INSERT INTO tpmh_team_unlocks_v2
				(team, level, won, unlocked_chunks)
			VALUES
				('%[1]s', 3, %[7]d, %[8]d)
			ON DUPLICATE KEY UPDATE
				won = %[7]d,
				unlocked_chunks = %[8]d;
		`,
		teamID, data.level,
		boolToBit(data.level1Won), data.level1UnlockedChunks,
		boolToBit(data.level2Won), data.level2UnlockedChunks,
		boolToBit(data.level3Won), data.level3UnlockedChunks,
	)

	_, err := conn.client.Exec(query)
	if err != nil {
		log.Errorw("Error while flushing MySQL data",
			"teamID", teamID,
			"error", err)
	}

	log.Infow("Flushed MySQL data",
		"teamID", teamID)
}

func (conn *mysqlConnection) loadTeamData(teamID string) (*mysqlTeamData, error) {
	if !validateTeamID(teamID) {
		return nil, fmt.Errorf("Team ID was invalid: %s", teamID)
	}

	query := fmt.Sprintf(
		`
			SELECT
				tpmh_team_levels.level AS team_level,
				tpmh_team_levels.difficulty AS difficulty,
				level_1.won AS level_1_won,
				level_1.unlocked_chunks AS level_1_unlocked_chunks,
				level_2.won AS level_2_won,
				level_2.unlocked_chunks AS level_2_unlocked_chunks,
				level_3.won AS level_3_won,
				level_3.unlocked_chunks AS level_3_unlocked_chunks
			FROM tpmh_team_levels
			INNER JOIN tpmh_team_unlocks_v2 AS level_1
				ON tpmh_team_levels.team = level_1.team
				AND level_1.level = 1
			INNER JOIN tpmh_team_unlocks_v2 AS level_2
				ON tpmh_team_levels.team = level_2.team
				AND level_2.level = 2
			INNER JOIN tpmh_team_unlocks_v2 AS level_3
				ON tpmh_team_levels.team = level_3.team
				AND level_3.level = 3
			WHERE tpmh_team_levels.team = '%s';
		`,
		teamID,
	)

	data := mysqlTeamData{}
	levelsWonBits := [3]int8{}

	err := conn.client.QueryRow(query).Scan(
		&data.level,
		&data.difficulty,
		&levelsWonBits[0],
		&data.level1UnlockedChunks,
		&levelsWonBits[1],
		&data.level2UnlockedChunks,
		&levelsWonBits[2],
		&data.level3UnlockedChunks,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}

		return nil, err
	}

	data.level1Won = bitToBool(levelsWonBits[0])
	data.level2Won = bitToBool(levelsWonBits[1])
	data.level3Won = bitToBool(levelsWonBits[2])

	return &data, nil
}

func (conn *mysqlConnection) incrementDeathCounter(teamID string, redis *redisConnection) {
	_, err := conn.client.Exec(`
		UPDATE tpmh_team_levels
		SET deaths = deaths + 1
		WHERE team = ?;
	`, teamID)

	if err != nil {
		log.Errorw("Team ID was invalid; not incrementing death counter",
			"teamID", teamID,
			"err", err)

		return
	}

	var deaths int
	err = conn.client.
		QueryRow(`SELECT deaths FROM tpmh_team_levels WHERE team = ?`, teamID).
		Scan(&deaths)

	if err != nil {
		if err == sql.ErrNoRows {
			log.Errorw("No rows when reading team death count",
				"teamID", teamID)

			return
		}

		log.Errorw("Error while reading team death count",
			"teamID", teamID,
			"error", err)
	}

	redis.publishDeathCount(teamID, deaths)
}
