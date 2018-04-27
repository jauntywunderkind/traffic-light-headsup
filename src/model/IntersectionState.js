import { types } from "mobx-state-tree"
import DescriptiveName from "./DescriptiveName"
import IntersectionReferenceID from "./IntersectionReferenceID"
import IntersectionStatusObject from "./IntersectionStatusObject"
import MovementState from "./MovementState"
import ConnectionManeuverAssist from "./ConnectionManeuverAssist"

export const MsgCount = types.refinement("MsgCount", types.number, n=> n>= 0)

export const MinuteOfTheYear = types.refinement("MinuteOfTheYear", types.number, n=> n>= 0)

export const DSecond = types.refinement("DSecond", types.number, n=> n>= 0)

export const EnabledLane = types.refinement("EnabledLane", types.number, ()=> true)

export const RegionalExtensionIntersectionState = types.refinement("RegionalExtensionIntersectionState", types.string, str=> !!str.length) // not supporting this atm, we hope

export const IntersectionState = types.model("IntersectionState", {
	name: types.optional(DescriptiveName, ""),
	id: IntersectionReferenceID,
	revision: MsgCount,
	status: IntersectionStatusObject,
	moy: types.optional(MinuteOfTheYear, 0),
	timeStamp: types.optional(DSecond, 0),
	enabledLanes: types.optional(types.array(EnabledLane), []),
	states: types.array(MovementState),
	maneuverAssistList: types.optional(types.array(ConnectionManeuverAssist), []),
	region: types.optional(types.array(RegionalExtensionIntersectionState), [])
})

export default IntersectionState
