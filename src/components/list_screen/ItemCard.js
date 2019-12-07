import React from 'react';

class ItemCard extends React.Component {
    state={
        class:"hoverBtns",
    }
      handleClick = (click) => {
        this.props.history.push("/todoList/"+this.props.todoList.id+"/item/"+this.props.index)
      }

    render() {
        const { item } = this.props;
        return (
                <>   
                <tr onClick={this.handleClick} onMouseOver={()=>{this.setState({class:"hoverBtns is_visible"})}} onMouseLeave={()=>{this.setState({class:"hoverBtns"})}}>
                    <td>
                    <div style={{position:"relative", right:"160px"}}>
                    <ul className={this.state.class} onClick={(event)=>{event.stopPropagation()}}>
                    {this.props.index === 0 ?
                    <li className={this.state.class}><a className="btn-floating grey"><i className="material-icons">expand_less</i></a></li>
                    : <li onClick={this.props.moveUp} className={this.state.class}><a className="btn-floating green"><i index={this.props.index} className="material-icons">expand_less</i></a></li>}
                    {this.props.index === this.props.todoList.items.length-1 ? <li className={this.state.class}><a className="btn-floating grey"><i className="material-icons">expand_more</i></a></li>
                    : <li onClick={this.props.moveDown} className={this.state.class}><a className="btn-floating yellow darken-1"><i index={this.props.index} className="material-icons">expand_more</i></a></li>}
                    <li onClick={this.props.delete} className={this.state.class}><a className="btn-floating red"><i index={this.props.index} className="material-icons">close</i></a></li>
                    </ul>
                    <span><strong>{item.description}</strong></span>
                    </div>
                    <span>Assigned To:<strong>{item.assigned_to}</strong></span></td>
                    <td><strong>{item.due_date}</strong></td>
                    <td><strong>{item.completed ? <span style={{color: 'green'}}>Completed</span> : <span style={{color: 'red'}}>Pending</span>}</strong></td>
                </tr>
                </>
        );
    }
}
export default ItemCard;