import React from "react";

class ControlProperties extends React.Component{
    render(){
        return(
            <div class="card-panel white" style ={{width: "19%", float:"right"}}>
            <h5>Properties</h5>
            <br/>
            <div className="input-field" >
                    <label className="active" htmlFor="text">Text:</label>
                    <input maxLength="30" className="active" type="text" name="text" id="text" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <label className="active" htmlFor="font">Font Size:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="font" id="font" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label className="active" htmlFor="fColor">Font Color:</label>
                    <input maxLength="30" className="active" type="text" name="fColor" id="fColor" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label className="active" htmlFor="backColor">Background Color:</label>
                    <input className ="active" type="text" id="backColor" onChange={this.handleChange}/>
                </div>
               
                <div className="input-field">
                    <label className="active" htmlFor="bColor">Border Color:</label>
                    <input maxLength="30" className="active" type="text" name="bColor" id="bColor" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="thickness">Border Thickness:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="thickness" id="thickness" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="radius">Border Radius:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="radius" id="radius" onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}

export default ControlProperties;