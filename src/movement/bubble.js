import db from "../db"
import store from "./store"

export function bubbleMovement(me) {
	// query the db for all users who will be interested in this movement
	//const users = await db.query(``)
	// hack while db is resolved -- send each event to all users. :/
	const users = store.keys()
	// send the movement to all these users
	const stringified = "data: " + JSON.stringify(me) + "\n\n"

	users.forEach(function(user) {
		store[user].write(stringified)
	})
}

export default bubbleMovement
