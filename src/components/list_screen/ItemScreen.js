import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
class ItemScreen extends React.Component{

    state={
        desc:"",
        assigned: "",
        date: "",
        completed: false
    }
    handleChange = (e) => {
        const { target } = e;
        if(target.id === "completed")
            this.setState({completed: !this.state.completed})
        else
        this.setState(state => ({
            [target.id]: target.value,
        }))
    }
    componentDidMount(){
        if(this.props.todoList)
            this.setState({desc: this.props.item.description, assigned: this.props.item.assigned_to, date: this.props.item.due_date, completed: this.props.item.completed})
    }

    submit = () =>{
        let item = {
            description: this.state.desc,
            assigned_to: this.state.assigned,
            due_date: this.state.date,
            completed: this.state.completed
        }
        item.key = this.props.item.id
        item.id = this.props.item.id
        let array = this.props.todoList.items.slice(0)
        if(this.props.item.id > this.props.todoList.items.length)
            array.push(item);
        else
            array[this.props.item.id] = item;
        let db = getFirestore();
        db.collection("todoLists").doc(this.props.todoList.id).update({items:array}).then(()=>{this.props.history.goBack()})
    }
    render(){
        const auth = this.props.auth;
        const todoList = this.props.todoList;
        if (!auth.uid) {
            return <Redirect to="/" />;
        }
        return(
            <div className="container white">
                <div style={{width:'90%', textAlign:'center', marginLeft:"30px"}}>
                <h3>Item</h3>

                <div className="input-field" style={{marginTop:"50px"}}>
                    <label className="active" htmlFor="desc">Description:</label>
                    <input maxLength="30" className="active" type="text" name="desc" id="desc" onChange={this.handleChange} value = {this.state.desc}/>
                </div>

                <div className="input-field">
                    <label className="active" htmlFor="assigned">Assigned To:</label>
                    <input maxLength="30" className="active" type="text" name="assigned" id="assigned" onChange={this.handleChange} value = {this.state.assigned}/>
                </div>

                <div className="input-field">
                    <label className="active" htmlFor="date">Date:</label>
                    <input className ="active" type="date" id="date" onChange={this.handleChange} value = {this.state.date} />
                </div>

                <div>
                <label>
                <input type="checkbox" id="completed" onChange ={this.handleChange} checked={this.state.completed}/>
                <span>Completed</span>
                </label>
                </div>
                <br/>
                <button className="btn" id="cancel" style={{marginRight:"10px"}} onClick={()=>{this.props.history.goBack();}}> Cancel
                </button>
                <button className="btn" id="submit" onClick={this.submit}>Submit
                    <i className="material-icons right" >send</i>
                </button>
                <br/>
                <br/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const {itemId } = ownProps.match.params;
    const { todoLists } = state.firestore.data;
    const todoList = todoLists ? todoLists[id] : null;
    let item = {}
    if(todoList){
    todoList.id = id;
    item = todoList.items.length - 1 < parseInt(itemId) ? {description: "", assigned_to:"", due_date:"", completed:false} : todoList.items[parseInt(itemId)]
    item.id = itemId
    }
    return {
      todoList,
      auth: state.firebase.auth,
      item,
    };
  };
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'todoLists' },
    ]),
  )(ItemScreen);