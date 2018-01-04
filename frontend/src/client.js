/* globals HuntJSClient, toastr */

import TimeSync from './timesync';
import { addToChat, handleTeamStatus, handleState, handleDeaths, setDifficulty, handleLevelData } from './twitch';

let client;

let rateLimitEnabled = true;
let status = 'wait'; // ready, submitting, or wait

const worker = new Worker('worker/worker.js');

function changeStatus(newStatus) {
  status = newStatus;
  document.getElementById('status-text').innerText = status;
}

setTimeout(() => changeStatus('ready'), 4000);

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function solveChallenge(jwt) {
  const data = JSON.parse(atob(jwt.split('.')[1]));
  const chall = data.challenge;
  const sess = data.sessionId;

  return new Promise((resolve, reject) => {
    let done = false;

    const timeout = setTimeout(() => {
      if (done) {
        return;
      }

      done = true;
      reject(new Error('Timed out'));
    }, 2000);

    worker.onmessage = (e) => {
      if (done) {
        return;
      }

      done = true;
      clearTimeout(timeout);
      resolve(e.data);
    };

    worker.postMessage({ sess, chall });
  });
}

function clientInit() {
  // To connect to the dev backend
  client = HuntJSClient.connect('tpmh', 'http://localhost:8000');
  HuntJSClient.overrideAuth('test-team', 'dev');

  // To connect to the prod backend
  // client = HuntJSClient.connect('tpmh', 'https://puzzle-tpmh.head-hunters.org');

  function heartbeat() {
    client.post('/heartbeat')
      .then(() => console.log('/hearbeat succeeded'))
      .catch(e => console.error('/hearbeat failed', e));
  }

  heartbeat();
  setInterval(heartbeat, 2 * 60 * 1000);


  client.subscribe('gameState', (newState) => {
    // console.log('New game state:', newState);
    handleState(...JSON.parse(`[${newState}]`));
  });

  function messageIsInfo(msg) {
    return (msg.indexOf('You have found') > -1) || (msg.indexOf('leveled up') > -1);
  }

  client.subscribe('notifications', (msg) => {
    const className = messageIsInfo(msg) ? 'info' : 'warn';
    addToChat(msg, null, className);
  });

  client.subscribe('chatMessages', (msgStr) => {
    const msg = JSON.parse(msgStr);
    addToChat(msg.message, msg.name);
  });

  client.subscribe('deaths', (msg) => {
    handleDeaths(Number(msg));
  });

  TimeSync.start(client);

  if (document.location.search.indexOf('devmode') >= 0) {
    document.getElementById('debugtools').style.display = 'block';
  }
}

function getTime() {
  return TimeSync.getTime();
}

function move(direction) {
  if (!rateLimitEnabled) {
    changeStatus('submitting');
    client.post('/moveUnlimited', { direction })
      .catch(e => toastr.error(e.message))
      .then(() => changeStatus('ready'));

    return true;
  }

  if (status === 'submitting') {
    toastr.error('Move already in progress');
    return false;
  }

  if (status === 'wait') {
    toastr.error('You may only move once every 4 seconds');
    return false;
  }

  changeStatus('submitting');
  client.get('/challenge')
    .then(challenge =>
      solveChallenge(challenge).then(solution => ({
        challenge,
        solution,
      })),
    )
    .then(({ challenge, solution }) => client.post('/move', { direction, challenge, solution }))
    .then(() => changeStatus('wait'))
    .then(() => wait(3000))
    .catch((e) => {
      console.log(e);
      toastr.error(e.message);
    })
    .then(() => changeStatus('ready'));

  return true;
}

// TODO: REMOVE
function toggleRateLimiting() {
  rateLimitEnabled = !rateLimitEnabled;
  if (status === 'wait') {
    changeStatus('ready');
  }
  document.getElementById('rate-limit-indicator').innerText = String(rateLimitEnabled);
}
window.toggleRateLimiting = toggleRateLimiting;

function changeLevel(level) {
  changeStatus('submitting');
  client.post('/changeLevel', { level })
    .catch(e => toastr.error(e.message))
    .then(() => changeStatus('ready'));
}

function sendChatMessage(message, name) {
  client.post('/sendChatMessage', { message, name })
    .catch(e => toastr.error(e.message));
}

function updateTeamStatus() {
  client.get('/teamStatus')
    .then((r) => {
      handleTeamStatus(r.level, r.levelStatuses);
      setDifficulty(r.difficulty);
      handleDeaths(r.deaths);
    })
    .catch(e => console.error('/teamStatus failed', e));
}

const pendingRequests = {};
function requestLevel(level) {
  if (pendingRequests[level]) {
    return;
  }

  pendingRequests[level] = true;

  client.get('/levelData', { level })
    .then(data => handleLevelData(level, data))
    .catch(err => console.error('Error retrieving level data', err))
    .then(() => delete pendingRequests[level]);
}

export { clientInit, updateTeamStatus, sendChatMessage, changeLevel, move, getTime, requestLevel };
