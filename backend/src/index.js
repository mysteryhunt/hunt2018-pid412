/* eslint arrow-body-style: 0 */

const HuntJS = require('huntjs-backend');
const request = require('request');

const DB = require('./db');

DB.init();

let fakeGameState = '1,1512620911301,1,28';

function simPostCommand(path) {
  return new Promise((resolve, reject) => {
    request.post(`${process.env.SIMULATION_SERVICE_ADDRESS}${path}`, (error, httpResponse, body) => {
      const code = httpResponse && httpResponse.statusCode;

      if (error) {
        reject(error);
      } else if (code < 200 || code >= 400) {
        reject(new Error(`Got status code ${code} from ${process.env.SIMULATION_SERVICE_ADDRESS}${path}. Body: ${body}`));
      } else {
        resolve();
      }
    });
  }).catch(e => console.log(`Error requesting ${path}`, e));
}

function simGetValue(path) {
  return new Promise((resolve, reject) => {
    request.get(`${process.env.SIMULATION_SERVICE_ADDRESS}${path}`, (error, httpResponse, body) => {
      const code = httpResponse.statusCode;

      if (error) {
        reject(error);
      } else if (code < 200 || code >= 400) {
        reject(new Error(`Got status code ${code} from ${process.env.SIMULATION_SERVICE_ADDRESS}${path}. Body: ${body}`));
      } else {
        resolve(body);
      }
    });
  });
}

HuntJS.post('/move', async ({ team, data }) => {
  if (!data || !data.direction) {
    throw HuntJS.Error(422, 'No direction given');
  }

  if (!['N', 'E', 'S', 'W', 'NE', 'SE', 'SW', 'NW'].includes(data.direction)) {
    throw HuntJS.Error(422, 'Invalid direction');
  }

  console.log(`Got direction command: ${data.direction}`);
  await simPostCommand(`/${team.id()}/move/${data.direction}`);

  return null;
}, {
  sessionRateLimit: {
    limit: 1,
    window: 4, // seconds
  },
});

HuntJS.post('/moveUnlimited', async ({ team, data }) => {
  if (!data || !data.direction) {
    throw HuntJS.Error(422, 'No direction given');
  }

  if (!['N', 'E', 'S', 'W', 'NE', 'SE', 'SW', 'NW'].includes(data.direction)) {
    throw HuntJS.Error(422, 'Invalid direction');
  }

  console.log(`Got direction command: ${data.direction}`);
  await simPostCommand(`/${team.id()}/move/${data.direction}`);

  return null;
});

HuntJS.post('/heartbeat', async ({ team }) => {
  simPostCommand(`/${team.id()}/heartbeat`);
  return null;
});

HuntJS.get('/currentTime', async () => {
  return Number(await simGetValue('/currentTime'));
});

HuntJS.get('/levelData', ({ data }) => {
  if (!data || !data.level) {
    throw HuntJS.Error(422, 'No level given');
  }

  if (data.level !== 1) {
    throw HuntJS.Error(422, 'You haven\'t unlocked that level');
  }

  // TODO: actual level data
  return ['fake level data 1', 'fake level data 2'];
});

HuntJS.get('/teamStatus', () => {
  // TODO: query actual team status from MySQL
  return {
    level: 1,
    levelStatuses: [
      { won: false, artifact: null, unlockedChunks: 4 },
      { won: false, artifact: null, unlockedChunks: 2 },
      { won: false, artifact: null, unlockedChunks: 2 },
    ],
  };
});

HuntJS.post('/changeLevel', async ({ data, team }) => {
  if (!data || !data.level) {
    throw HuntJS.Error(422, 'No level given');
  }

  if (data.level !== 1) {
    throw HuntJS.Error(422, 'You haven\'t unlocked that level');
  }

  await simPostCommand(`/${team.id()}/changeLevel/${data.level}`);
  return 'fake level data';
});

HuntJS.onSubscribe('gameState', ({ team }) => {
  simPostCommand(`/${team.id()}/refreshGameState`);
});

// For testing, clients can hit startFakeEmitters to send some garbage to the
// pubsub channels
const fakeEmittersStartedForTeamIds = new Set();
HuntJS.post('/startFakeEmitters', ({ team }) => {
  if (fakeEmittersStartedForTeamIds.has(team.id())) {
    return null;
  }

  fakeEmittersStartedForTeamIds.add(team.id());

  const fakeGameStates = ['1,1512620911301,1,28', '1,1512620911301,2,28', '1,1512620911301,2,27', '1,1512620911301,1,27'];
  setInterval(() => {
    const newIdx = (fakeGameStates.indexOf(fakeGameState) + 1) % fakeGameStates.length;
    fakeGameState = fakeGameStates[newIdx];

    team.publish('gameState', fakeGameState);
  }, 1000);

  const fakeMessages = [
    'You have been eaten by a grue',
    'You have fallen into lava',
    'You have been spotted by a guard',
  ];
  setInterval(() => {
    const message = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
    team.publish('notifications', message);
  }, 15000);

  return null;
});


HuntJS.serve();
