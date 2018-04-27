import { types } from "mobx-state-tree"

export const RoadRegulatorID = types.refinement("RoadRegulatorID", types.number, ()=> true)

export const IntersectionID = types.refinement("IntersectionID", types.number, ()=> true)

export const IntersectionReferenceID = types.model({
	region: types.optional(RoadRegulatorID, -1),
	id: IntersectionID
})

export default IntersectionReferenceID
