/* globals HuntJSClient, $ */

import { plot } from '../src/twitch';
import TimeSync from '../src/timesync';

const INACTIVITY_CUTOFF = 15 * 1000;
const REFRESH_RATE = 1 * 1000;

let client;
let maps;
let lastDeathTime;

// { [teamId: string]: { deaths, state, lastChange } }
const teams = {};

function render(teamsData) {
  let anyoneDied = false;
  let totalDeaths = 0;

  teamsData.forEach((teamData) => {
    const { team: teamId, state: newState, deaths: newDeaths, difficulty } = teamData;

    let didDie;
    if (teams[teamId]) {
      if (teams[teamId].deaths !== newDeaths) {
        didDie = true;
        anyoneDied = true;
        teams[teamId].deaths = newDeaths;
      }

      if (teams[teamId].state !== newState) {
        teams[teamId].lastChange = Date.now();
        teams[teamId].state = newState;
      }
    } else {
      teams[teamId] = { deaths: newDeaths, state: newState, lastChange: 0 };
      didDie = false;
    }

    totalDeaths += newDeaths;

    if (teams[teamId].lastChange > (Date.now() - INACTIVITY_CUTOFF)) {
      let gridParent = $(`#grid-${teamId}`);
      let grid;

      if (gridParent.length === 0) {
        gridParent = $('<div />').attr({
          class: 'grid-parent',
          id: `grid-${teamId}`,
        }).appendTo('#grids');

        $('<h3 />').text(teamId).appendTo(gridParent);
        grid = $('<table />').appendTo(gridParent);
      } else {
        grid = gridParent.find('table');
      }

      const [level, startTime, ninjaX, ninjaY, ...rest] = JSON.parse(`[${newState}]`);

      plot(level, maps[level], TimeSync.getTime() / 1000,
        startTime / 1000,
        ninjaY, ninjaX,
        rest,
        difficulty,
        grid[0],
      );

      if (didDie) {
        const flasher = $('<div />').attr('class', 'flasher');
        gridParent.append(flasher);

        flasher.fadeOut(500, () => flasher.remove());
      }
    } else {
      $(`#grid-${teamId}`).remove();
    }
  });

  if (anyoneDied) {
    lastDeathTime = Date.now();
  }

  document.getElementById('totalDeaths').innerText = totalDeaths;
}

function refresh() {
  client.get('/adminTeamStatuses')
    .then(data => render(data))
    .catch(err => console.error(err));
}

function renderTimeSinceDeath() {
  const seconds = Math.floor((Date.now() - lastDeathTime) / 1000);
  document.getElementById('timeSinceDeath').innerText = seconds;
}

function init() {
  client = HuntJSClient.connect('tpmh', 'http://localhost:8000');
  HuntJSClient.overrideAuth('__tpmhadmin__', `admin/${prompt('Enter TPMH admin password')}`);

  client.get('/adminLevelData')
    .then((data) => {
      maps = data.maps;

      setInterval(refresh, REFRESH_RATE);

      lastDeathTime = Date.now();
      setInterval(renderTimeSinceDeath, 100);
    })
    .catch((err) => {
      console.error(err);
    });

  TimeSync.start(client);
}

init();
