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
	    'w  ','w  ','dv ','dv ','dv ','dv ','dv ','w  ','w  ','w  '],
	   ['w  ','fB ','fB ','fB ','f  ','f  ','p  ','f  ','f  ','f  ',
	    'f  ','p  ','f  ','f  ','f  ','f  ','d< ','fB ','f! ','g  ',
	    'f  ','l  ','l  ','l  ','l  ','l  ','l  ','f  ','f  ','w  '],
	   ['w  ','fB ','fB ','f! ','g  ','f  ','w  ','w  ','w  ','f  ',
	    'w  ','w  ','w  ','f  ','w  ','f  ','w  ','f! ','f! ','f0 ',
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

var platCycleLen =  8;
var guardCycleLen = 22;

var windowSize = 11;

function plot(map, t, pr, pc) {
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
	    if (map[row + ro][col + co][2] != ' ' && (
		(t - parseInt(map[row + ro][col + co][2], 26)
		 + platCycleLen) % platCycleLen
		    < platCycleLen / 2)) {
		icon = 't';
	    }
	    html += '<td class="' + icon + '">'
	    if (map[row + ro][col + co][1] != ' ' && (
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

function handleState(level, startTime, ninjaX, ninjaY) {
    plot(maps[level], (getTime() - startTime) / 1000, ninjaY, ninjaX);
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
}
