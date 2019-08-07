// Code DelayedButton Component Here

import React, { Component } from "react"
import CoordinatesButton from "./CoordinatesButton"

export default class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
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