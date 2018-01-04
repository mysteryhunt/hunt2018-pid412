const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const HuntJS = require('huntjs-backend');

const SEKRIT = '1b6cd02228739723d0499e9e60c7329919cbdd56791ef481eb4a0d7648574244';
const TIMEOUT_SEC = 3;

function genChallenge(sessionId) {
  return jwt.sign({
    challenge: crypto.randomBytes(16).toString('hex'),
    sessionId,
  }, process.env.TPMH_JWT_CHALLENGE_SECRET, { expiresIn: TIMEOUT_SEC });
}

function verifySolution(challengeJWT, givenSolution, sessionId) {
  let challengeData;
  try {
    challengeData = jwt.verify(challengeJWT, process.env.TPMH_JWT_CHALLENGE_SECRET, {
      algorithms: ['HS256'],
    });
  } catch (e) {
    console.log('JWT verification failed', e);
    throw HuntJS.Error(422, 'Error processing command');
  }

  if (challengeData.sessionId !== sessionId) {
    console.log(`JWT session mismatch. Challenge: ${challengeJWT} Solution: ${givenSolution} SessionId: ${sessionId}`);
    throw HuntJS.Error(422, 'Error processing command');
  }

  const hash = crypto.createHash('sha256');
  hash.update(`${challengeData.challenge}${SEKRIT}${sessionId}`);
  const correctSolution = hash.digest('hex');

  if (givenSolution !== correctSolution) {
    console.log(`JWT challenge mismatch. Challenge: ${challengeData.challenge} Given Soln: ${givenSolution}  Correct Soln: ${correctSolution} SessionId: ${sessionId}`);
    throw HuntJS.Error(422, 'Error processing command');
  }
}

module.exports = { genChallenge, verifySolution };
