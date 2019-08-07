import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleClick = (event) => {
    //event.persist()
    event.persist()
    return setTimeout( () => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
    // console.log(this.props.onDelayedClick(event));
  }

  render(){
    //console.log(this.props)
    return(
      <button onClick={this.handleClick}>delayed button</button>
    )
  }
}
