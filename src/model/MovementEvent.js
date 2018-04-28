import { types } from "mobx-state-tree"
import MovementPhaseState from "./MovementPhaseState"
import TimeChangeDetails from "./TimeChangeDetails"
import AdvisorySpeed from "./AdvisorySpeed"

export const RegionalExtensionMovementEvent = types.refinement(
	"RegionalExtensionMovementEvent",
	types.string,
	str => !!str.length
) // not supporting this atm, we hope

export const MovementEvent = types.model("MovementEvent", {
	eventState: MovementPhaseState,
	timing: types.optional(TimeChangeDetails, {
		startTime: 0,
		minEndTime: 0,
		maxEndTime: 0,
		likelyTime: 0,
		confidence: 0,
		nextTime: 0
	}),
	speeds: types.optional(AdvisorySpeed, "none"),
	regional: types.optional(types.array(RegionalExtensionMovementEvent), [])
})

export default MovementEvent
