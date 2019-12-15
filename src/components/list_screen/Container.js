import React from 'react';
import { Rnd } from 'react-rnd';

class Container extends React.Component{
    
    render(){
        const control = this.props.control
        if(this.props.selected)
        return(
            <Rnd bounds="parent"
            position={{ x: this.props.control.x , y: this.props.control.y  }}
            size={{ width: control.width,  height: control.height }}
            onDragStop={(e, d) => {
            this.props.control.x= d.x 
            this.props.control.y= d.y 
            this.props.update()}}
            onResizeStop={(e, direction, ref, delta, position) => {
                this.props.control.width= ref.style.width
                this.props.control.height= ref.style.height
                this.props.update()
            }}
            scale = {this.props.zoom2}>
            <div style={{display:"inline-block"}}>
            <div style={{position:"absolute", left:"0", top:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
            <div style={{position:"absolute", right:"0", top:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
            <div style={{position:"absolute", left:"0", bottom:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
            <div style={{position:"absolute", right:"0", bottom:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
            
            <div itemID={this.props.itemId} onClick={this.props.select} style={{
            background: control.background,
            borderStyle: "solid",
            borderWidth: control.borderWidth +"px",
            borderColor: control.borderColor ,
            borderRadius: String(control.radius) +"px",
            height: control.height,
            width: control.width 
    
        }}>
           </div>
            </div>
            </Rnd>
        )
        else
        return(
            <Rnd bounds="parent"
            position={{ x: this.props.control.x , y: this.props.control.y  }}
            size={{ width: control.width,  height: control.height }}
            onDragStop={(e, d) => {
            this.props.control.x= d.x 
            this.props.control.y= d.y 
            this.props.update()}}
            onResizeStop={(e, direction, ref, delta, position) => {
                this.props.control.width= ref.style.width
                this.props.control.height= ref.style.height
                this.props.update()
            }}
            scale = {this.props.zoom2}>
            <div onClick={this.props.select} itemID={this.props.itemId} style={{
            background: control.background,
            borderStyle: "solid",
            borderWidth: control.borderWidth +"px",
            borderColor: control.borderColor ,
            borderRadius: String(control.radius) +"px",
            height: control.height,
            width: control.width
    
        }}>
            </div>
            </Rnd>
        )
    }
}

export default Container