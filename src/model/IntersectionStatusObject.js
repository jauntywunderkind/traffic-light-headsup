import { types } from "mobx-state-tree"

/**
  IntersectionStatusObject is encoded as a bit-string of 16 bit length
*/
export const IntersectionStatusObject =  types.model("IntersectionStatusObject", {
	manualConrolIsEnabled: false,
	stopTimeIsActivated: false,
	failureFlash: false,
	preemptIsActive: false,
	signalPriorityIsActive: false,

	fixedTimeOperation: false,
	trafficDependentOperation: false,
	standbyOperation: false,
	failureMode: false,
	off: false,

	recentMAPmessageUpdate: false,
	recentChangeInMAPassignedLanesIDsUsed: false,
	noValidMAisAvailableAtThisTime: false,
	noValidSPATisAvailableAtThisTime: false,
	reserved1: false,
	reserved2: false
})

export default IntersectionStatusObject
