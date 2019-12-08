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
        <div className="card-panel white" style ={{width: "21%", float:"left", overflowY:"scroll", overflowX:"hidden"}}>
        <div className="input-field">
                <label className="active" htmlFor="name">Name</label>
                <input className="active" type="text" name="name" id="name" onChange={this.props.handleChange} value={this.props.name} />
                <br/>
        </div>
        <div>
        <a className="waves-light btn-small"><i className = " small material-icons" >zoom_in</i></a>
        <a className="waves-light btn-small"><i className = "small material-icons" >zoom_out</i></a>
        <a className="waves-light btn-small">Save</a>
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
        <div style ={this.styles}>
          <div style ={{position:"relative",background:"white", width:"200px", height:"100px", left:"10%", top:"10px", border:"1px solid black", color:"black"}}>Empty Container</div>
        <h5>Container</h5>
        </div> 
        <br/>
        <div style ={this.styles}>
        <strong style={{position:"relative", top:"10px"}}>Prompt for input:</strong>
        <h5>Label</h5>
        </div>
        <br/>
        <div style ={this.styles}>
        <input type="text" readOnly="readonly" value="Create input" style={{position:"relative", top:"10px", color:"white"}}/>
        <h5>Input</h5>
        </div>
        <br/>
        <div style ={this.styles}>
        <a className="waves-light btn-small" style={{position:"relative", top:"15px"}}>Button</a>
        <br></br>
        <br/>
        <h5>Button</h5>
        <br></br>
        </div>
        </div>
    )
}
}

export default WireframeControls