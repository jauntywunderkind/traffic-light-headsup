import React, { Component } from "react"
import propTypes from "prop-types"

import UserContext from "../UserContext"

/**
  Ask for location, start tracking, & send data upstream
*/
export class _GeolocationTracker extends Component {
	constructor() {
		super()
		this.onStartTracking = this.onStartTracking.bind(this)
		this.onPosition = this.onPosition.bind(this)
		this.onPositionError = this.onPositionError.bind(this)
	}
	onStartTracking(evt) {
		evt.preventDefault()
		if (this.state && this.state.watch) {
			return
		}
		const watch = navigator.geolocation.watchPosition(
			this.onPosition,
			this.onError,
			{
				enableHighAccuracy: this.props.enableHighAccuracy,
				timeout: this.props.timeout,
				maximumAge: this.props.maximumAge
			}
		)
		this.setState({
			watch
		})
		console.log("tracking started")
	}
	onPosition(pos) {
		this.reportPosition(pos)
		console.log({ coords: pos.coords })
	}
	onPositionError(error) {
		console.log("position error!", error)
	}
	reportPosition(pos) {
		if (!pos.coords) {
			console.log("position without coordinates", pos)
			return
		}
		const data = {
			user: this.props.user,
			lat: pos.coords.latitude,
			lng: pos.coords.longitude
		}
		const url = this.props.positionUrl
		fetch(url, {
			body: JSON.stringify(data),
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"content-type": "application/json"
			},
			method: "POST",
			mode: "cors"
		})
			.then(function(res) {
				if (res.statusCode > 299) {
					console.error(
						"position posting unexpected response status",
						res.statusCode,
						res
					)
				}
				res.text() // drain it but ignore - not sure if it gc's otherwise?
			})
			.catch(function(err) {
				console.error("error posting", err)
			})
	}
	render() {
		let button = null
		if (!this.state || !this.state.watch) {
			button = (
				<button type="button" onClick={this.onStartTracking}>
					Start!
				</button>
			)
		}
		return <span id="tracking">{button}</span>
	}
}

_GeolocationTracker.propTypes = {
	positionUrl: propTypes.string,
	enableHighAccuracy: propTypes.bool,
	timeout: propTypes.number,
	maximumAge: propTypes.number
}

_GeolocationTracker.defaultProps = function() {
	return {
		positionUrl: "/pos",
		enableHighAccuracy: true,
		timeout: 30000,
		maximumAge: 2000
	}
}

export const GeolocationTracker = props => (
	<UserContext.Consumer>
		{// eslint-disable-next-line
		user => <_GeolocationTracker {...props} user={user} />}
	</UserContext.Consumer>
)

export default GeolocationTracker
