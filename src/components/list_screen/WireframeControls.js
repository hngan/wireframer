import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {getFirestore} from 'redux-firestore'
import firebase from "firebase";

class WireframeControls extends React.Component{
styles = {
  background:"#26a69a",
  color:"white",
  textAlign: "center"
}
render(){
    return(
        <div className="card-panel white" style ={{width: "21%", float:"left",  position: "fixed", zIndex:"1"}}>
        <div className="input-field">
                <label className="active" htmlFor="name">Name</label>
                <input className="active" type="text" name="name" id="name" onChange={this.props.handleChange} value={this.props.name} />
                <br/>
        </div>
        <div>
        <a className="waves-light btn-small"><i className = " small material-icons" >zoom_in</i></a>
        <a className="waves-light btn-small"><i className = "small material-icons" >zoom_out</i></a>
        <a className="waves-light btn-small" onClick= {this.props.save}>Save</a>
        <a className="waves-light btn-small" onClick= {this.props.close}>Close</a>
        </div>
        <br/>
        <div>
        <label className="active" htmlFor="height">Height:</label>
        <input className="active" type="number" name="height" min="1" max="5000" id="height" onChange={this.props.handleChange} value={this.props.height} style={{width:"70px"}}/>
        <label className="active" htmlFor="width">Width:</label>
        <input className="active" type="number" name="width" id="width" min="1" max="5000" onChange={this.props.handleChange} value={this.props.width}style={{width:"70px"}} />
        </div>
        <br/>
        <div style ={this.styles} onClick={this.props.createContainer}>
          <div style ={{position:"relative",background:"white", width:"150px", height:"70px", left:"20%", top:"10px", border:"1px solid black", color:"black"}}>Empty Container</div>
        <h5>Container</h5>
        </div> 
        <br/>
        <div style = {this.styles} onClick={this.props.createLabel}>
        <strong style={{position:"relative", top:"10px"}}>Prompt for input:</strong>
        <h5>Label</h5>
        </div>
        <br/>
        <div style ={this.styles} onClick={this.props.createInput}>
        <input type="text" readOnly="readonly" value="Create input" style={{position:"relative", top:"10px", color:"white"}}/>
        <h5>Input</h5>
        </div>
        <br/>
        <div onClick={this.props.createButton} style ={this.styles}>
        <button style={{position:"relative", top:"15px"}}>Button</button>
        <br/>
        <h5>Button</h5>
        <br/>
        </div>
        </div>
    )
}
}

export default WireframeControls