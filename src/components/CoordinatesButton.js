// Code CoordinatesButton Component Here
import React from "react"

export default class CoordinatesButton extends React.Component
{
    clickProcessCoordinates = (e) => 
    {
        let arr = [e.clientX,e.clientY];
        this.props.onReceiveCoordinates(arr);
    }
    render()
    {
        
        return (
            <button onClick = {this.clickProcessCoordinates}></button>
        )
    }
}