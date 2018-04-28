import React, { Component } from "react"
import propTypes from "prop-types"

import UserContext, { loadUser } from "./UserContext"
import GeolocationTracker from "./geolocation/tracker"
import MovementReceiver from "./movement/receiver"

import logo from "./logo.svg"
import "./App.css"

class App extends Component {
	static BackgroundColor(phase) {
		if (phase === undefined || phase === "unavailable" || phase === "dark") {
			return "rgb(255, 255, 255)"
		}
		if (phase === "stopThenProceed" || phase === "stopAndRemain") {
			return "rgb(255, 51, 51)"
		}
		if (
			phase === "preMovement" ||
			phase === "permissiveMovementAllowed" ||
			phase === "protectedMovementAllowed"
		) {
			return "rgb(51, 255, 51)"
		}
		if (
			phase === "permissiveClearance" ||
			phase === "protectedClearance" ||
			phase === "cautionConflictingTraffic"
		) {
			return "rgb(255, 255, 51)"
		}
	}
	static BodyCss(phase) {
		return `
			Body {
				background-color: ${App.BackgroundColor(phase)};
			}
		`
	}

	constructor() {
		super()
		this.state = {}
		this.movementUpdate = this.movementUpdate.bind(this)
	}
	saveUser() {
		// assert this "user" in the history state
		const user = this.props.user
		if (!window.history.state || window.history.state.user !== user) {
			const search = new URLSearchParams(window.location.search)
			search.set("user", user.id)
			window.history.replaceState(
				{ user },
				"Traffic Light Headsup",
				window.location.pathname + "?" + search.toString()
			)
			// now if we go back in history we'll have this "user" in history state
		}
	}
	movementUpdate(movement) {
		this.setState({
			movement,
			...this.state
		})
	}
	render() {
		this.saveUser()
		const bodyCss = App.BodyCss(
			this.state.movement && this.state.movement.eventState
		)
		return (
			<UserContext.Provider value={this.props.user}>
				<GeolocationTracker />
				<MovementReceiver updater={this.movementUpdate} />
				<style type="text/css" id="background-style">
					{bodyCss}
				</style>

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
App.defaultProps = {
	user: loadUser()
}

export default App
