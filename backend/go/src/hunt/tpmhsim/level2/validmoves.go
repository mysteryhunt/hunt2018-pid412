package level2

var validMoves = [30][30]bool{
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, false, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, false, true, false, false, false, true, false, false, false, true, false, true, false, true, true, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, false, true, false, false, false, true, false, false, false, true, false, true, true, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, false, true, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, false},
	[30]bool{true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false},
}
