import React, { Component } from "react"
import propTypes from "prop-types"

import UserContext from "../UserContext"

export class _MovementReceiver extends Component {
	constructor() {
		super()
		this.state = {}
	}
	startReceiver() {
		if (this.state.sse) {
			return
		}
		const sse = new EventSource("/movement?user=" + this.props.user.id)
		this.setState({
			sse,
			...this.state
		})
	}
	componentDidMount() {
		if (!this.state.sse) {
			this.startReceiver()
		}
	}
	render() {
		return <span id="receiver" />
	}
}

_MovementReceiver.propTypes = {
	updater: propTypes.func.isRequired
}

_MovementReceiver.defaultProps = {}

export const MovementReceiver = props => (
	<UserContext.Consumer>
		{// eslint-disable-next-line
		user => <_MovementReceiver {...props} user={user} />}
	</UserContext.Consumer>
)

export default MovementReceiver
