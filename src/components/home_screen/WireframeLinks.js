import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import M from 'materialize-css'
import { getFirestore } from 'redux-firestore';
import WireframeCard from './WireframeCard';

class wireframeLinks extends React.Component {

    state={
        deleteId: ""
    }
    deleteList = () => {
        let db = getFirestore()
        db.collection("wireframes").doc(this.state.deleteId).delete().then(()=>{
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

    setDeleteId = (id) => {
        this.setState({deleteId:id},()=>{
            this.state.modal.open()
        });
        
    }

    render() {
        const wireframes = this.props.wireframes;
        console.log(wireframes);
        return (
            <div className="todo-lists section">
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
                {wireframes && wireframes.map(wireframe => (
                    //<Link to={'/wireframe/' + wireframe.id} key={wireframe.id}>
                        this.props.auth.uid === wireframe.uid ?
                        <WireframeCard history = {this.props.history} wireframe={wireframe} modal={this.state.modal ?this.state.modal: {} } deleteWireframe={this.setDeleteId}/> : <></>
                    //</Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let wireframes = state.firestore.ordered.wireframes;
    if(wireframes){
    wireframes.sort((a, b)=>{
        if(a.modified < b.modified) return 1;
        if(a.modified > b.modified) return -1;
        return 0;})}
    return {
        wireframes: wireframes,
        auth: state.firebase.auth,
    };
};

export default compose(connect(mapStateToProps))(wireframeLinks);