import { types } from "mobx-state-tree"

// 2 is 46%
// 4 is 62%
// 6 is 73%
// 8 is 81%
// 10 is 88%
// 12 is 94%
// 14 is 98%
// 15 is 100%

export const TimeIntervalConfidence= types.refinement("TimeIntervalConfidence", types.number, n=> n>= 0)

export default TimeIntervalConfidence
