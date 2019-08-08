// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    
    handleDelay = (event) => {
        event.persist();
        setTimeout( () => (this.props.onDelayedClick(event), this.props.delay));
    };

    render() {
        return (
            <div>
                <button onClick={ this.handleDelay }></button>
            </div>
        )
    };

};

export default DelayedButton;
