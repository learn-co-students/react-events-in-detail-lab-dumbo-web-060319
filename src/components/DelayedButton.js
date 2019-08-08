import React, { Component } from 'react';

export default class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist()
        const delayFunction = () => {this.props.onDelayedClick(event)}
        const delay = this.props.delay
        setTimeout(delayFunction, delay)
    }

    render() {
        return(
            <button onClick={this.handleClick}>

            </button>
        )
    }
}