import React from "react";

class ControlProperties extends React.Component{
    render(){
        console.log(this.props)
        if(!this.props.selected)
        return(
            <div className="card-panel white" style ={{width: "19%", right:"0px" ,position: "fixed", zIndex:"1"}}>
            <h5>Base Wireframe Properties</h5>
            <br/>
            <div>
            <label className="active" htmlFor="height">Height:</label>
            <input className="active" type="number" name="height" min="1" max="5000" id="height" onChange={this.props.handleChange} value={this.props.height} style={{width:"70px"}}/>
            <label className="active" htmlFor="width">Width:</label>
            <input className="active" type="number" name="width" id="width" min="1" max="5000" onChange={this.props.handleChange} value={this.props.width}style={{width:"70px"}} />
            </div>
            <br/>
                <div className="input-field">
                    <label className="active" htmlFor="backColor">Background Color:</label>
                    <input className ="active" type="text" id="backColor" onChange={this.props.handleChange}/>
                </div>
               
                <div className="input-field">
                    <label className="active" htmlFor="bColor">Border Color:</label>
                    <input maxLength="30" className="active" type="text" name="bColor" id="bColor" onChange={this.props.handleChange} />
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="thickness">Border Thickness:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="thickness" id="thickness" onChange={this.props.handleChange} />
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="radius">Border Radius:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="radius" id="radius" onChange={this.props.handleChange} />
                </div>
            
                <a className="waves-light btn" disabled>Update Wireframe</a>
            </div> 
        )
        return(
            <div className="card-panel white" style ={{width: "19%", right:"0px" ,position: "fixed", zIndex:"1"}}>
            <h5>Properties</h5>
            <br/>
            <div className="input-field" >
                    <label className="active" htmlFor="text">Text:</label>
                    <input maxLength="30" className="active" type="text" name="text" id="text" onChange={this.props.handleItemChange} value={this.props.selected.text}/>
                </div>

                <div className="input-field">
                    <label className="active" htmlFor="font">Font Size:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="font" id="font" onChange={this.props.handleItemChange} value={this.props.selected.font}/>
                </div>

                <div className="input-field">
                    <label className="active" htmlFor="fColor">Font Color:</label>
                    <input maxLength="30" className="active" type="text" name="fColor" id="fColor" onChange={this.props.handleItemChange}/>
                </div>

                <div className="input-field">
                    <label className="active" htmlFor="backColor">Background Color:</label>
                    <input className ="active" type="text" id="backColor" onChange={this.props.handleItemChange}/>
                </div>
               
                <div className="input-field">
                    <label className="active" htmlFor="bColor">Border Color:</label>
                    <input maxLength="30" className="active" type="text" name="bColor" id="bColor" onChange={this.props.handleItemChange} />
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="thickness">Border Thickness:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="thickness" id="thickness" onChange={this.props.handleItemChange} value={this.props.selected.thickness}/>
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="radius">Border Radius:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="radius" id="radius" onChange={this.props.handleItemChange} value={this.props.selected.radius}/>
                </div>
            </div>
        )
    }
}

export default ControlProperties;