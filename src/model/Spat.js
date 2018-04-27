import { types } from "mobx-state-tree"
import IntersectionState from "./IntersectionState"

/*::
type Spat = {
	timeStamp: ?Date,
	name: ?string,
	intersections: Array<IntersectionState>,
	regional: ?Array<Any>
}
*/

const Spat = types.model("Spat", {
	timeStamp: new Date(), // optional spat
	name: "", // optional spat
	intersections: [], // set of spat data
	regional: []
})
