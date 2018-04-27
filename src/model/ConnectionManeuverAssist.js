import { types } from "mobx-state-tree"

export const LaneConnectionID = types.refinement("LaneConnectionID", types.number, n=> n>= 0)

// meters, 0 = no queue
export const ZoneLength = types.refinement("ZoneLength", types.number, n=> n>= 0)

export const WaitOnStopline = types.refinement("WaitOnStopline", types.boolean, ()=> true)

export const PedestrianBicycleDetect = types.refinement("PedestrianBicycleDetect", types.boolean, ()=> true)

export const ConnectionManeuverAssist = types.model("ConnectionManeuverAssist", {
	connectionID: LaneConnectionID,
	queueLength: types.optional(ZoneLength, 0),
	availableStorageLength: types.optional(ZoneLength, 0),
	waitOnStop: types.optional(WaitOnStopline, false),
	pedBicycleDetect: types.optional(PedestrianBicycleDetect, false)
})

export default ConnectionManeuverAssist
