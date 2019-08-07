// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    createArray = (e) => {
        let coordinatesArray = [e.clientX, e.clientY]
        //console.log(coordinatesArray)
        console.log(this.props.onReceiveCoordinates(coordinatesArray))

    }

    render () {
       // console.log(this.props)
        return (
            <div>
                <button onClick={this.createArray}></button>
            </div>
        )
    }
}