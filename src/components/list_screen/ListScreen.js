import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemsList from './ItemsList.js'
import { firestoreConnect } from 'react-redux-firebase';
import {getFirestore} from 'redux-firestore'
import M from 'materialize-css'
import firebase from "firebase";

class ListScreen extends Component {
    state = {
        name: '',
        owner: '',
    }

    handleChange = (e) => {
        const { target } = e;

        this.setState(state => ({
            [target.id]: target.value,
        }),()=>{
           let db = firebase.firestore()
            db.collection("todoLists").doc(this.props.todoList.id).update({name: this.state.name, owner:this.state.owner})
        })
    }

    componentDidMount(){
        if(this.props.todoList)
            this.setState({name: this.props.todoList.name, owner: this.props.todoList.owner,},()=>{
                let db = firebase.firestore()
                db.collection("todoLists").doc(this.props.todoList.id).update({modified:Date.now()})
            });
    }
    render() {
        console.log(this.props)
        const auth = this.props.auth;
        const todoList = this.props.todoList;
        if (!auth.uid) {
            return <Redirect to="/" />;
        }
        if(!todoList)
        return <React.Fragment />
        return (
            <div className="container white" >
                <h5 className="grey-text text-darken-3" style={{display:'inline',position:"relative", top:"20px"}}>Todo List</h5>
                <i className = "modal-trigger medium material-icons" style={{float:'right'}} onClick={()=>{this.state.modal.open()}}>delete_forever</i>
               
                <div className="input-field" style={{marginTop:"50px"}}>
                    <label className="active" htmlFor="name">Name</label>
                    <input className="active" type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name} />
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="owner">Owner</label>
                    <input className="active" type="text" name="owner" id="owner" onChange={this.handleChange} value={this.state.owner} />
                </div>
                <ItemsList todoList={todoList} history = {this.props.history}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { todoLists } = state.firestore.data;
  const todoList = todoLists ? todoLists[id] : null;
  if(todoList)
  todoList.id = id;
  return {
    todoList,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'todoLists' },
  ]),
)(ListScreen);