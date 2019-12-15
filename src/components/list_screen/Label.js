import React from 'react';
import {Rnd} from 'react-rnd'
class Label extends React.Component{
    render(){
        const control = this.props.control;
        console.log(control)
        if(this.props.selected)
        return(
        <Rnd bounds="parent"
        position={{ x: this.props.control.x, y: this.props.control.y }}
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
        >  
        <div onClick={this.props.select} itemID={this.props.itemId} style={{
             background: control.background,
             fontSize: control.font+"px",
             borderStyle:"solid",
             borderColor: control.borderColor,
             borderWidth: control.borderWidth+"px",
             color: control.color,
             borderRadius: control.radius+"px",
             display: "inline-block",
             width: control.width,
             height:control.height,
             overflow:"hidden",
             textAlign:"center"
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
            <Rnd bounds="parent"
            position={{ x: this.props.control.x, y: this.props.control.y }}
            size={{ width: control.width,  height: control.height }}
            onDragStop={(e, d) => {
            this.props.control.x= d.x 
            this.props.control.y= d.y
            this.props.update() }
            }
            onResizeStop={(e, direction, ref, delta, position) => {
                this.props.control.width= ref.style.width
                this.props.control.height= ref.style.height
                this.props.update()
            }}>  
            <div onClick={this.props.select} itemID={this.props.itemId} style={{
                 background: control.background,
                 fontSize: control.font+"px",
                 borderStyle:"solid",
                 borderColor: control.borderColor,
                 borderWidth: control.borderWidth+"px",
                 color: control.color,
                 borderRadius: control.radius+"px",
                 display: "inline-block",
                 width: control.width,
                 height:control.height,
                 overflow:"hidden",
                 textAlign:"center"
            }}>
            {control.text}</div>
        </Rnd>
        )
    }
}

export default Label