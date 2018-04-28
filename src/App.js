import React, { Component } from "react"
import propTypes from "prop-types"

import UserContext, { loadUser } from "./UserContext"
import GeolocationTracker from "./geolocation/tracker"

import logo from "./logo.svg"
import "./App.css"

class App extends Component {
	componentDidMount() {
		// assert this "user" in the history state
		const user = this.props.user
		if (!window.history.state || window.history.state.user !== user) {
			const search = new URLSearchParams(window.location.search)
			search.append("user", user)
			window.history.replaceState(
				{ user },
				"Traffic Light Headsup",
				window.location.pathname + "&" + search.toString()
			)
			// now if we go back in history we'll have this "user" in history state
		}
	}
	render() {
		return (
			<UserContext.Provider value={this.props.user}>
				<GeolocationTracker />
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Traffic Light Headsup</h1>
					</header>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
				</div>
			</UserContext.Provider>
		)
	}
}

App.propTypes = {
	user: propTypes.object
}
App.defaultProps = function() {
	return {
		user: loadUser()
	}
}

export default App
