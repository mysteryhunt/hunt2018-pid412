/* eslint eqeqeq:0, no-plusplus:0, no-use-before-define:0 no-mixed-operators:0 */

import { clientInit, updateTeamStatus, sendChatMessage, changeLevel, move, getTime, requestLevel } from './client';

const platCycleLen = 8;
const guardCycleLen = 22;
const dartVelocity = 1;

const windowSize = 11;

let teamDifficulty = 1;

const maps = {};

function plot(level, map, time, startTime, pr, pc, rest, difficulty, grid) {
  // First, preprocess moving things.
  const dartmap = {};
  if (level == 2) {
    const launchmap = {};
    for (let i = 0; i < rest.length; ++i) {
      if (rest[i] > 0) {
        launchmap[i] = rest[i] / 1000;
      }
    }
    for (let r = 0; r < map.length; ++r) {
      for (let c = 0; c < map[0].length; ++c) {
        const index = parseInt(map[r][c][2], 26);
        if (map[r][c][0] == 'd' && index in launchmap) {
          let dr = 0;
          let dc = 0;
          if (map[r][c][1] == 's') dr = 1;
          if (map[r][c][1] == 'n') dr = -1;
          if (map[r][c][1] == 'e') dc = 1;
          if (map[r][c][1] == 'w') dc = -1;
          let dartr = r;
          let dartc = c;
          let inflight = true;
          for (let flight = 0; flight < ((time - launchmap[index]) * difficulty) / dartVelocity;
            ++flight) {
            dartr += dr;
            dartc += dc;
            if (map[dartr][dartc][0] == 'w' || map[dartr][dartc][0] == 'd') {
              inflight = false;
              break;
            }
          }
          if (inflight) {
            dartmap[[dartr, dartc]] = map[r][c][1];
          }
        }
      }
    }
  }
  const statuemap = {};
  if (level == 3) {
    for (let i = 0; i < rest.length; i += 4) {
      let statue;
      if (rest[i] < 0) {
        statue = 'ss';
      } else if (((time - (rest[i] / 1000)) * difficulty) >= 3) {
        statue = 'sa';
      } else {
        statue = 'sw';
      }
      statuemap[[rest[i + 3], rest[i + 2]]] = statue;
    }
  }

  const t = (time - startTime) * difficulty;
  let html = '';
  let ro = pr - (windowSize - 1) / 2;
  if (ro < 0) ro = 0;
  if (ro >= map.length - windowSize) ro = map.length - windowSize;
  let co = pc - (windowSize - 1) / 2;
  if (co < 0) co = 0;
  if (co >= map[0].length - windowSize) co = map[0].length - windowSize;
  for (let row = 0; row < windowSize; ++row) {
    html += '<tr>';
    for (let col = 0; col < windowSize; ++col) {
      let icon = map[row + ro][col + co][0];
      if (
        icon != 'p' &&
        icon != 'd' &&
        icon != 'g' &&
        map[row + ro][col + co][2] != ' ' &&
        (
          (t - parseInt(map[row + ro][col + co][2], 26) + platCycleLen)
          % platCycleLen < platCycleLen / 2
        )
      ) {
        icon = 't';
      }
      if (icon == 'g' && map[row + ro][col + co][1] != ' ' && (
        map[row + ro][col + co][1] == '!' ||
                (t - parseInt(map[row + ro][col + co][1], 26)
                 + guardCycleLen) % guardCycleLen
                    < guardCycleLen / 2)) {
        icon = 'gr';
      }
      if (icon == 'x') {
        icon += level;
      }
      if (icon == 'd') {
        icon += map[row + ro][col + co][1];
      }
      html += `<td class="${icon}">`;

      if (row + ro == pr && col + co == pc) {
        html += '<span class="player"></span>';
      }
      if ([row + ro, col + co] in statuemap) {
        html += `<span class="${statuemap[[row + ro, col + co]]}"></span>`;
      }
      if ([row + ro, col + co] in dartmap) {
        html += `<span class="a${dartmap[[row + ro, col + co]]}"></span>`;
      }
      if (icon != 'p' && icon[0] != 'd' && icon[0] != 'g' &&
    map[row + ro][col + co][1] != ' ' && (
          map[row + ro][col + co][1] == '!' ||
    (t - parseInt(map[row + ro][col + co][1], 26)
     + guardCycleLen) % guardCycleLen
        < guardCycleLen / 2)) {
        html += '<span class="o"></span>';
      }
      html += '</td>';
    }
    html += '</tr>';
  }

  // eslint-disable-next-line no-param-reassign
  grid.innerHTML = html;
}

let state;
let lastLevel = -1;
function handleState(level, startTime, ninjaX, ninjaY, ...rest) {
  state = [level, startTime, ninjaX, ninjaY, rest];
  tick();
  if (lastLevel != level) {
    lastLevel = level;

    setTimeout(updateTeamStatus, 1000);
  }
}

function handleTeamStatus(level, levelStatuses) {
  let extra = '';
  let inventory = '';
  if (levelStatuses[2].won) {
    inventory = `, ${levelStatuses[2].artifact}`;
  }
  if (levelStatuses[1].won) {
    extra = ', switch 1, switch 2, switch 3';
    inventory = `${levelStatuses[0].artifact}, ${
      levelStatuses[1].artifact}${inventory}`;
  } else if (levelStatuses[0].won) {
    extra = ', switch 1, switch 2';
    inventory = levelStatuses[0].artifact + inventory;
  } else {
    inventory = 'nothing';
  }
  document.getElementById('levelbit').innerHTML = extra;
  document.getElementById('inventory').innerHTML = inventory;

  if (levelStatuses[0].won && levelStatuses[1].won && levelStatuses[2].won) {
    document.getElementById('godMode').style.display = 'block';
  } else {
    document.getElementById('godMode').style.display = 'none';
  }
}

function setDifficulty(newDifficulty) {
  teamDifficulty = newDifficulty;
}

function handleDeaths(deaths) {
  document.getElementById('deathCount').innerText = deaths;
}

function tick() {
  if (state) {
    const level = state[0];
    const startTime = state[1];
    const ninjaX = state[2];
    const ninjaY = state[3];
    const rest = state[4];


    if (maps[level]) {
      plot(level, maps[level], getTime() / 1000,
        startTime / 1000,
        ninjaY, ninjaX,
        rest,
        teamDifficulty,
        document.getElementById('grid'),
      );
    } else {
      requestLevel(level);
    }
  }
}

const commands = {
  n: true,
  s: true,
  e: true,
  w: true,
  ne: true,
  se: true,
  nw: true,
  sw: true,
};

function init() {
  checkBrowser();

  document.getElementById('entry').addEventListener(
    'keydown', (event) => {
      if (event.key == 'Enter') {
        const msg = document.getElementById('entry').value;

        if (!msg) {
          return;
        }

        let send = true;
        if (msg in commands) {
          send = move(msg.toUpperCase());
        }
        if (msg.startsWith('switch ')) {
          changeLevel(parseInt(msg.slice(7), 10));
        }
        if (msg == 'restart level') {
          changeLevel(lastLevel);
        }
        if (send) {
          sendChatMessage(msg,
            document.getElementById('username').value);
        }
        document.getElementById('entry').value = '';
      }
    });

  clientInit();

  setInterval(tick, 100);
}

function checkBrowser() {
  // We need webassembly support. Also, safari block third-party cookies which
  // makes it not work when serving the puzzle off a non-production domain,
  // so we need to warn about Safari for now (but should work once we're on
  // the production domain)

  const supportsWasm = (typeof WebAssembly === 'object');
  const isSafari = (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1);

  if (isSafari || !supportsWasm) {
    document.getElementById('browserWarning').style.display = 'block';
  }
}

function addToChat(message, sender, classArg) {
  const className = classArg || '';

  const chat = document.getElementById('chat');

  const msgSpan = document.createElement('span');
  msgSpan.className = className;

  if (sender) {
    const senderEl = document.createElement('b');
    senderEl.innerText = sender;

    msgSpan.appendChild(senderEl);
    msgSpan.appendChild(document.createTextNode(': '));
  }

  const bodySpan = document.createElement('span');
  bodySpan.appendChild(document.createTextNode(message));

  // allow <b>
  bodySpan.innerHTML = bodySpan.innerHTML.replace(/&lt;b&gt;/g, '<b>').replace(/&lt;\/b&gt;/g, '</b>');

  msgSpan.appendChild(bodySpan);

  chat.appendChild(msgSpan);
  chat.appendChild(document.createElement('br'));

  chat.scrollTop = chat.scrollHeight;
}

function handleLevelData(level, data) {
  maps[level] = data;
}

export {
  addToChat, init, handleTeamStatus, handleState, handleDeaths, setDifficulty,
  handleLevelData, plot,
};
