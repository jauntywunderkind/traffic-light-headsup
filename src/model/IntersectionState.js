import { types } from "mobx-state-tree"
import IntersectionReferenceId from "./IntersectionReferenceID"

/*::
type IntersectionState = {
	name: ?string,
	id: IntersectionReferenceID,
	revision: number, // MsgCount, a sequence number
	status: IntersectionStatus,
	moy: ?number, // minute of utc year
	timeStamp: ?number, // milliseconds past moy
	enabledLanes: ?Array<EnabledLane>,
	states: Array<Movement>,
	maneuverAssist: ?Array<ManeuverAssist>,
	regional: Array<Any>
}
*/

export DescriptiveName = types.string

export const IntersectionState = types.model("IntersectionState", {
	name: types.optional(DescriptiveName,
	id: IntersectionReferenceId
	
})

export default IntersectionState
