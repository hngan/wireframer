import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import firebase from "firebase";
import WireframeControls from './WireframeControls'
import ControlProperties from './ControlProperties';
import Button from './Button'
import Container from './Container'
import Input from './Input'
import Label from './Label'

class WireframeScreen extends Component {
    state = {
        name: '',
        width: 0,
        height: 0,
        controls: [],
        selected: -1
    }

    handleChange = (e) => {
        const { target } = e;
        if(target.id === "width" || target.id === "height"){
            if(parseInt(target.value) > 5000)
            target.value = 5000
            else if(parseInt(target.value) < 1)
            target.value = 1
        }
        this.setState(state => ({
            [target.id]: target.value,
        }))
    }

    handleItemChange = (event) =>{
        const { target } = event;
        this.state.controls[this.state.selected][target.id] = target.value;
        this.setState({})
    }

    updateStuff = () =>{
        this.setState({})
    }

    close = (event)=>{
        this.props.history.goBack()
    }
    
    save = (event)=>{
        firebase.firestore().collection("wireframes").doc(this.props.wireframe.id).update({modified:Date.now(), height:this.state.height, width: this.state.width,
        name: this.state.name, controls:this.state.controls, background:this.state.background, borderColor:this.state.borderColor, borderWidth:this.state.borderWidth, borderRadius:this.state.borderRadius})
        this.props.history.goBack()
    }
    createButton = (event)=>{
        event.stopPropagation();
        let button = {
            type: "button",
            radius: 0,
            color: "black",
            borderColor: "black",
            font:12,
            background:"#dddddd",
            height:"50",
            width:"50",
            borderWidth:"1",
            text:"submit",
            x: 0,
            y: 0
        };
        let controls = this.state.controls;
        controls.push(button)
        this.setState({controls:controls});
    }

    createContainer = (event)=>{
        event.stopPropagation();
        let container = {
            type: "container",
            radius: 0,
            fColor: "black",
            borderColor: "black",
            background:"white",
            height:"50",
            width:"50",
            border:"solid",
            borderWidth:"1",
            x: 0,
            y: 0
        };
        let controls = this.state.controls;
        controls.push(container);
        this.setState({controls:controls});
    }

    createInput = (event)=>{
        event.stopPropagation();
        let input = {
            type: "input",
            radius: 0,
            fColor: "black",
            borderColor: "black",
            font:12,
            background:"white",
            height:"50",
            width:"50",
            borderWidth:"1",
            text:"create input",
            x: 0,
            y: 0
        };
        let controls = this.state.controls;
        controls.push(input);
        this.setState({controls:controls});
    }

    updateWireframe(height, width, background, borderColor, borderRadius, borderWidth){
        console.log(background)
        this.setState({height:height, width:width, background:background, borderColor:borderColor, borderRadius:borderRadius, borderWidth: borderWidth},
            ()=>{this.setState({})});
    
    }

    createLabel = (event)=>{
        event.stopPropagation();
        let label = {
            type: "label",
            radius: "0",
            color: "black",
            bColor: "black",
            font:"12",
            background:"white",
            height:"50",
            width:"50",
            borderWidth:"0",
            text:"Prompt for input:",
            x: 0,
            y: 0
        };
        let controls = this.state.controls;
        controls.push(label);
        this.setState({controls:controls});
    }

    zoomIn = (event) =>{
        this.setState({zoom: this.state.zoom * 1.5},()=>{this.setState({})})
    }

    zoomOut = (event) =>{
        this.setState({zoom: this.state.zoom / 1.5},()=>{this.setState({})})
    }

    select = (event) =>{
        event.stopPropagation()
        this.setState({selected:event.target.getAttribute('itemid')})
    }

    unselect = (event) =>{
        event.stopPropagation()
        this.setState({selected: -1},()=>{this.updateStuff()})
    }

    keydownHandler = event =>{
        //delete backspace
        if(event.keyCode === 46){
            if(this.state.selected !== -1){
            let newControls = this.state.controls.slice(0);
            newControls.splice(parseInt(this.state.selected), 1)
            this.setState({selected: -1, controls:newControls})}
        }
        //copy ctrl + d
        else if(event.keyCode===68 && event.ctrlKey){
            if(this.state.selected >= 0){
                let dupe = {... this.state.controls[parseInt(this.state.selected)]}
                dupe.x += 100;
                dupe.y +=100;
                this.state.controls.push(dupe);
                this.setState({})
            }
           
        }
}

    componentDidMount(){
        document.addEventListener('keydown',this.keydownHandler);
        if(this.props.wireframe)
            this.setState({name: this.props.wireframe.name, width:this.props.wireframe.width, height:this.props.wireframe.height,
            controls:this.props.wireframe.controls, zoom: 1, selected: -1, background:this.props.wireframe.background, borderColor:this.props.wireframe.borderColor, borderWidth:this.props.wireframe.borderWidth, borderRadius:this.props.wireframe.borderRadius},()=>{
                let db = firebase.firestore()
                db.collection("wireframes").doc(this.props.wireframe.id).update({modified:Date.now()})
            });
    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.keydownHandler);
    }

    render() {
        console.log(this.state.zoom)
        const auth = this.props.auth;
        const wireframe = this.props.wireframe;
        if (!auth.uid) {
            return <Redirect to="/" />;
        }
        if(!wireframe)
        return <React.Fragment />
        return (
            <>
            <WireframeControls close={this.close} zoomIn ={this.zoomIn} zoomOut = {this.zoomOut} name={this.state.name} createInput={this.createInput} handleChange={this.handleChange}
            createButton = {this.createButton} createLabel = {this.createLabel} createContainer = {this.createContainer} save = {this.save}/>
            {this.state.selected < 0 ? <ControlProperties updateWireframe={this.updateWireframe.bind(this)} height={this.state.height} width = {this.state.width} background={this.state.background} 
            borderColor={this.state.borderColor} borderWidth={this.state.borderWidth} borderRadius={this.state.borderRadius} update= {this.updateStuff}/> : 
            <ControlProperties selected={this.state.controls[this.state.selected]} handleItemChange = {this.handleItemChange} update= {this.updateStuff}/>}
            
            <div onClick={this.unselect} className="container" style={{  transform: `scale(${this.state.zoom})`,
  transformOrigin: "0 0",position:"absolute",left:"0",right:"0", background:this.state.background, height:String(this.state.height*this.state.zoom)+"px", width:String(this.state.width*this.state.zoom)+"px", borderColor:this.state.borderColor, borderWidth:this.state.borderWidth+"px", borderRadius:this.state.borderRadius+"px", borderStyle:"solid"}}>
                {this.state.controls.map((element, i) => {
                    //console.log(element)
                    if(element.type ==="input") 
                    return (     
                        this.state.selected == i ? <Input control={element} selected={"true"} select={this.select} itemId={i}/> :<Input control={element} select={this.select} itemId={i}/>     
                    
                    )
                    else if(element.type === "container")
                    return (
                        this.state.selected == i ? <Container control={element} selected={"true"} select={this.select} itemId={i}/>:<Container control={element} select={this.select} itemId={i}/>   
                    )
                    else if(element.type === "label")
                    return(
                        this.state.selected == i ? <Label control={element} selected={"true"} select={this.select} itemId={i}/>:<Label control={element} select={this.select} itemId={i}/>
                   )
                    else
                   return( 
                    this.state.selected == i ? <Button control={element} selected={"true"} select={this.select} itemId={i}/>:<Button control={element} select={this.select} itemId={i}/>
                   )
                })
                }
            </div>
           
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { wireframes } = state.firestore.data;
  const wireframe = wireframes ? wireframes[id] : null;
  if(wireframe)
  wireframe.id = id;
  return {
    wireframe,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'wireframes' },
  ]),
)(WireframeScreen);