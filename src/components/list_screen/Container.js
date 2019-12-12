import React from 'react';
import Draggable from 'react-draggable';

class Container extends React.Component{
    render(){
        return(
            <Draggable>
            <div style={{background:"white", height:"100px",width:"100px", border:"1px solid black"}}>
                
            </div>
            </Draggable>
        )
    }
}

export default Container