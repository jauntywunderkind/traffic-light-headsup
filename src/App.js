import React, { Component } from "react"
import logo from "./logo.svg"
import uuid from "uuid/v4"
import "./App.css"

class App extends Component {
	componentDidMount() {
		// assert this "user" in the history state
		const user = this.props.user
		if (!history.state || history.state.user !== user) {
			const search = new URLSearchParams(location.search)
			search.append("user", user)
			history.replaceState(
				{ user },
				"Traffic Light Headsup",
				location.pathname + "&" + search.toString()
			)
			// now if we go back in history we'll have this "user" in history state
		}
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Traffic Light Headsup</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		)
	}
}

App.defaultProps = function() {
	const urlUser = new URLSearchParams(location.search).get("user")
	// load "user" from location, history, or make a "new" one
	const user = urlUser || (history.state && history.state.user) || uuid()
	return {
		user
	}
}

export default App
