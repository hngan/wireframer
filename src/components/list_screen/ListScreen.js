import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {getFirestore} from 'redux-firestore'
import M from 'materialize-css'
import firebase from "firebase";
import WireframeControls from './WireframeControls'

class ListScreen extends Component {
    state = {
        name: '',
    }

    handleChange = (e) => {
        const { target } = e;

        this.setState(state => ({
            [target.id]: target.value,
        }),()=>{
           let db = firebase.firestore()
            db.collection("wireframes").doc(this.props.wireframe.id).update({name: this.state.name, owner:this.state.owner})
        })
    }

    close = (event)=>{
        this.props.history.goBack()
    }
    
    componentDidMount(){
        console.log(this.props.wireframe)
        if(this.props.wireframe)
            this.setState({name: this.props.wireframe.name, owner: this.props.wireframe.owner,},()=>{
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
            <WireframeControls />
            <div className="container white" >
               
                {/* <ItemsList wireframe={wireframe} history = {this.props.history}/>  */}
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
)(ListScreen);