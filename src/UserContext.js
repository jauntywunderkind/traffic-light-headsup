import React from "react"

export const UserContext = React.createContext("user");

export function loadUser(){
	const urlUser = new URLSearchParams(location.search).get("user")
	// load "user" from location, history, or make a "new" one
	const id = urlUser || (history.state && history.state.user) || uuid()
	return {
		id
	}
}

export default UserContext
