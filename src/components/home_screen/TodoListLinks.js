import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import TodoListCard from './TodoListCard';

class TodoListLinks extends React.Component {
    render() {
        const todoLists = this.props.todoLists;
        console.log(todoLists);
        return (
            <div className="todo-lists section">
                {todoLists && todoLists.map(todoList => (
                    <Link to={'/todoList/' + todoList.id} key={todoList.id}>
                        <TodoListCard todoList={todoList} />
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let todolists = state.firestore.ordered.todoLists;
    if(todolists){
    todolists.sort((a, b)=>{
        if(a.modified < b.modified) return 1;
        if(a.modified > b.modified) return -1;
        return 0;})}
    return {
        todoLists: todolists,
        auth: state.firebase.auth,
    };
};

export default compose(connect(mapStateToProps))(TodoListLinks);