import React, { Component } from "react"
import propTypes from "prop-types"
import uuid from  "uuid/v4"

import logo from "./logo.svg"
import "./App.css"
import UserContext, { loadUser } from "./UserContext.js"


class App extends Component {
	componentDidMount(){
		// assert this "user" in the history state
		const user = this.props.user
		if (!history.state || history.state.user !== user) {
			const search = new URLSearchParams(location.search)
			search.append("user", user)
			history.replaceState({ user }, "Traffic Light Headsup", location.pathname + "&" + search.toString())
			// now if we go back in history we'll have this "user" in history state
		}
	}
	render() {
		return (
			<UserContext.Provider value={this.props.user}>
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
	user: PropTypes.object
}
App.defaultProps = function(){
	return {
		user: loadUser()
	}
}

export default App
