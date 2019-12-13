import React from 'react';
import Draggable from 'react-draggable';

class Container extends React.Component{
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
            <div itemID={this.props.itemId} onClick={this.props.select} style={{background:"white", height:"100px",width:"100px", border:"1px solid black"}}>
            <div style={{position:"absolute", left:"0", top:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
        <div style={{position:"absolute", right:"0", top:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
        <div style={{position:"absolute", left:"0", bottom:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
        <div style={{position:"absolute", right:"0", bottom:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
            </div>
            </Draggable>
        )
        else
        return(
            <Draggable bounds="parent">
            <div onClick={this.props.select} itemID={this.props.itemId} style={{background:"white", height:"100px",width:"100px", border:"1px solid black"}}>
            </div>
            </Draggable>
        )
    }
}

export default Container