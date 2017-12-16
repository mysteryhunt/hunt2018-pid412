var maps = {};
maps[1] = [['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	   ['w  ','f  ','f  ','f  ','l 0','l 2','l 4','l 6','l 0','l  ',
	    'l  ','l  ','l  ','l  ','l  ','l  ','f  ','fB ','f  ','f  ',
	    'f  ','f  ','l 3','l03','l  ','l  ','f  ','f  ','x  ','w  '],
	   ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l 2','l 4',
	    'l 6','l 0','l 2','l  ','l  ','l  ','f  ','fB ','fB ','fB ',
	    'f  ','f0 ','l0 ','l06','l 7','l  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l  ','l  ',
	    'l  ','l  ','l 4','l 6','l 0','l 2','l 4','fB ','fB ','fB ',
	    'g0 ','f0 ','l0 ','l0 ','l  ','l 5','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l 2','l 4',
	    'l 6','l 0','l 2','l  ','l  ','l  ','l  ','fB ','fB ','fB ',
	    'f  ','f0 ','l03','l03','l  ','l  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','l 0','l 2','l 4','l 6','l 0','l  ',
	    'l  ','l  ','l  ','l  ','l  ','l  ','l  ','fB ','f  ','f  ',
	    'f  ','f  ','l  ','l06','l 7','l  ','f  ','f  ','f  ','w  '],
	   ['w  ','fB ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','l  ','l  ','l  ','l  ','l  ','l  ',
	    'f  ','f  ','l  ','l  ','l 2','l 5','f  ','f  ','f  ','w  '],
	   ['w  ','fB ','g0 ','f0 ','f0 ','f0 ','f  ','fB ','fB ','fB ',
	    'f  ','f0 ','f0 ','w  ','l  ','l  ','l  ','l  ','l  ','l  ',
	    'f  ','f  ','l 3','l 3','l  ','l  ','f  ','f  ','f  ','w  '],
	   ['w  ','fB ','f  ','f0 ','f0 ','f0 ','f  ','fB ','fB ','fB ',
	    'g0 ','f0 ','f0 ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
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
	    'w  ','f  ','fB ','fB ','fB ','g0 ','f0 ','f0 ','f0 ','w  ',
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
	    'w  ','g0 ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l0 ','l0 ','l0 ','lB ','l  ','f  ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','f  ','f0 ','fB ','fB ','fB ','f  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','f  ','f  ','fB ','fB ','fB ','g0 ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	   ['w  ','fB ','g0 ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ',
	    'w  ','f  ','f  ','w  ','g0 ','f0 ','f0 ','f0 ','f  ','l 6',
	    'l 3','l 0','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','fB ','f  ','f0 ','w  ','w  ','fB ','f  ','f0 ','f0 ',
	    'w  ','f  ','f  ','w  ','f  ','f0 ','f0 ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','w  ','w  ','fB ','g0 ','f0 ','f0 ',
	    'w  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ',
	    'w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f0 ','f0 ','w  ','w  ','fB ','f  ','f0 ','f0 ',
	    'w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','f  ','f  ',
	    'w  ','fB ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	   ['w  ','g0 ','f0 ','f0 ','w  ','w  ','f  ','f  ','f  ','f  ',
	    'w  ','f  ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ',
	    'w  ','fB ','fB ','fB ','g0 ','f0 ','f0 ','f0 ','f  ','w  '],
	   ['w  ','f  ','f0 ','f0 ','w  ','w  ','fB ','fB ','f  ','f0 ',
	    'w  ','g0 ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ',
	    'w  ','fB ','fB ','fB ','f  ','f0 ','f0 ','f0 ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','w  ','w  ','fB ','fB ','g0 ','f0 ',
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
	    'w  ','w  ','ds9','dsA','dsB','dsC','dsD','w  ','w  ','w  '],
	   ['de5','fB ','fB ','fB ','f  ','f  ','p 5','f  ','f  ','f  ',
	    'f  ','p 6','f  ','f  ','f  ','f  ','dw6','fB ','f! ','g  ',
	    'f  ','l  ','l  ','l  ','l  ','l  ','l  ','f  ','f  ','w  '],
	   ['w  ','fB ','fB ','f! ','g  ','f  ','w  ','w  ','w  ','f  ',
	    'w  ','w  ','w  ','f  ','w  ','f  ','w  ','f! ','f! ','f0 ',
	    'f  ','l  ','l  ','p E','f  ','p L','l  ','f  ','f  ','dwE'],
	   ['w  ','f! ','f! ','f! ','f0 ','f  ','w  ','f  ','w  ','w  ',
	    'w  ','f  ','w  ','w  ','w  ','f  ','w  ','f! ','f0 ','f0 ',
	    'f  ','l  ','p F','l  ','p M','l  ','p K','f  ','f  ','dwF'],
	   ['w  ','f! ','f0 ','f0 ','f  ','f  ','de7','f  ','f  ','f  ',
	    'f  ','f  ','p 7','f  ','f  ','f  ','w  ','f0 ','f0 ','f  ',
	    'f  ','f  ','f  ','p G','l  ','p L','f  ','f  ','f  ','dwG'],
	   ['w  ','f  ','f0 ','f0 ','f  ','f  ','w  ','f  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','f  ','l  ',
	    'f  ','f  ','f  ','p H','l  ','p C','f  ','f  ','f  ','dwH'],
	   ['w  ','f  ','f  ','f  ','f  ','f  ','de8','f  ','f  ','p 8',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','l  ',
	    'l  ','l  ','p I','l  ','p B','l  ','p D','f  ','f  ','dwI'],
	   ['w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','ds2','w  ',
	    'l  ','l  ','l  ','p A','f  ','p C','l  ','f  ','f  ','dwJ'],
	   ['w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','p 3','f  ',
	    'f  ','f  ','f  ','dw3','f  ','f  ','f  ','f  ','f  ','w  ',
	    'l  ','l  ','l  ','l  ','l  ','l  ','l  ','f  ','x  ','w  '],
	   ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','f  ','f  ','de4','fB ','f  ','f  ','p 4','f  ','w  ',
	    'w  ','w  ','dnO','dnN','dnM','dnL','dnK','w  ','w  ','w  '],
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
	    'w  ','l  ','l  ','l  ','f  ','f  ','p 1','f  ','f  ','dw1',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l  ','f  ','f  ','f  ','f  ','f  ','l  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','l  ','l  ','f  ','f  ','f  ','f  ','l  ','l  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'de0','f  ','f  ','p 0','f  ','f  ','l  ','l  ','l  ','w  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l  ','w  ',
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
maps[3] = [['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	   ['w  ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ','f  ','f  ',
	    'f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','x  ','w  '],
	   ['w  ','f! ','l! ','l0 ','l  ','f  ','w  ','w  ','w  ','w  ',
	    'f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','l  ',
	    'f  ','f  ','f  ','w  ','f  ','w  ','f  ','w  ','f  ','w  '],
	   ['w  ','fB ','l! ','g  ','l  ','f  ','w  ','f  ','f  ','f  ',
	    'f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ',
	    'f  ','w  ','f  ','w  ','f  ','w  ','f  ','w  ','f  ','w  '],
	   ['w  ','fB ','lB ','l  ','l  ','f  ','w  ','f  ','f  ','f  ',
	    'f  ','l  ','f  ','w  ','w  ','w  ','w  ','f  ','f  ','f  ',
	    'f  ','w  ','f  ','w  ','f  ','w  ','f  ','w  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ',
	    'f  ','w  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','w  '],
	   ['w  ','w  ','f  ','w  ','f  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	   ['w  ','f  ','f  ','f  ','f  ','f  ','w  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['w  ','f  ','w  ','f  ','w  ','f  ','w  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['w  ','f  ','f  ','f  ','f  ','f  ','w  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['w  ','w  ','f  ','w  ','f  ','w  ','w  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
	   ['w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	   ['w  ','f  ','w  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','w  ','f  ','f  ','f0 ','f0 ','f  ','f  ','f  ',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','f! ','f0 ','f0 ','f  ','f  ','f  ',
	    'f  ','f  ','l  ','l  ','l  ','l  ','f  ','f  ','w  ','f  ',
	    'f  ','f  ','f  ','f  ','w  ','w  ','w  ','f  ','w  ','w  '],
	   ['w  ','f  ','f  ','f  ','f! ','f! ','l! ','l0 ','l  ','f  ',
	    'f  ','f  ','l  ','l  ','l  ','l  ','f  ','f  ','w  ','f  ',
	    'f  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','fB ','fB ','l! ','g  ','l  ','f  ',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','w  ',
	    'w  ','w  ','f  ','w  ','w  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','fB ','fB ','lB ','l  ','l  ','f  ',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ',
	    'f  ','f  ','f  ','w  ','f  ','f  ','f0 ','f0 ','f  ','w  '],
	   ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','f  ','f! ','f0 ','f0 ','f  ','w  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','w  ','f  ','f! ','f! ','l! ','l0 ','w  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','w  ','f  ','fB ','fB ','l! ','g  ','w  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','w  ','f  ','fB ','fB ','lB ','l  ','w  '],
	   ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ',
	    'v  ','v  ','v  ','w  ','f  ','fB ','f  ','f  ','f  ','w  '],
	   ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','l  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l  ','l  ',
	    'l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ',
	    'l  ','l  ','l  ','l  ','l  ','l  ','f  ','f  ','f  ','w  '],
	   ['w  ','f  ','f0 ','f0 ','f  ','f  ','f  ','f0 ','f0 ','f  ',
	    'f  ','f  ','f0 ','f0 ','f  ','f  ','f  ','f0 ','f0 ','f  ',
	    'f  ','f  ','l  ','l  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','f! ','f0 ','f0 ','f  ','f  ','f! ','f0 ','f0 ','f  ',
	    'f  ','f! ','f0 ','f0 ','f  ','f  ','f! ','f0 ','f0 ','f  ',
	    'f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','l! ','l! ','l! ','l0 ','l  ','l! ','l! ','l! ','l0 ',
	    'l  ','l! ','l! ','l! ','l0 ','l  ','l! ','l! ','l! ','l0 ',
	    'l  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','lB ','lB ','l! ','g  ','l  ','lB ','lB ','l! ','g  ',
	    'l  ','lB ','lB ','l! ','g  ','l  ','lB ','lB ','l! ','g  ',
	    'l  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
	   ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ',
	    'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
	  ];

var platCycleLen =  8;
var guardCycleLen = 22;

var windowSize = 11;

function plot(level, map, time, startTime, pr, pc, rest) {
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
		    if (map[r][c][1] == 's') dr = 1;
		    if (map[r][c][1] == 'n') dr = -1;
		    if (map[r][c][1] == 'e') dc = 1;
		    if (map[r][c][1] == 'w') dc = -1;
		    var dartr = r;
		    var dartc = c;
		    var inflight = true;
		    //console.log(launchmap[index], time);
		    for (var flight = 0; flight < (time - launchmap[index]) / 2;
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
    var statuemap = {};
    if (level == 3) {
	for (var i = 0; i < rest.length; i += 4) {
	    var statue;
	    if (rest[i] < 0) {
		statue = 'ss';
	    } else if (time - (rest[i] / 1000) >= 3) {
		statue = 'sa';
	    } else {
		statue = 'sw';
	    }
	    statuemap[[rest[i+3], rest[i+2]]] = statue;
	}
    }
    //console.log(statuemap);

    var t = time - startTime;
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
	    if (icon != 'p' && icon != 'd' && icon != 'g' &&
		map[row + ro][col + co][2] != ' ' && (
		(t - parseInt(map[row + ro][col + co][2], 26)
		 + platCycleLen) % platCycleLen
		    < platCycleLen / 2)) {
		icon = 't';
	    }
	    if (icon == 'g' && map[row + ro][col + co][1] != ' ' && (
                map[row + ro][col + co][1] == '!' ||
                (t - parseInt(map[row + ro][col + co][1], 26)
                 + guardCycleLen) % guardCycleLen
                    < guardCycleLen / 2)) {
		icon = 'gr';
	    }
	    if (icon == 'x') {
		icon += level;
	    }
	    if (icon == 'd') {
		icon += map[row + ro][col + co][1];
	    }
	    html += '<td class="' + icon + '">';

	    if (row + ro == pr && col + co == pc) {
		html += '<span class="player"></span>';
	    }
	    if ([row+ro, col+co] in statuemap) {
		html += '<span class="' + statuemap[[row+ro, col+co]]
		    + '"></span>';
	    }
	    if ([row+ro, col+co] in dartmap) {
		html += '<span class="a' + dartmap[[row+ro, col+co]]
		    + '"></span>';
	    }
	    if (icon != 'p' && icon[0] != 'd' && icon[0] != 'g' &&
		map[row + ro][col + co][1] != ' ' && (
		map[row + ro][col + co][1] == '!' ||
		(t - parseInt(map[row + ro][col + co][1], 26)
		 + guardCycleLen) % guardCycleLen
		    < guardCycleLen / 2)) {
		html += '<span class="o"></span>';
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
var lastLevel = -1;
function handleState(level, startTime, ninjaX, ninjaY) {
    var rest = Array.prototype.slice.call(arguments, 4);
    state = [level, startTime, ninjaX, ninjaY, rest];
    tick();
    if (lastLevel != level) {
	lastLevel = level;
	updateTeamStatus();
    }
}

function handleTeamStatus(level, levelStatuses) {
    var extra = '';
    if (levelStatuses[2].won) {
	inventory = ', ' + levelStatuses[2].artifact;
    }
    if (levelStatuses[1].won) {
	extra = ', switch 1, switch 2, switch 3';
	inventory = levelStatuses[0].artifact + ', '
	    + levelStatuses[1].artifact + inventory;
    } else if (levelStatuses[0].won) {
	extra = ', switch 1, switch 2';
	inventory = levelStatuses[0].artifact + inventory;
    }
    document.getElementById('levelbit').innerHTML = extra;
    document.getElementById('inventory').innerHTML = inventory;
}

function tick() {
    if (state) {
	level = state[0];
	startTime = state[1];
	ninjaX = state[2];
	ninjaY = state[3];
	rest = state[4];

	plot(level, maps[level], getTime() / 1000,
	     startTime / 1000,
	     ninjaY, ninjaX,
	    rest);
    }
}

var commands = {
    'n': true,
    's': true,
    'e': true,
    'w': true,
    'ne': true,
    'se': true,
    'nw': true,
    'sw': true,
};

function init() {
    document.getElementById('entry').addEventListener(
	"keydown", function(event) {
	    if (event.key == 'Enter') {
		var msg = document.getElementById('entry').value;

		if (!msg) {
			return;
		}

		var send = true;
		if (msg in commands) {
		    send = move(msg.toUpperCase());
		}
		if (msg.startsWith('switch ')) {
		    changeLevel(parseInt(msg.slice(7)));
		}
		if (msg == 'restart level') {
		    changeLevel(lastLevel);
		}
		if (send) {
		    sendChatMessage(msg,
				    document.getElementById('username').value);
		}
		document.getElementById('entry').value = '';
	    }
	});

    clientInit();

    setInterval(tick, 100);
}

function addToChat(message) {
    var chat = document.getElementById('chat');
    chat.innerHTML += message + '<br>';
    chat.scrollTop = chat.scrollHeight;
}
