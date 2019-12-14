import React from "react";
import { CompactPicker } from 'react-color';
class ControlProperties extends React.Component{

    handleColor = (color) => {
        this.props.selected.color = color.hex;
        this.props.update()
    }
    
    handleBackground = (color) => {
        this.props.selected.background = color.hex;
        this.props.update()
    }

    handleBorderColor = (color) => {
        this.props.selected.borderColor = color.hex;
        this.props.update()
    }

    render(){
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
            <label className="active" htmlFor="backColor">Background Color:</label>
            <br/>
            <CompactPicker />
            <br/>
            <br/>
            <label className="active" htmlFor="backColor">Border Color:</label>
            <br/>
            <CompactPicker />
            <br/>
            <br/>
                <div className="input-field">
                    <label className="active" htmlFor="borderWidth">Border Width:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="borderWidth" id="borderWidth" onChange={this.props.handleChange} />
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="radius">Border Radius:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="radius" id="radius" onChange={this.props.handleChange} />
                </div>
            
                <a className="waves-light btn" disabled>Update Wireframe</a>
            </div> 
        )



        else if(this.props.selected.type === "container")
        return(
             <div className="card-panel white" style ={{width: "19%", right:"0px" ,position: "fixed", zIndex:"1"}}>
            <h5>Properties</h5>
            <br/>
                    <label className="active" htmlFor="backColor">Background Color:</label>
                    <br/>
                    <CompactPicker color = {this.props.selected.background} onChangeComplete={this.handleBackground}/>
                    <br/>
                    <br/>
                    <label className="active" htmlFor="bColor">Border Color:</label>
                    <br/>
                    <CompactPicker color = {this.props.selected.borderColor} onChangeComplete={this.handleBorderColor}/>
                    <br/>
                    <br/>
                <div className="input-field">
                    <label className="active" htmlFor="borderWidth">Border Width:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="borderWidth" id="borderWidth" onChange={this.props.handleItemChange} value={this.props.selected.borderWidth}/>
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="radius">Border Radius:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="radius" id="radius" onChange={this.props.handleItemChange} value={this.props.selected.radius}/>
                </div>
            </div>
        )


        return(
            <div className="card-panel white" style ={{width: "19%", right:"0px" ,position: "fixed", zIndex:"1", paddingTop:"0px"}}>
            <h6><strong>Properties</strong></h6>
            <div className="input-field" >
                    <label className="active" htmlFor="text">Text:</label>
                    <input maxLength="30" className="active" type="text" name="text" id="text" onChange={this.props.handleItemChange} value={this.props.selected.text}/>
                </div>

                <div className="input-field">
                    <label className="active" htmlFor="font">Font Size:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="font" id="font" onChange={this.props.handleItemChange} value={this.props.selected.font}/>
                </div>

                    <label className="active" htmlFor="backColor">Font Color:</label>
                    <br/>
                    <CompactPicker color = {this.props.selected.color} onChangeComplete={this.handleColor}/>
                    <br/>
                    <br/>

                <label className="active" htmlFor="backColor">Background Color:</label>
                <br/>
                <CompactPicker color = {this.props.selected.background} onChangeComplete={this.handleBackground}/>
                <br/>
                <br/>
               
                <label className="active" htmlFor="backColor">Border Color:</label>
                <br/>
                <CompactPicker color = {this.props.selected.borderColor} onChangeComplete={this.handleBorderColor}/>
                <br/>
                <br/>
                <div className="input-field">
                    <label className="active" htmlFor="borderWidth">Border Width:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="borderWidth" id="borderWidth" onChange={this.props.handleItemChange} value={this.props.selected.borderWidth}/>
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