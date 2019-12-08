import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css'
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import TodoListLinks from './TodoListLinks'

class HomeScreen extends Component {

    handleNewList = (event) =>{
        const firestore =  getFirestore()
        firestore.collection('todoLists').add({
            name: "NONE",
            owner: "NONE",
            items: [],
            modified: Date.now()
        }).then((list) => {            
            this.props.history.push("todoList/"+list.id)     
        }).catch((err) => {
            console.log(err);
        });
    }
    
    deleteList = () => {
        let db = getFirestore()
        db.collection("todoLists").doc(this.props.todoList.id).delete().then(()=>{
            this.props.history.goBack();
        });
    }

    componentDidMount(){
        let elem = document.getElementById('modal1')
        M.Modal.init(elem,{inDuration: 150,
            outDuration: 250,
            opacity: 0.5,
            startingTop: "4%",
            endingTop: "10%"});
        this.setState({modal: M.Modal.getInstance(elem)})
    }
    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="dashboard container">
                <div id="modal1" className="modal">
                <div className="modal-content">
                <h4>Delete Diagram?</h4>
                <strong>Are you sure you want to delete this diagram?</strong>
                </div>
                <div className="modal-footer">
                <a className="modal-close btn-small" style={{marginRight:"10px"}}>No</a>
                <a className="modal-close btn-small" onClick={this.deleteList}>Yes</a>
                </div>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        <TodoListLinks />
                    </div>

                    <div className="col s8">
                        <div className="banner">
                            Wireframe<br />
                            Maker
                        </div>
                        
                        <div className="home_new_list_container">
                                <button className="home_new_list_button" onClick={this.handleNewList}>
                                    Create a New Wireframe
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'todoLists' },
    ]),
)(HomeScreen);