import React from 'react';
import Draggable from 'react-draggable';

class Button extends React.Component{
    render(){
        return(
            <Draggable>

            <button>{this.props.text}</button>
            </Draggable>
        )
    }
}

export default Button