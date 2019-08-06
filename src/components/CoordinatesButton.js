import React, { Component } from 'react'
// import { create } from 'domain';

class CoordinatesButton extends Component {

  createArray = (event) => {
    const array = [event.clientX, event.clientY]
    const hello = this.props.onReceiveCoordinates(array)
    console.log(hello)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.createArray}>PRESSSSSSSSSS ANYWHERREEEEEEEEE</button>
      </div>
    )
  }
}

export default CoordinatesButton
