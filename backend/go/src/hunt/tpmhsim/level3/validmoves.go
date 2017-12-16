package level3

var validMoves = [30][30]bool{
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, false, false, false, false, true, true, true, false, true, true, true, true, true, true, true, true, true, false, true, false, true, false, true, false},
	[30]bool{false, true, true, true, true, true, false, true, true, true, true, true, true, false, true, true, true, true, true, true, true, false, true, false, true, false, true, false, true, false},
	[30]bool{false, true, true, true, true, true, false, true, true, true, true, true, true, false, false, false, false, true, true, true, true, false, true, false, true, false, true, false, true, false},
	[30]bool{false, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, false, true, true, true, false},
	[30]bool{false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, true, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false},
	[30]bool{false, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, false, false, false, true, false, false},
	[30]bool{false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, false, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, true, false, false, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, true, true, true, false, true, true, true, true, false, true, true, true, true, false, true, true, true, true, false, true, true, true, true, true, true, true, true, true, false},
	[30]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false},
}

func isValidMove(x int8, y int8, statues statueStates) bool {
	// Is it a valid move in the level?
	if !validMoves[y][x] {
		return false
	}

	// Is there a statue there?
	for _, statue := range statues {
		if (statue.x == x) && (statue.y == y) {
			return false
		}
	}

	return true
}
