import React from "react"
import uuid from "uuid/v4"

export const UserContext = React.createContext("user")

export function loadUser() {
	const urlUser = new URLSearchParams(window.location.search).get("user")
	// load "user" from location, history, or make a "new" one
	const id =
		urlUser || (window.history.state && window.history.state.user) || uuid()
	return {
		id
	}
}

export default UserContext
