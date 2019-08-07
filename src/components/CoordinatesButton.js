import React, { Component } from 'react';

export default class CooridinatesButton extends Component {

  coordinateHandler = (e) => {
    let x = e.screenX
    let y = e.screenY
    let arr = [x, y]
    const params = this.props.onReceiveCoordinates(arr)
    // console.log(params)
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.coordinateHandler} ></button>
      </div>
    )
  }
}