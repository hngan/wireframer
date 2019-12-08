import React from 'react';

class TodoListCard extends React.Component {

    render() {
        const { todoList } = this.props;
        console.log("TodoListCard, todoList.id: " + todoList.id);
        return (
            <div className="card z-depth-0 todo-list-link">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{todoList.name}</span>
                    <span className="card-body">By: {todoList.owner}</span>
                    <div style={{position: "relative",float:'right', bottom: "30px", left: "20px"}}
                    onClick={(event)=>{event.stopPropagation(); console.log("meow")
                        this.state.modal.open()}}>
                        <i className = "modal-trigger small material-icons" >close</i></div>
                </div>
            </div>
        );
    }
}
export default TodoListCard;