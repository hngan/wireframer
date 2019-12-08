import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import WireframeLinks from './WireframeLinks'

class HomeScreen extends Component {

    handleNewList = (event) =>{
        const firestore =  getFirestore()
        firestore.collection('wireframes').add({
            uid: this.props.auth.uid,
            name: "NONE",
            controls: [],
            width: 700,
            height:1000,
            modified: Date.now()
        }).then((list) => {            
            this.props.history.push("wireframe/"+list.id)     
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="dashboard container">
               
                <div className="row">
                    <div className="col s12 m4">
                        <WireframeLinks history = {this.props.history}/>
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
      { collection: 'wireframes' },
    ]),
)(HomeScreen);