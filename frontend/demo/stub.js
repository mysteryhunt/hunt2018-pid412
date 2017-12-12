function move(direction) {
    //setTimeout(actuallyMove, 1000, direction);
    actuallyMove(direction);
}

var darts = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	     -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	     -1, -1, -1, -1];
var statues = [-1, 0, 23, 28,
	       0, 0, 21, 13,
	       3, 0, 14, 17,
	       -1, 0, 14, 12,
	       0, 0, 2, 16,
	       3, 0, 7, 3,
	       -1, 0, 14, 3,
	       0, 0, 23, 1,
	       3, 0, 27, 1]
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
    if (maps[level][ninjaY][ninjaX][0] == 'p') {
	darts[parseInt(maps[level][ninjaY][ninjaX][2], 26)] = time * 1000;
    }
    update();
}

function clientInit() {
    setInterval(function(){
	++time;
	update();
    }, 1000);
    update();
}

function update() {
    var args = [level, 0, ninjaX, ninjaY];
    if (level == 2) {
	args = args.concat(darts);
    }
    if (level == 3) {
	args = args.concat(statues);
	for (var i = 4; i < args.length; i += 4) {
	    if (args[i] >= 0) {
		args[i] += time;
	    }
	}
    }
    handleState.apply(null, args);
}

var time = 0;
var ninjaX = 1;
var ninjaY = 28;
var xmap = {1: 1, 2: 18, 3: 1}
var ymap = {1: 28, 2: 28, 3: 24}
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
