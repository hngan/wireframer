import React from 'react';
import {Rnd} from 'react-rnd'
class Label extends React.Component{
    render(){
        const control = this.props.control;
        console.log(control)
        if(this.props.selected)
        return(
        <Rnd bounds="parent">  
        <div onClick={this.props.select} itemID={this.props.itemId} style={{
             background: control.background,
             fontSize: control.font,
             borderStyle:"solid",
             borderColor: control.borderColor,
             borderWidth: control.borderWidth,
             color: control.color,
             borderRadius: control.radius,
             display: "inline-block",
        }}>
        <div style={{position:"absolute", left:"0", top:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
        <div style={{position:"absolute", right:"0", top:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
        <div style={{position:"absolute", left:"0", bottom:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
        <div style={{position:"absolute", right:"0", bottom:"0",background:"white", width:"7px",height:"7px", border:"1px solid black"}}></div>
 
        {control.text}</div>
        </Rnd>
        )
        else
        return(
            <Rnd bounds="parent">  
            <div onClick={this.props.select} itemID={this.props.itemId} style={{
                 background: control.background,
                 fontSize: control.font+"px",
                 borderStyle:"solid",
                 borderColor: control.borderColor,
                 borderWidth: control.borderWidth+"px",
                 color: control.color,
                 borderRadius: control.radius+"px",
                 display: "inline-block",
            }}>
            {control.text}</div>
        </Rnd>
        )
    }
}

export default Label