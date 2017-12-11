var maps = {};
maps[1] = [['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	   ['w  ','f  ','f  ','f  ','l 0','l 2','l 4','l 6','l 0','l  ',
	    'l  ','l  ','l  ','l  ','l  ','l  ','f  ','fB ','f  ','f  ',
	    'f  ','f  ','l 3','l 3','l  ','l  ','f  ','f  ','x  ','w  '],
	   ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l 2','l 4',
	    'l 6','l 0','l 2','l  ','l  ','l  ','f  ','fB ','fB ','fB ',
	    'f  ','f  ','l  ','l 6','l 7','l  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l  ','l  ',
	    'l  ','l  ','l 4','l 6','l 0','l 2','l 4','fB ','fB ','fB ',
	    'g  ','f  ','l  ','l  ','l  ','l 5','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l 2','l 4',
	    'l 6','l 0','l 2','l  ','l  ','l  ','l  ','fB ','fB ','fB ',
	    'f  ','f  ','l 3','l 3','l  ','l  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','l 0','l 2','l 4','l 6','l 0','l  ',
	    'l  ','l  ','l  ','l  ','l  ','l  ','l  ','fB ','f  ','f  ',
	    'f  ','f  ','l  ','l 6','l 7','l  ','f  ','f  ','f  ','w  '],
	   ['w  ','fB ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','l  ','l  ','l  ','l  ','l  ','l  ',
	    'f  ','f  ','l  ','l  ','l 2','l 5','f  ','f  ','f  ','w  '],
	   ['w  ','fB ','g  ','f0 ','f0 ','f0 ','f  ','fB ','fB ','fB ',
	    'f  ','f0 ','f0 ','w  ','l  ','l  ','l  ','l  ','l  ','l  ',
	    'f  ','f  ','l 3','l 3','l  ','l  ','f  ','f  ','f  ','w  '],
	   ['w  ','fB ','f  ','f0 ','f0 ','f0 ','f  ','fB ','fB ','fB ',
	    'g  ','f0 ','f0 ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'f  ','f  ','l  ','l 6','l 7','l  ','f  ','f  ','f  ','w  '],
	   ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','fB ','f0 ','f  ','f  ','f  ','f  ','f0 ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','lB ','lB ','lB ','l  ','l0 ','l06','l02','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','fB ','fB ','fB ','g  ','f0 ','f0 ','f0 ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','fB ','fB ','fB ','f  ','f0 ','f0 ','f0 ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l 2','lB6','l  ','l0 ','l  ','l  ','l  ','l0 ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','g  ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l0 ','l0 ','l0 ','lB ','l  ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','f  ','f0 ','fB ','fB ','fB ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','f  ','f  ','fB ','fB ','fB ','g  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	   ['w  ','fB ','g  ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ',
	    'w  ','f  ','f  ','w  ','g  ','f0 ','f0 ','f0 ','f  ','l 6',
	    'l 3','l 0','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','fB ','f  ','f0 ','w  ','w  ','fB ','f  ','f0 ','f0 ',
	    'w  ','f  ','f  ','w  ','f  ','f0 ','f0 ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','w  ','w  ','fB ','g  ','f0 ','f0 ',
	    'w  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ',
	    'w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f0 ','f0 ','w  ','w  ','fB ','f  ','f0 ','f0 ',
	    'w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','f  ','f  ',
	    'w  ','fB ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	   ['w  ','g  ','f0 ','f0 ','w  ','w  ','f  ','f  ','f  ','f  ',
	    'w  ','f  ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ',
	    'w  ','fB ','fB ','fB ','g  ','f0 ','f0 ','f0 ','f  ','w  '],
	   ['w  ','f  ','f0 ','f0 ','w  ','w  ','fB ','fB ','f  ','f0 ',
	    'w  ','g  ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ',
	    'w  ','fB ','fB ','fB ','f  ','f0 ','f0 ','f0 ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','w  ','w  ','fB ','fB ','g  ','f0 ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','w  ','w  ','fB ','fB ','f  ','f0 ',
	    'l00','l 0','l 0','l 0','l 0','l 0','l 0','l 0','l 0','l 0',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	  ];
maps[2] = [['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','dv9','dvA','dvB','dvC','dvD','w  ','w  ','w  '],
	   ['d>5','fB ','fB ','fB ','f  ','f  ','p 5','f  ','f  ','f  ',
	    'f  ','p 6','f  ','f  ','f  ','f  ','d<6','fB ','f! ','g  ',
	    'f  ','l  ','l  ','l  ','l  ','l  ','l  ','f  ','f  ','w  '],
	   ['w  ','fB ','fB ','f! ','g  ','f  ','w  ','w  ','w  ','f  ',
	    'w  ','w  ','w  ','f  ','w  ','f  ','w  ','f! ','f! ','f0 ',
	    'f  ','l  ','l  ','p E','f  ','p L','l  ','f  ','f  ','d<E'],
	   ['w  ','f! ','f! ','f! ','f0 ','f  ','w  ','f  ','w  ','w  ',
	    'w  ','f  ','w  ','w  ','w  ','f  ','w  ','f! ','f0 ','f0 ',
	    'f  ','l  ','p F','l  ','p M','l  ','p K','f  ','f  ','d<F'],
	   ['w  ','f! ','f0 ','f0 ','f  ','f  ','d>7','f  ','f  ','f  ',
	    'f  ','f  ','p 7','f  ','f  ','f  ','w  ','f0 ','f0 ','f  ',
	    'f  ','f  ','f  ','p G','l  ','p L','f  ','f  ','f  ','d<G'],
	   ['w  ','f  ','f0 ','f0 ','f  ','f  ','w  ','f  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','f  ','l  ',
	    'f  ','f  ','f  ','p H','l  ','p C','f  ','f  ','f  ','d<H'],
	   ['w  ','f  ','f  ','f  ','f  ','f  ','d>8','f  ','f  ','p 8',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','l  ',
	    'l  ','l  ','p I','l  ','p B','l  ','p D','f  ','f  ','d<I'],
	   ['w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','dv2','w  ',
	    'l  ','l  ','l  ','p A','f  ','p C','l  ','f  ','f  ','d<J'],
	   ['w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','p 3','f  ',
	    'f  ','f  ','f  ','d<3','f  ','f  ','f  ','f  ','f  ','w  ',
	    'l  ','l  ','l  ','l  ','l  ','l  ','l  ','f  ','x  ','w  '],
	   ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','f  ','f  ','d>4','fB ','f  ','f  ','p 4','f  ','w  ',
	    'w  ','w  ','d^O','d^N','d^M','d^L','d^K','w  ','w  ','w  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','w  ','fB ','fB ','fB ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','f  ','fB ','fB ','f! ','g  ','p 2','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','f  ','f! ','f! ','f! ','f0 ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','f  ','l! ','l0 ','f0 ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','l  ','l  ','l  ','f0 ','f0 ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l  ','l  ','f  ','f  ','p 1','f  ','f  ','d<1',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l  ','f  ','f  ','f  ','f  ','f  ','l  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','f  ','f  ','f  ','f  ','f  ','l  ','l  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'd>0','f  ','p 0','f  ','f  ','f  ','l  ','l  ','l  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','l  ','l  ','l  ','l  ','l  ','l  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','f  ','fB ','f  ','f  ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','f  ','fB ','fB ','fB ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l  ','f  ','fB ','fB ','f! ','g  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l  ','l  ','f! ','f! ','f! ','f0 ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l  ','l  ','l! ','l0 ','f0 ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l  ','l  ','l  ','f0 ','f0 ','f  ','l  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l  ','l  ','f  ','f  ','f  ','l  ','l  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	  ];

var platCycleLen =  8;
var guardCycleLen = 22;

var windowSize = 11;

function plot(level, map, t, pr, pc, rest) {
    // First, preprocess moving things.
    var dartmap = {};
    if (level == 2) {
	var launchmap = {};
	for (var i = 0; i < rest.length; ++i) {
	    if (rest[i] > 0) {
		launchmap[i] = rest[i] / 1000;
	    }
	}
	for (var r = 0; r < map.length; ++r) {
	    for (var c = 0; c < map[0].length; ++c) {
		var index = parseInt(map[r][c][2], 26);
		if (map[r][c][0] == 'd' && index in launchmap) {
		    var dr = 0;
		    var dc = 0;
		    if (map[r][c][1] == 'v') dr = 1;
		    if (map[r][c][1] == '^') dr = -1;
		    if (map[r][c][1] == '>') dc = 1;
		    if (map[r][c][1] == '<') dc = -1;
		    var dartr = r;
		    var dartc = c;
		    var inflight = true;
		    //console.log(launchmap[index], t);
		    for (var flight = 0; flight < (t - launchmap[index]) / 2;
			 ++flight) {
			dartr += dr;
			dartc += dc;
			if (map[dartr][dartc][0] == 'w' ||
			    map[dartr][dartc][0] == 'd') {
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
    //console.log(dartmap);
    
    var html = '';
    var ro = pr - (windowSize - 1)/2;
    if (ro < 0) ro = 0;
    if (ro >= map.length - windowSize) ro = map.length - windowSize;
    var co = pc - (windowSize - 1)/2;
    if (co < 0) co = 0;
    if (co >= map[0].length - windowSize) co = map[0].length - windowSize;
    for (var row = 0; row < windowSize; ++row) {
	html += '<tr>';
	for (var col = 0; col < windowSize; ++col) {
	    var icon = map[row + ro][col + co][0];
	    if (icon != 'p' && icon != 'd' &&
		map[row + ro][col + co][2] != ' ' && (
		(t - parseInt(map[row + ro][col + co][2], 26)
		 + platCycleLen) % platCycleLen
		    < platCycleLen / 2)) {
		icon = 't';
	    }
	    html += '<td class="' + icon + '">'
	    if ([row+ro, col+co] in dartmap) {
		html += dartmap[[row+ro, col+co]];
	    } else if (icon != 'p' && icon != 'd' &&
		map[row + ro][col + co][1] != ' ' && (
		map[row + ro][col + co][1] == '!' || 
		(t - parseInt(map[row + ro][col + co][1], 26)
		 + guardCycleLen) % guardCycleLen
		    < guardCycleLen / 2)) {
		html += 'o';
	    } else if (row + ro == pr && col + co == pc) {
		html += '@';
	    }
	    html += '</td>';
	}
	html += '</tr>';
    }
    var grid = document.getElementById('grid');
    grid.innerHTML = html;
}

var time = 0;
var state;
function handleState(level, startTime, ninjaX, ninjaY) {
    var rest = Array.prototype.slice.call(arguments, 4);
    state = [level, startTime, ninjaX, ninjaY, rest];
    tick();
}

function tick() {
    if (state) {
	level = state[0];
	startTime = state[1];
	ninjaX = state[2];
	ninjaY = state[3];
	rest = state[4];
	
	plot(level, maps[level], (getTime() - startTime) / 1000, ninjaY, ninjaX,
	    rest);
    }
}

function init() {
    document.addEventListener("keydown", function (event) {
	if (event.key == 'ArrowUp' || event.key == 'w' || event.key == '8') {
	    move('N')
	}
	if (event.key == 'ArrowDown' || event.key == 'x' || event.key == '2') {
	    move('S')
	}
	if (event.key == 'ArrowLeft' || event.key == 'a' || event.key == '4') {
	    move('W')
	}
	if (event.key == 'ArrowRight' || event.key == 'd' || event.key == '6') {
	    move('E')
	}
	if (event.key == 'q' || event.key == '7') move('NW');
	if (event.key == 'e' || event.key == '9') move('NE');
	if (event.key == 'z' || event.key == '1') move('SW');
	if (event.key == 'c' || event.key == '3') move('SE');
    });
    clientInit();

   setInterval(tick, 100);
}
