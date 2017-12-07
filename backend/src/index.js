/* eslint arrow-body-style: 0 */

const HuntJS = require('huntjs-backend');
let fakeGameState = '1,1512620911301,1,28';

HuntJS.post('/move', ({ data }) => {
  if (!data || !data.direction) {
    throw HuntJS.Error(422, 'No direction given');
  }

  if (!['N', 'E', 'S', 'W', 'NE', 'SE', 'SW', 'NW'].includes(data.direction)) {
    throw HuntJS.Error(422, 'Invalid direction');
  }

  // TODO: send this to the simulation service
  console.log(`Got direction command: ${data.direction}`);

  return null;
}, {
  sessionRateLimit: {
    limit: 1,
    window: 4, // seconds
  },
});

HuntJS.get('/gameState', () => {
  // TODO: get the actual game state from the simulation service
  return fakeGameState;
});

HuntJS.get('/currentTime', () => {
  // TODO: query simulation service for its time
  return Date.now();
});

HuntJS.get('/levelData', ({ data }) => {
  if (!data || !data.level) {
    throw HuntJS.Error(422, 'No level given');
  }

  if (data.level !== 1) {
    throw HuntJS.Error(422, 'You haven\'t unlocked that level');
  }

  // TODO: actual level data
  return 'fake level data';
});

HuntJS.get('/teamStatus', () => {
  // TODO: query actual team status from MySQL
  return {
    level: 1,
    levelStatuses: [
      { won: false, artifact: null },
      { won: false, artifact: null },
      { won: false, artifact: null },
    ],
  };
});

HuntJS.post('/changeLevel', ({ data }) => {
  if (!data || !data.level) {
    throw HuntJS.Error(422, 'No level given');
  }

  if (data.level !== 1) {
    throw HuntJS.Error(422, 'You haven\'t unlocked that level');
  }

  // TODO: actually change the level
  return 'fake level data';
});

// For testing, clients can hit startFakeEmitters to send some garbage to the
// pubsub channels
const fakeEmittersStartedForTeamIds = new Set();
HuntJS.post('/startFakeEmitters', ({ team, pubsub }) => {
  if (fakeEmittersStartedForTeamIds.has(team.id())) {
    return null;
  }

  fakeEmittersStartedForTeamIds.add(team.id());

  const fakeGameStates = ['1,1512620911301,1,28', '1,1512620911301,2,28', '1,1512620911301,2,27', '1,1512620911301,1,27'];
  setInterval(() => {
    const newIdx = (fakeGameStates.indexOf(fakeGameState) + 1) % fakeGameStates.length;
    fakeGameState = fakeGameStates[newIdx];

    pubsub.publish('gameState', fakeGameState);
  }, 1000);

  const fakeMessages = [
    'You have been eaten by a grue',
    'You have fallen into lava',
    'You have been spotted by a guard',
  ];
  setInterval(() => {
    const message = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
    pubsub.publish('notifications', message);
  }, 15000);

  return null;
});


HuntJS.serve();
