import { types } from "mobx-state-tree"
import TimeMark from "./TimeMark"
import TimeIntervalConfidence from "./TimeIntervalConfidence"

export const TimeChangeDetails = types.model("TimeChangeDetails", {
	startTime: TimeMark,
	minEndTime: TimeMark,
	maxEndTime: TimeMark,
	likelyTime: TimeMark,
	confidence: TimeIntervalConfidence,
	nextTime: TimeMark
})

export default TimeChangeDetails
