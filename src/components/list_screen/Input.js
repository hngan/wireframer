import React from 'react';
import Draggable from 'react-draggable'

class Input extends React.Component{
    style={
        background: this.props.background || "#dddddd",
        font: this.props.font || "14",
        borderColor: this.props.borderColor || "black",
        borderWidth: this.props.borderWidth || "1px",
        color: this.props.color || "black",
        borderRadius: this.props.radius || "0"
    }
    render(){
        if(this.props.selected)
        return(
            <Draggable bounds="parent">
           <div style={{width:"300px"}}>
           <div style={{position:"absolute", left:"0", top:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
            <div style={{position:"absolute", right:"0", top:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
            <div style={{position:"absolute", left:"0", bottom:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
             <div style={{position:"absolute", right:"0", bottom:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
             <input onClick={this.props.select} itemID={this.props.itemId} maxLength="100" type="text" readOnly/>
            </div>
            </Draggable>
        )
        else
        return(
            <Draggable bounds="parent">
            <div style={{width:"300px"}}>
            <input onClick={this.props.select} itemID={this.props.itemId} maxLength="100" type="text" readOnly/>
            </div>
            </Draggable>
        )
    }
}

export default Input