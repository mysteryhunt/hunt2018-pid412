var client;

function clientInit() {
    client = HuntJSClient.connect('tpmh', 'http://localhost:8000');

    function heartbeat() {
        client.post('/heartbeat')
            .then(r => console.log('/hearbeat succeeded'))
            .catch(e => console.error('/hearbeat failed', e));
    }
    
    heartbeat();
    setInterval(heartbeat, 2 * 60 * 1000);

    // Start up pubsub
    client.post('/startFakeEmitters')
        .then(() => console.log('Fake emitters started'))
        .catch(e => console.log('/startFakeEmitters failed', e));

    client.subscribe('gameState', (newState) => {
        //console.log('New game state:', newState);
	handleState.apply(null, eval('['+newState+']'));
    });
    
    client.subscribe('notifications', (msg) => {
        document.getElementById('notification').innerHTML = msg;
    });
}

function getTime() {
    return Date.now();
}

function move(direction) {
    client.post('/move', { direction: direction })
        .then(r => console.log('/move succeeded ', direction))
        .catch(e => console.error('/move failed', e));
}
