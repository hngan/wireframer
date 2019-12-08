import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {getFirestore} from 'redux-firestore'
import M from 'materialize-css'
import firebase from "firebase";
import WireframeControls from './WireframeControls'
import ControlProperties from './ControlProperties';

class WireframeScreen extends Component {
    state = {
        name: '',
        width: 0,
        height: 0
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
        console.log("Hello")
        this.props.history.goBack()
    }
    
    componentDidMount(){
        console.log(this.props.wireframe)
        if(this.props.wireframe)
            this.setState({name: this.props.wireframe.name, width:this.props.wireframe.width, height:this.props.wireframe.height,
            controls:this.props.wireframe.controls},()=>{
                let db = firebase.firestore()
                db.collection("wireframes").doc(this.props.wireframe.id).update({modified:Date.now()})
            });
    }
    render() {
        console.log(this.props)
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
            createButton = {this.createButton} createLabel = {this.createLabel} createContainer = {this.createContainer} height={this.state.height} width = {this.state.width}/>
            <ControlProperties />
            <div className="container white" style={{background:"white", height:"5000px", width:"1000px"}}>

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