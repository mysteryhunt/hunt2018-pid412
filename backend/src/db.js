const mysql = require('huntjs-backend')._mysql;


module.exports = {
  init() {
    mysql.query(`
      CREATE TABLE IF NOT EXISTS tpmh_team_levels (
        team varchar(128) COLLATE utf8mb4_bin NOT NULL,
        level tinyint NOT NULL DEFAULT 1,
        deaths int NOT NULL DEFAULT 0,
        difficulty float NOT NULL DEFAULT 1,
        PRIMARY KEY (team)
      ) ENGINE=InnoDB;
    `, (err) => {
        if (err) {
          console.error(err, 'Error initializing tpmh_team_levels table');
        }
      });

    mysql.query(`
      CREATE TABLE IF NOT EXISTS tpmh_team_unlocks_v2 (
        team varchar(128) COLLATE utf8mb4_bin NOT NULL,
        level tinyint NOT NULL,
        won bool NOT NULL DEFAULT 0,
        unlocked_chunks tinyint NOT NULL DEFAULT 2,
        PRIMARY KEY (team, level)
      ) ENGINE=InnoDB;
    `, (err) => {
        if (err) {
          console.error(err, 'Error initializing tpmh_team_unlocks table');
        }
      });
  },

  fetchTeamData(teamId) {
    return new Promise((resolve, reject) => {
      mysql.query(
        `
          SELECT
            tpmh_team_levels.level AS team_level,
            tpmh_team_levels.deaths AS team_deaths,
            tpmh_team_levels.difficulty AS team_difficulty,
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
          WHERE tpmh_team_levels.team = ?;
        `,
        [teamId],
        (err, res) => {
          if (err) {
            reject(err);
            return;
          }

          if (res.length === 0) {
            // return defaults
            resolve({
              level: 1,
              deaths: 0,
              difficulty: 1,
              levels: [
                { won: false, unlockedChunks: 2 },
                { won: false, unlockedChunks: 2 },
                { won: false, unlockedChunks: 2 },
              ],
            });
          } else {
            const data = res[0];
            resolve({
              level: data.team_level,
              deaths: data.team_deaths,
              difficulty: data.team_difficulty,
              levels: [
                { won: data.level_1_won, unlockedChunks: data.level_1_unlocked_chunks },
                { won: data.level_2_won, unlockedChunks: data.level_2_unlocked_chunks },
                { won: data.level_3_won, unlockedChunks: data.level_3_unlocked_chunks },
              ],
            });
          }
        },
      );
    });
  },

  fetchAdminTeamData() {
    return new Promise((resolve, reject) => {
      mysql.query('SELECT team, deaths, difficulty FROM tpmh_team_levels;', (err, res) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(res);
      });
    });
  },
};
