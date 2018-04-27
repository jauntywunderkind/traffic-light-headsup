import { types } from "mobx-state-tree"
import DescriptiveName from "./DescriptiveName"
import ConnectionManeuverAssist from "./ConnectionManeuverAssist"
import MovementEvent from "./MovementEvent"

export const SignalGroupID = types.refinement("SignalGroupID", types.number, n=> n> 0) // not supporting this atm, we hope

export const RegionalExtensionMovementState = types.refinement("RegionalExtensionMovementState", types.string, str=> !!str.length) // not supporting this atm, we hope

export const MovementState = types.model("MovementState", {
	movementName: types.optional(DescriptiveName, ""),
	signalGroup: SignalGroupID,
	stateTimeSpeed: types.array(MovementEvent),
	maneuverAssistList: types.optional(types.array(ConnectionManeuverAssist), []),
	regional: types.optional(types.array(RegionalExtensionMovementState), [])
})

export default MovementState
