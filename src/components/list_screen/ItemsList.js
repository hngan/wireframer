import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemCard from './ItemCard';
import { firestoreConnect } from 'react-redux-firebase';
import {NavLink} from 'react-router-dom'
import {getFirestore} from 'redux-firestore'
class ItemsList extends React.Component {

    state={
        sort: "",
        decreasing:false
    }

    deleteItem =(event)=>{
        event.stopPropagation();
        let db = getFirestore();
        let array =this.props.todoList.items.slice(0)
        array.splice(parseFloat(event.target.getAttribute("index")), 1)
        db.collection("todoLists").doc(this.props.todoList.id).update({items:array});
    }

    moveDown = (event)=>{
        event.stopPropagation();
        let db = getFirestore();
        let array = this.props.todoList.items.slice(0);
        let index = parseFloat(event.target.getAttribute("index"));
        let item1 = this.props.todoList.items[index];
        let item2 = this.props.todoList.items[index + 1];
        array[index] =  item2
        array[index + 1] = item1
        db.collection("todoLists").doc(this.props.todoList.id).update({items:array});
    }

    moveUp = (event)=>{
        event.stopPropagation();
        let db = getFirestore();
        let array = this.props.todoList.items.slice(0);
        let index = parseFloat(event.target.getAttribute("index"));
        let item1 = this.props.todoList.items[index];
        let item2 = this.props.todoList.items[index - 1];
        array[index] =  item2
        array[index - 1] = item1
        db.collection("todoLists").doc(this.props.todoList.id).update({items:array});
    }
    
    sortBy(event){
        let db = getFirestore();
        let array = this.props.todoList.items.slice(0);
        if(this.state.sort === event.target.getAttribute("name")){
            this.setState({decreasing:!this.state.decreasing},()=>{
                array.sort(this.compare.bind(this));
                db.collection("todoLists").doc(this.props.todoList.id).update({items:array});
            });
        }
        else
        this.setState({sort: event.target.getAttribute("name"), decreasing:false},()=>{
            array.sort(this.compare.bind(this));
            db.collection("todoLists").doc(this.props.todoList.id).update({items:array});
        })
       
    }

    compare(item1, item2){
       if (this.state.decreasing) {
           let temp = item1;
           item1 = item2;
           item2 = temp;
       }
       if (this.state.sort === "task") {
           if (item1.description < item2.description)
               return -1;
           else if (item1.description > item2.description)
               return 1;
           else
               return 0;}
       else if (this.state.sort === "due_date") {
       if (item1.due_date < item2.due_date)
           return -1;
       else if (item1.due_date > item2.due_date)
           return 1;
       else
           return 0;}
        else {
            if (item1.completed < item2.completed)
                return -1;
            else if (item1.completed > item2.completed)
                return 1;
            else
                return 0;
        }
    }

    render() {
        const todoList = this.props.todoList;
        const items = todoList.items;
        console.log("ItemsList: todoList.id " + todoList.id);
        return (
            <div className="todo-lists section" >
                <table className="highlight" >
                <thead>
                <tr>
                    <th name = "task" onClick = {this.sortBy.bind(this)}>Task</th>
                    <th name = "due_date" onClick = {this.sortBy.bind(this)}>Due Date</th>
                    <th name = "status" onClick = {this.sortBy.bind(this)}>Status</th>
                </tr>
                </thead>
                <tbody>
                {items && items.map(function(item, index) {
                    item.id = item.key;
                    return (
                        <ItemCard todoList={todoList} item={item} index={index} delete={this.deleteItem} moveUp={this.moveUp} moveDown={this.moveDown} history = {this.props.history}/>
                    );}.bind(this))
                }
                </tbody>
                </table>
               <NavLink to={"/todoList/"+todoList.id +"/item/"+items.length}>< div><i className="small material-icons" style={{marginLeft:"47%", marginTop:"5%"}}>add_circle_outline</i></div> </NavLink>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const todoList = ownProps.todoList;
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
)(ItemsList);