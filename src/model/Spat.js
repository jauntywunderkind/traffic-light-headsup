import { types } from "mobx-state-tree"
import IntersectionState from "./IntersectionState"

export const RegionalExtensionSpat = types.refinement(
	"RegionalExtensionSpat",
	types.string,
	str => !!str.length
) // not supporting this atm, we hope

const Spat = types.model("Spat", {
	timeStamp: types.optional(types.Date, 0),
	name: types.optional(types.string, ""),
	intersections: types.array(IntersectionState),
	regional: types.optional(types.array(RegionalExtensionSpat), [])
})

export default Spat
