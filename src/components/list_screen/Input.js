import React from 'react';
import Draggable from 'react-draggable'

class Input extends React.Component{
    render(){
        return(
            <Draggable>
           <div style={{width:"300px"}}>
             <input maxLength="100" type="text" readOnly/>
            </div>
            </Draggable>
        )
    }
}

export default Input