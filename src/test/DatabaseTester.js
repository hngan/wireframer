import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import todoJson from './TestWireframeData.json'
import { getFirestore } from 'redux-firestore';

class DatabaseTester extends React.Component {

    // NOTE, BY KEEPING THE DATABASE PUBLIC YOU CAN
    // DO THIS ANY TIME YOU LIKE WITHOUT HAVING
    // TO LOG IN
    handleClear = () => {
        const fireStore = getFirestore();
        fireStore.collection('wireframes').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                console.log("deleting " + doc.id);
                fireStore.collection('wireframes').doc(doc.id).delete();
            })
        });
        fireStore.collection('users').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                console.log("deleting " + doc.id);
                if(!doc.data().admin)
                fireStore.collection('users').doc(doc.id).delete();
            })
        });
    }

    handleReset = () => {
        const fireStore = getFirestore();
        todoJson.wireframes.forEach(wireframeJson => {
            fireStore.collection('wireframes').add({
                    name: wireframeJson.name,
                    uid: wireframeJson.uid,
                    controls: wireframeJson.controls,
                    height: wireframeJson.height,
                    width: wireframeJson.width,
                    background:wireframeJson.background,
                    borderWidth: wireframeJson.borderWidth,
                    borderRadius: wireframeJson.borderRadius,
                    borderColor: wireframeJson.borderColor,
                    modified: Date.now()
                }).then(() => {
                    console.log("DATABASE RESET");
                }).catch((err) => {
                    console.log(err);
                });
        });
    }

    render() {
        if(this.props.auth.uid){
        if(!this.props.firebase.profile.isEmpty && this.props.firebase.profile.admin){
            return (
                <div>
                    <button onClick={this.handleClear}>Clear Database</button>
                    <button onClick={this.handleReset}>Reset Database</button>
                </div>)
        }
       else if(this.props.firebase.profile.isEmpty)
        return<></>
       return <Redirect to="/home" />;}
        return <Redirect to="/login" />;
    }
}

const mapStateToProps = function (state) {
    return {
        auth: state.firebase.auth,
        firebase: state.firebase
    };
}

export default connect(mapStateToProps)(DatabaseTester);