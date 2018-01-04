let client;
const samples = [];
let computedOffset = 0;
let lastLoggedAt = null;

function average(items) {
  return items.reduce((a, b) => a + b, 0) / items.length;
}

function updateOffset() {
  const sortedSamples = samples.slice(0).sort((a, b) => {
    if (a.rtt < b.rtt) {
      return -1;
    } else if (a.rtt > b.rtt) {
      return 1;
    }
    return 0;
  });

  const samplesToAverage = sortedSamples.slice(0, 3);
  computedOffset = average(samplesToAverage.map(s => s.offset));

  if (lastLoggedAt == null || (Math.abs(lastLoggedAt - computedOffset) > 100)) {
    lastLoggedAt = computedOffset;
    console.log('New timesync offset:', computedOffset);
  }
}

function addSample(sample) {
  if (samples.length >= 10) {
    samples.shift();
  }

  samples.push(sample);
  updateOffset();
}

function takeSample() {
  const startTime = Date.now();

  client.get('/currentTime')
    .then((timeStr) => {
      const serverTime = Number(timeStr);
      if (Number.isNaN(serverTime)) {
        console.error('/currentTime returned an invalid number:', timeStr);
        return;
      }

      const endTime = Date.now();
      const rtt = endTime - startTime;
      const offset = (startTime + (rtt / 2)) - serverTime;

      addSample({ rtt, offset });

      if (samples.length < 10) {
        setTimeout(takeSample, 200);
      }
    });
}

export default {
  start(huntClient) {
    client = huntClient;
    takeSample();
    setInterval(takeSample, 2000);
  },

  getTime() {
    return Date.now() - computedOffset;
  },
};
