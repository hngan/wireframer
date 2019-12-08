import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {getFirestore} from 'redux-firestore'
import firebase from "firebase";

class WireframeControls extends React.Component{
styles = {
  background:"wheat",
  textAlign: "center"
}
render(){
    return(
        <div class="card-panel white" style ={{width: "21%"}}>
        <div className="input-field">
                <label className="active" htmlFor="name">Name</label>
                <input className="active" type="text" name="name" id="name" onChange={this.props.handleChange} value={this.props.name} />
                <br/>
        </div>
        <div>
        <a class="waves-light btn-small"><i className = " small material-icons" >zoom_in</i></a>
        <a class="waves-light btn-small"><i className = "small material-icons" >zoom_out</i></a>
        <a class="waves-light btn-small">Save</a>
        <a class="waves-light btn-small">Close</a>
        </div>
        <br/>
        <div>
        <label className="active" htmlFor="height">Height:</label>
        <input className="active" type="number" name="height" id="height" onChange={this.props.handleChange} value={this.props.height} style={{width:"70px"}}/>
        <label className="active" htmlFor="width">Width:</label>
        <input className="active" type="number" name="width" id="width" onChange={this.props.handleChange} value={this.props.width}style={{width:"70px"}} />
        </div>
        <br/>
        <div style ={this.styles}>
          <div style ={{position:"relative",background:"white", width:"200px", height:"100px", left:"10%", top:"10px", border:"1px solid black"}}>Empty Container</div>
        <h5>Container</h5>
        </div> 
        <br/>
        <div style ={this.styles}>
        <strong style={{position:"relative", top:"10px"}}>Prompt for input:</strong>
        <h5>Label</h5>
        </div>
        <br/>
        <div style ={this.styles}>
        <input type="text" readonly="readonly" value="Create input" style={{position:"relative", top:"10px"}}/>
        <h5>Input</h5>
        </div>
        <br/>
        <div style ={this.styles}>
        <a class="waves-light btn-small" style={{position:"relative", top:"10px"}}>Button</a>
        <h5>Button</h5>
        </div>
        </div>
    )
}
}

export default WireframeControls