// Code CoordinatesButton Component Here
import React, { Component } from "react"
import DelayedButton from "./DelayedButton"

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        const coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }
    
    
    render() {

        return (

            <div>
                 <button onClick={this.handleClick}>

                </button>
            </div>

        )
    }





}