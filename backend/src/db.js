const mysql = require('huntjs-backend')._mysql;

module.exports = {
  init() {
    mysql.query(`
      CREATE TABLE IF NOT EXISTS tpmh_team_levels (
        team varchar(128) COLLATE utf8mb4_bin NOT NULL,
        level tinyint NOT NULL DEFAULT 1,
        PRIMARY KEY (team)
      ) ENGINE=InnoDB;
    `, (err) => {
        if (err) {
          console.error(err, 'Error initializing tpmh_team_levels table');
        }
      });

    mysql.query(`
      CREATE TABLE IF NOT EXISTS tpmh_team_unlocks (
        team varchar(128) COLLATE utf8mb4_bin NOT NULL,
        level tinyint NOT NULL,
        won bit NOT NULL DEFAULT 0,
        unlockedChunks tinyint NOT NULL DEFAULT 2,
        PRIMARY KEY (team, level)
      ) ENGINE=InnoDB;
  `, (err) => {
        if (err) {
          console.error(err, 'Error initializing tpmh_team_unlocks table');
        }
      });
  },
};
