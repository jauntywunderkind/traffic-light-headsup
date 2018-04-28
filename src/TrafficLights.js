import React, { Component } from "react"

import green  from "./assets/green.svg"
import yellow from "./assets/yellow.svg"
import red    from "./assets/red.svg"

import "./traffic-light.css"

const assetLookupTable = {red: red,
                          green: green,
                          yellow:yellow}



export class TrafficLight extends React.Component {
  render() {
        return <div className="TrafficLightContainer"> <img src={assetLookupTable[this.props.lightColor]}></img> </div>
 }
}
