import { types } from "mobx-state-tree"

export const DescriptiveName = types.refinement(
	"DescriptiveName",
	types.string,
	() => true
)

export default DescriptiveName
