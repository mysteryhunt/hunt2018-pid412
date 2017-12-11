function move(direction) {
    //setTimeout(actuallyMove, 1000, direction);
    actuallyMove(direction);
}

function actuallyMove(direction) {
    if (direction.indexOf('N') != -1) {
	ninjaY -= 1;
    }
    if (direction.indexOf('S') != -1) {
	ninjaY += 1;
    }
    if (direction.indexOf('W') != -1) {
	ninjaX -= 1;
    }
    if (direction.indexOf('E') != -1) {
	ninjaX += 1;
    }
    update();
}

function clientInit() {
    setInterval(function(){ ++time; update(); }, 1000);
    update();
}

function update() {
    handleState(level, 0, ninjaX, ninjaY);
}

var time = 0;
var ninjaX = 1;
var ninjaY = 28;
var xmap = {1: 1, 2: 18}
var ymap = {1: 28, 2: 28}
var level = 1;

function getTime() {
    return time * 1000;
}

function changeLevel(num) {
    level = num;
    ninjaX = xmap[num];
    ninjaY = ymap[num];
    update();
}
