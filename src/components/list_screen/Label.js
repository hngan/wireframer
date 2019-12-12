import React from 'react';
import Draggable from 'react-draggable';

class Label extends React.Component{
    render(){
        return(
        <Draggable>  
        <div><label>{this.props.text}</label></div>
        </Draggable>
        )
    }
}

export default Label