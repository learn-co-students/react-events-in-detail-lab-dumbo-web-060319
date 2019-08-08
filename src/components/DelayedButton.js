// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{
    handleClick=(event)=>{
        // console.log(this.props.delay)
        // console.log(this.props.onDelayedClick)
        event.persist()
        setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay);
        // this.props.onDesplayedClick(setTimeout(function(e)=>{}))
    }

    render(){
        // console.log(this.props)
        return(
            <button onClick={this.handleClick}>XX</button>
        )
    }
}