import { Buffer } from "buffer"
import fetch from "node-fetch"

import db from "../db"
import { API_TOKEN } from "../config"
import bubbleMovement from "../movement/bubble"

/**
  Convert base64 asn.1 to json
*/
export async function decode(res) {
	if (res.statusCode >= 299) {
		throw new Error("Invalid status code on poll")
	}

	// get body
	var body = await res.json()
	// convert from base64
	var buffers = body.map(base64 => new Buffer(base64, "base64"))
	// rough spot here: no JS native UPER asn.1 decoders
	// tried using some other availalable utilities outside js but only the suggested web forum decoded. see `/scripts/` directory.
}

/**
  Push incoming movement event to postgis
*/
export function pushToDb(me) {
	return db.query("insert $1 into movement")
}

/**
  This function performs one fetch & ingestion whenever it is fired.
*/
export async function readRecentSpat() {
	// get spat data
	var movementEvents = fetch(
		"http://smarterroads.org/api/spat?mode=GetLastSeconds&value=1&token=" +
			API_TOKEN
	)
		// convert to json model
		.then(decode)

	movementEvents.forEach(async function(me) {
		// tell database
		await pushToDb(me)
		// tell any relevant connected clients of this data
		bubbleMovement(me)
	})
}

let handle

/**
  All SPaT data is emitted via one endpoint, which updates once a second with all changes.
  This function 
*/
export function poller() {
	if (handle) {
		return
	}
	handle = setInterval(readRecentSpat, 1000)
}

//export default poller
// we're not having success decoding the spat data - don't try to poll it
export default () => {}
