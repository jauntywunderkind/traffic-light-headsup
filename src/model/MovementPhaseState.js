import { types } from "mobx-state-tree"

export const MovementPhaseState = types.enumeration("MovementPhaseState", [
	"unavailable",
	"dark",
	// reds
	"stopThenProceed", // "flashing"
	"stopAndRemain", // "red"
	// greens
	"preMovement", // red+yellow in eu
	"permissiveMovementAllowed", // yield to conflicting traffic
	"protectedMovementAllowed", // right of way to go
	// yellows
	"permissiveClearance",
	"protectedClearance", // yellow arrow
	"cautionConflictingTraffic" // flashing yellow, proceed with caution
])

export default MovementPhaseState
