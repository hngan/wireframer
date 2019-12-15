import React from 'react';
import {Rnd} from 'react-rnd'

class Button extends React.Component{
    render(){
        const control = this.props.control;
        if(this.props.selected)
        return(
            <Rnd bounds="parent"
            position={{ x: this.props.control.x, y: this.props.control.y }}
            onDragStop={(e, d) => {
            this.props.control.x= d.x 
            this.props.control.y= d.y }}>
                <div style={{display:"inline-block"}}>
                <div style={{position:"absolute", left:"0", top:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
                <div style={{position:"absolute", right:"0", top:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
                <div style={{position:"absolute", left:"0", bottom:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
                <div style={{position:"absolute", right:"0", bottom:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
                <button className="browser-default" onClick={this.props.select} itemID={this.props.itemId} style={ {
                    background: control.background,
                    fontSize: control.font+"px",
                    borderColor: control.borderColor,
                    borderWidth: control.borderWidth+"px",
                    color: control.color,
                    borderStyle:"solid",
                    borderRadius: control.radius+"px"
                }} >{control.text}</button>
                </div>
            
            </Rnd>
        )
    else
    return(
        <Rnd bounds="parent"
            position={{ x: this.props.control.x, y: this.props.control.y }}
            onDragStop={(e, d) => {
            this.props.control.x= d.x 
            this.props.control.y= d.y }}>
            <div style={{display:"inline-block"}}>
             <button  className="browser-default" onClick={this.props.select} itemID={this.props.itemId} style={ {
                    background: control.background,
                    fontSize: control.font+"px",
                    borderColor: control.borderColor,
                    borderWidth: control.borderWidth+"px",
                    color: control.color,
                    borderStyle:"solid",
                    borderRadius: control.radius+"px"
                }} >{control.text}</button>
            </div>
        </Rnd>
    )
    }
}

export default Button