import React, { Component } from 'react'

class DelayedButton extends Component {

  timeEvent = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay)
  }
  

  render() {
    return (
      <div>
        <button onClick={this.timeEvent}></button>
      </div>
    )
  }
}

export default DelayedButton
