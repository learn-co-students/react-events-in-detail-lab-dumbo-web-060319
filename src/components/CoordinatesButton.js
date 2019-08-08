// Code CoordinatesButton Component Here

import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  constructor(props) {
    super(props) 

  }

  clickHandler = (event) => {
    // event.preventDefault()
    
    let coordinatesArray = [
      event.clientX,
      event.clientY
    ]
    this.props.onReceiveCoordinates(coordinatesArray)
  }

  render () {

    return <button onClick={this.clickHandler}>Coordinates Button</button>

  }

}