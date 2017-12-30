/*
TEST SOLVERS STAY OUT!!!!!

This code will be minified, obfuscated, and have some other creative protections
applied to it. Please don't read or modify this code for right now.
*/
var client;

var rateLimitEnabled = true;
var delayEnabled = true;
var status = 'ready'; // ready, submitting, or wait

function changeStatus(newStatus) {
    status = newStatus;
    document.getElementById('status-text').innerText = status;
}

function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}

function clientInit() {
    // To connect to the dev backend
    client = HuntJSClient.connect('tpmh', 'http://localhost:8000');

    // To connect to the prod backend
    // client = HuntJSClient.connect('tpmh', 'https://puzzle-tpmh.head-hunters.org');

    function heartbeat() {
        client.post('/heartbeat')
            .then(r => console.log('/hearbeat succeeded'))
            .catch(e => console.error('/hearbeat failed', e));
    }

    heartbeat();
    setInterval(heartbeat, 2 * 60 * 1000);


    client.subscribe('gameState', (newState) => {
        //console.log('New game state:', newState);
	handleState.apply(null, JSON.parse('['+newState+']'));
    });

    function messageIsInfo(msg) {
        return (msg.indexOf('You have found') > -1) || (msg.indexOf('leveled up') > -1);
    }

    client.subscribe('notifications', msg => {
        var className = messageIsInfo(msg) ? 'info' : 'warn'
        addToChat(msg, null, className);
    });

    client.subscribe('chatMessages', msg => {
	msg = JSON.parse(msg);
	addToChat(msg.message, msg.name);
    });

    client.subscribe('deaths', msg => {
        handleDeaths(Number(msg));
    })

    TimeSync.start(client);

    if (document.location.search.indexOf('devmode') >= 0) {
        document.getElementById('debugtools').style.display = 'block';
    }
}

function getTime() {
    return TimeSync.getTime();
}

function move(direction) {
    if (status === 'submitting') {
        toastr.error('Move already in progress');
        return false;
    }

    if (status === 'wait') {
        toastr.error('You may only move once every 4 seconds');
        return false;
    }

    var endpoint = rateLimitEnabled ? '/move' : '/moveUnlimited';
    var delay = delayEnabled ? 1000 : 0;
    var rateLimit = rateLimitEnabled ? (4000 - delay) : 0;

    changeStatus('submitting');

    wait(delay)
        .then(() => client.post(endpoint, { direction: direction }))
        .then(() => changeStatus('wait'))
        .then(() => wait(rateLimit))
        .catch((e) => toastr.error(e.message))
        .then(() => changeStatus('ready'));
    return true;
}

function toggleRateLimiting() {
    rateLimitEnabled = !rateLimitEnabled;
    if (status === 'wait') {
        changeStatus('ready');
    }
    document.getElementById('rate-limit-indicator').innerText = String(rateLimitEnabled)
}

function toggleDelay() {
    delayEnabled = !delayEnabled;
    document.getElementById('delay-indicator').innerText = String(delayEnabled)
}

function delayEnabled() {
    delayEnabled = !delayEnabled;
    document.getElementById('delay-indicator').innerText = String(delayEnabled)
}

function changeLevel(level) {
    changeStatus('submitting');
    client.post('/changeLevel', { level })
        .catch((e) => toastr.error(e.message))
        .then(() => changeStatus('ready'));
}

function sendChatMessage(message, name) {
    client.post('/sendChatMessage', { message: message, name: name })
        .catch((e) => toastr.error(e.message));
}

function updateTeamStatus() {
    client.get('/teamStatus')
	.then(r => {
                console.log(r);
        handleTeamStatus(r['level'], r['levelStatuses']);
        setDifficulty(r.difficulty);
        handleDeaths(r.deaths);
    })
	.catch(e => console.error('/teamStatus failed', e));
}
