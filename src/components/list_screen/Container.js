import React from 'react';
import { Rnd } from 'react-rnd';

class Container extends React.Component{
    
    render(){
        const control = this.props.control
        if(this.props.selected)
        return(
            <Rnd bounds="parent">
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
            height: control.height +"px",
            width: control.width +"px" 
    
        }}>
           </div>
            </div>
            </Rnd>
        )
        else
        return(
            <Rnd bounds="parent">
            <div onClick={this.props.select} itemID={this.props.itemId} style={{
            background: control.background,
            borderStyle: "solid",
            borderWidth: control.borderWidth +"px",
            borderColor: control.borderColor ,
            borderRadius: String(control.radius) +"px",
            height: control.height +"px",
            width: control.width +"px" 
    
        }}>
            </div>
            </Rnd>
        )
    }
}

export default Container