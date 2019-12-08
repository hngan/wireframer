import React from 'react';

class WireframeCard extends React.Component {

    render() {
        const { wireframe } = this.props;
        console.log("wireframeCard, wireframe.id: " + wireframe.id);
        return (
            <div className="card z-depth-0 todo-list-link" onClick={()=>{this.props.history.push('/wireframe/' + wireframe.id)}}>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{wireframe.name}</span>
                    <div  wireframeid={wireframe.id} style={{position: "relative",float:'right', bottom: "35px", left: "20px"}}
                    onClick={(event)=>{event.stopPropagation(); this.props.deleteWireframe(wireframe.id)}}>
                        <i className = "modal-trigger small material-icons" >close</i></div>
                </div>
            </div>
        );
    }
}
export default WireframeCard;