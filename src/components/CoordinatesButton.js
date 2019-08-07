import React, { Component } from 'react';

export default class CoordinateButton extends Component {

  handleClick = (event) => {
    let x = event.clientX;     // Get the horizontal coordinate
    let y = event.clientY;
    const arrXY = [x, y]

    this.props.onReceiveCoordinates(arrXY);

  }

  render(){
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}
