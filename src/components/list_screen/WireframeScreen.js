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
        selected: ""
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

    close = (event)=>{
        this.props.history.goBack()
    }
    
    save = (event)=>{
        firebase.firestore().collection("wireframes").doc(this.props.wireframe.id).update({modified:Date.now(), height:this.state.height, width: this.state.width,
        name: this.state.name, controls:this.state.controls})
        this.props.history.goBack()
    }
    createButton = (event)=>{
        event.stopPropagation();
        let button = {
            type: "button",
            radius: 0,
            fColor: "black",
            bColor: "black",
            font:12,
            backColor:"white",
            thickness: 0,
            text:"submit"
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
            bColor: "black",
            font:12,
            backColor:"white",
            thickness: 0,
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
            bColor: "black",
            font:12,
            backColor:"white",
            thickness: 0,
            text:"create input"
        };
        let controls = this.state.controls;
        controls.push(input);
        this.setState({controls:controls});
    }

    createLabel = (event)=>{
        event.stopPropagation();
        let label = {
            type: "label",
            radius: 0,
            fColor: "black",
            bColor: "black",
            font:12,
            backColor:"white",
            thickness: 0,
            text:"Prompt for input:"
        };
        let controls = this.state.controls;
        controls.push(label);
        this.setState({controls:controls});
    }

    zoomIn = (event) =>{
        this.setState({zoom: this.state.zoom * 2})
    }

    zoomOut = (event) =>{
        this.setState({zoom: this.state.zoom / 2})
    }

    select = (event) =>{
        event.stopPropagation()
        console.log(event.target.getAttribute('itemid'))
        this.setState({selected:event.target.getAttribute('itemid')})
    }

    unselect = (event) =>{
        event.stopPropagation()
        this.setState({selected: -1})
    }

    keydownHandler = event =>{
        //delete backspace
        if(event.keyCode === 8){
            console.log("delete");
            if(this.state.selected !== -1){
            let newControls = this.state.controls.slice(0);
            newControls.splice(parseInt(this.state.selected), 1)
            this.setState({selected: -1, controls:newControls})}
        }
        //copy ctrl + d
        else if(event.keyCode===89 && event.ctrlKey){
            this.props.todoList.owner = this.state.listOwner.name;
            this.props.todoList.name = this.state.listName.name;
            this.setState({})
        }
}

    componentDidMount(){
        document.addEventListener('keydown',this.keydownHandler);
        console.log(this.props.wireframe)
        if(this.props.wireframe)
            this.setState({name: this.props.wireframe.name, width:this.props.wireframe.width, height:this.props.wireframe.height,
            controls:this.props.wireframe.controls, zoom: 1},()=>{
                let db = firebase.firestore()
                db.collection("wireframes").doc(this.props.wireframe.id).update({modified:Date.now()})
            });
    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.keydownHandler);
    }

    render() {
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
            createButton = {this.createButton} createLabel = {this.createLabel} createContainer = {this.createContainer} height={this.state.height} width = {this.state.width} save = {this.save}/>
            <ControlProperties />
            <div onClick={this.unselect} className="container white" style={{position:"absolute",left:"0",right:"0", background:"white", height:String(this.state.height*this.state.zoom)+"px", width:String(this.state.width*this.state.zoom)+"px"}}>
                {this.state.controls.map((element, i) => {
                    if(element.type ==="input") 
                    return (     
                        this.state.selected == i ? <Input text={element.text} selected={"true"} select={this.select} itemId={i}/> :<Input text={element.text} select={this.select} itemId={i}/>     
                    
                    )
                    else if(element.type === "container")
                    return (
                        this.state.selected == i ? <Container text={element.text} selected={"true"} select={this.select} itemId={i}/>:<Container text={element.text} select={this.select} itemId={i}/>   
                    )
                    else if(element.type === "label")
                    return(
                        this.state.selected == i ? <Label text={element.text} selected={"true"} select={this.select} itemId={i}/>:<Label text={element.text} select={this.select} itemId={i}/>
                   )
                    else
                   return( 
                    this.state.selected == i ? <Button text={element.text} selected={"true"} select={this.select} itemId={i}/>:<Button text={element.text} select={this.select} itemId={i}/>
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