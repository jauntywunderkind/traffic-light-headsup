import React, { Component } from "react"
import "./number-counter.css"

export class CountBox extends React.Component {
  render() {
        return <div className="NumberContainer"><div className="numberCircle">{this.props.count}</div></div>
}
}
