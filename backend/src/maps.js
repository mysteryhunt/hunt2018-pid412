/* eslint comma-spacing:0 */

const maps = {};
maps[1] = [
  ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ', 'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
  ['w  ','f  ','f  ','f  ','l 0','l 1','l 2','l 3','l 4','l  ', 'l  ','l  ','l  ','l  ','l  ','l  ','f  ','fB ','f  ','f  ','f  ','f  ','l 3','l03','l  ','l  ','f  ','f  ','x  ','w  '],
  ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l 5','l 6', 'l 7','l 0','l 1','l  ','l  ','l  ','f  ','fB ','fB ','fB ','f  ','f0 ','l0 ','l05','l 6','l  ','f  ','f  ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l  ','l  ', 'l  ','l  ','l 2','l 3','l 4','l 5','l 6','fB ','fB ','fB ','g0 ','f0 ','l0 ','l0 ','l  ','l 1','f  ','f  ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l 5','l 6', 'l 7','l 0','l 1','l  ','l  ','l  ','l  ','fB ','fB ','fB ','f  ','f0 ','l02','l04','l  ','l  ','f  ','f  ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','l 0','l 1','l 2','l 3','l 4','l  ', 'l  ','l  ','l  ','l  ','l  ','l  ','l  ','fB ','f  ','f  ','f  ','f  ','l  ','l06','l 7','l  ','f  ','f  ','f  ','w  '],
  ['w  ','fB ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ', 'w  ','w  ','w  ','w  ','l  ','l  ','l  ','l  ','l  ','l  ','f  ','f  ','l  ','l  ','l 5','l 0','f  ','f  ','f  ','w  '],
  ['w  ','fB ','g0 ','f0 ','f0 ','f0 ','f  ','fB ','fB ','fB ', 'f  ','f0 ','f0 ','w  ','l  ','l  ','l  ','l  ','l  ','l  ','f  ','f  ','l  ','l 3','l 4','l  ','f  ','f  ','f  ','w  '],
  ['w  ','fB ','f  ','f0 ','f0 ','f0 ','f  ','fB ','fB ','fB ', 'g0 ','f0 ','f0 ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','f  ','l 2','l  ','l 1','l  ','f  ','f  ','f  ','w  '],
  ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ', 'w  ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ', 'w  ','f  ','fB ','f0 ','f  ','f  ','f  ','f  ','f0 ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ', 'w  ','l  ','lB ','lB ','lB ','l  ','l0 ','l06','l02','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ', 'w  ','f  ','fB ','fB ','fB ','g0 ','f0 ','f0 ','f0 ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ', 'w  ','f  ','fB ','fB ','fB ','f  ','f0 ','f0 ','f0 ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ', 'w  ','l 2','lB6','l  ','l0 ','l  ','l  ','l  ','l0 ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ', 'w  ','f  ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ', 'w  ','g0 ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ', 'w  ','l  ','l0 ','l0 ','l0 ','lB ','l  ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ', 'w  ','f  ','f  ','f  ','f0 ','fB ','fB ','fB ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ', 'w  ','f  ','f  ','f  ','f  ','fB ','fB ','fB ','g0 ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ', 'w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
  ['w  ','fB ','g0 ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ', 'w  ','f  ','f  ','w  ','g0 ','f0 ','f0 ','f0 ','f  ','l 1','f  ','l 6','f  ','l 3','f  ','l 0','f  ','l 4','f  ','w  '],
  ['w  ','fB ','f  ','f0 ','w  ','w  ','fB ','f  ','f0 ','f0 ', 'w  ','f  ','f  ','w  ','f  ','f0 ','f0 ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','w  ','w  ','fB ','g0 ','f0 ','f0 ', 'w  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','f  ','f0 ','f0 ','w  ','w  ','fB ','f  ','f0 ','f0 ', 'w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','f  ','f  ','w  ','fB ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
  ['w  ','g0 ','f0 ','f0 ','w  ','w  ','f  ','f  ','f  ','f  ', 'w  ','f  ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ','w  ','fB ','fB ','fB ','g0 ','f0 ','f0 ','f0 ','f  ','w  '],
  ['w  ','f  ','f0 ','f0 ','w  ','w  ','fB ','fB ','f  ','f0 ', 'w  ','g0 ','f0 ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ','w  ','fB ','fB ','fB ','f  ','f0 ','f0 ','f0 ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','w  ','w  ','fB ','fB ','g0 ','f0 ', 'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','w  ','w  ','fB ','fB ','f  ','f0 ', 'l00','l00','l 0','l 0','l 0','l 0','l 0','l 0','l 0','l 0','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ', 'w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
];

maps[2] = [
  ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','ds9','dsA','dsB','dsC','dsD','w  ','w  ','w  '],
  ['de5','fB ','fB ','fB ','f  ','f  ','p 5','f  ','f  ','f  ','f  ','p 6','f  ','f  ','f  ','f  ','dw6','fB ','f! ','g  ','f  ','l  ','l  ','l  ','l  ','l  ','l  ','f  ','f  ','w  '],
  ['w  ','fB ','fB ','f! ','g  ','f  ','w  ','w  ','w  ','f  ','w  ','w  ','w  ','f  ','w  ','f  ','w  ','f! ','f! ','f0 ','f  ','l  ','l  ','p E','f  ','p L','l  ','f  ','f  ','dwE'],
  ['w  ','f! ','f! ','f! ','f0 ','f  ','w  ','f  ','w  ','w  ','w  ','f  ','w  ','w  ','w  ','f  ','w  ','f! ','f0 ','f0 ','f  ','l  ','p F','l  ','p M','l  ','p K','f  ','f  ','dwF'],
  ['w  ','f! ','f0 ','f0 ','f  ','f  ','de7','f  ','f  ','f  ','f  ','f  ','p 7','f  ','f  ','f  ','w  ','f0 ','f0 ','f  ','f  ','f  ','f  ','p G','l  ','p L','f  ','f  ','f  ','dwG'],
  ['w  ','f  ','f0 ','f0 ','f  ','f  ','w  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','f  ','l  ','f  ','f  ','f  ','p H','l  ','p C','f  ','f  ','f  ','dwH'],
  ['w  ','f  ','f  ','f  ','f  ','f  ','de8','f  ','f  ','p 8','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','l  ','l  ','l  ','p I','l  ','p B','l  ','p D','f  ','f  ','dwI'],
  ['w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','ds2','w  ','l  ','l  ','l  ','p A','f  ','p C','l  ','f  ','f  ','dwJ'],
  ['w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','p 3','f  ','f  ','f  ','f  ','dw3','f  ','f  ','f  ','f  ','f  ','w  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','f  ','x  ','w  '],
  ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','f  ','de4','fB ','f  ','f  ','p 4','f  ','w  ','w  ','w  ','dnO','dnN','dnM','dnL','dnK','w  ','w  ','w  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','f  ','w  ','fB ','fB ','fB ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','f  ','f  ','fB ','fB ','f! ','g  ','p 2','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','f  ','f  ','f! ','f! ','f! ','f0 ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','f  ','f  ','l! ','l0 ','f0 ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','l  ','l  ','l  ','f0 ','f0 ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','l  ','l  ','l  ','f  ','f  ','p 1','f  ','f  ','dw1','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','l  ','l  ','f  ','f  ','f  ','f  ','f  ','l  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','l  ','l  ','f  ','f  ','f  ','f  ','l  ','l  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','de0','f  ','f  ','p 0','f  ','f  ','l  ','l  ','l  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','f  ','f  ','fB ','f  ','f  ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','f  ','f  ','fB ','fB ','fB ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','l  ','l  ','f  ','fB ','fB ','f! ','g  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','l  ','l  ','l  ','f! ','f! ','f! ','f0 ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','l  ','l  ','l  ','l! ','l0 ','f0 ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','l  ','l  ','l  ','l  ','f0 ','f0 ','f  ','l  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','l  ','l  ','l  ','f  ','f  ','f  ','l  ','l  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','l  ','l  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','l  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
];

maps[3] = [
  ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
  ['w  ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','x  ','w  '],
  ['w  ','f! ','l! ','l0 ','l  ','f  ','w  ','w  ','w  ','w  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','l  ','f  ','f  ','f  ','w  ','f  ','w  ','f  ','w  ','f  ','w  '],
  ['w  ','fB ','l! ','g  ','l  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','w  ','f  ','w  ','f  ','w  ','f  ','w  '],
  ['w  ','fB ','lB ','l  ','l  ','f  ','w  ','f  ','f  ','f  ','f  ','l  ','f  ','w  ','w  ','w  ','w  ','f  ','f  ','f  ','f  ','w  ','f  ','w  ','f  ','w  ','f  ','w  ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','w  '],
  ['w  ','w  ','f  ','w  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
  ['w  ','f  ','f  ','f  ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['w  ','f  ','w  ','f  ','w  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['w  ','f  ','f  ','f  ','f  ','f  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['w  ','w  ','f  ','w  ','f  ','w  ','w  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  '],
  ['w  ','f  ','f  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
  ['w  ','f  ','w  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','f  ','w  ','f  ','f  ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','f! ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','w  ','w  ','w  ','f  ','w  ','w  '],
  ['w  ','f  ','f  ','f  ','f! ','f! ','l! ','l0 ','l  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','fB ','fB ','l! ','g  ','l  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','w  ','w  ','w  ','f  ','w  ','w  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','fB ','fB ','lB ','l  ','l  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  ','f  ','f  ','f0 ','f0 ','f  ','w  '],
  ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','f  ','f! ','f0 ','f0 ','f  ','w  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','f! ','f! ','l! ','l0 ','w  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','fB ','fB ','l! ','g  ','w  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','fB ','fB ','lB ','l  ','w  '],
  ['v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','v  ','w  ','f  ','fB ','f  ','f  ','f  ','w  '],
  ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','l  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','f  ','f  ','f  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','l  ','f  ','f  ','f  ','w  '],
  ['w  ','f  ','f0 ','f0 ','f  ','f  ','f  ','f0 ','f0 ','f  ','f  ','f  ','f0 ','f0 ','f  ','f  ','f  ','f0 ','f0 ','f  ','f  ','f  ','l  ','l  ','f  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','f! ','f0 ','f0 ','f  ','f  ','f! ','f0 ','f0 ','f  ','f  ','f! ','f0 ','f0 ','f  ','f  ','f! ','f0 ','f0 ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','l! ','l! ','l! ','l0 ','l  ','l! ','l! ','l! ','l0 ','l  ','l! ','l! ','l! ','l0 ','l  ','l! ','l! ','l! ','l0 ','l  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','lB ','lB ','l! ','g  ','l  ','lB ','lB ','l! ','g  ','l  ','lB ','lB ','l! ','g  ','l  ','lB ','lB ','l! ','g  ','l  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','f  ','w  '],
  ['w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  ','w  '],
];

module.exports = maps;
