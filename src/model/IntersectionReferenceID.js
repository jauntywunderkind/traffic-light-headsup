import { types } from "mobx-state-tree"

export RoadRegulatorID = types.number

export IntersectionID = types.number

export const IntersectionReferenceID = types.model({
	region: types.optional(RoadRegulatorID),
	id: IntersectionID
})

export default IntersectionRefenceID
