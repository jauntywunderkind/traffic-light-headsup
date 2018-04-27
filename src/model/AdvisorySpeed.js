import { types } from "mobx-state-tree"

export const AdvisorySpeed = types.enumeration("AdvisorySpeed", [
	"none",
	"greenwave",
	"ecoDrive",
	"transit"
])

export default AdvisorySpeed
