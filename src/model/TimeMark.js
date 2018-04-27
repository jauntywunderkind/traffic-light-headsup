import { types } from "mobx-state-tree"

// tenths of a second in the current or next hour (in utc?)
// 36000 indicates >3600 seconds
// 36001 indicates unknown
export const TimeMark= types.refinement("TimeMark", types.number, n=> n>= 0)

export default TimeMark
