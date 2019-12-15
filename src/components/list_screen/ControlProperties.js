import React from "react";
import { CompactPicker } from 'react-color';
class ControlProperties extends React.Component{

    state={
    }

    handleChange = (e) => {
        const { target } = e;
        if(target.id === "width" || target.id === "height" || target.id === "borderWidth" || target.id === "borderRadius"){
            if(parseInt(target.value) > 5000)
            target.value = 5000
            else if(parseInt(target.value) < 1)
            target.value = 1
        }
        this.setState(state => ({
            [target.id]: target.value,
        enable: true}))
    }

    updateWireframe = (event)=>{
        event.stopPropagation();
        this.props.updateWireframe(this.state.height, this.state.width, this.state.background, this.state.borderColor, this.state.borderRadius, this.state.borderWidth)
    }
    handleColor = (color) => {
        this.props.selected.color = color.hex;
        this.props.update()
    }
    
    handlewireframeBackground = (color) => {
        this.setState({background: color.hex, enable:true});
    }

    handlewireframeBorder = (color) => {
        this.setState({borderColor: color.hex, enable:true});
    }

    handleBackground = (color) => {
        this.props.selected.background = color.hex;
        this.props.update()
    }

    handleBorderColor = (color) => {
        this.props.selected.borderColor = color.hex;
        this.props.update()
    }
    componentWillReceiveProps(){
        console.log("huh", this.props)
        this.setState({height:this.props.height, width:this.props.width, background:this.props.background, borderColor:this.props.borderColor, borderWidth:this.props.borderWidth, borderRadius:this.props.borderRadius, enable:false})
    }
    render(){
        if(!this.props.selected)
        return(
            <div className="card-panel white" style ={{width: "19%", right:"0px" ,position: "fixed", zIndex:"1"}}>
            <h5>Base Wireframe Properties</h5>
            <br/>
            <div>
            <label className="active" htmlFor="height">Height:</label>
            <input className="active" type="number" name="height" min="1" max="5000" id="height" onChange={this.handleChange} value={this.state.height} style={{width:"70px"}}/>
            <label className="active" htmlFor="width">Width:</label>
            <input className="active" type="number" name="width" id="width" min="1" max="5000" onChange={this.handleChange} value={this.state.width}style={{width:"70px"}} />
            </div>
            <br/>
            <label className="active" htmlFor="backColor">Background Color:</label>
            <br/>
            <CompactPicker color={this.state.background} onChangeComplete={this.handlewireframeBackground}/>
            <br/>
            <br/>
            <label className="active" htmlFor="backColor">Border Color:</label>
            <br/>
            <CompactPicker color={this.state.borderColor} onChangeComplete={this.handlewireframeBorder}/>
            <br/>
            <br/>
                <div className="input-field">
                    <label className="active" htmlFor="borderWidth">Border Width:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="borderWidth" id="borderWidth" onChange={this.handleChange} value={this.state.borderWidth}/>
                </div>
                <div className="input-field">
                    <label className="active" htmlFor="radius">Border Radius:</label>
                    <input maxLength="30" className="active" type="number" min="1" name="radius" id="borderRadius" onChange={this.handleChange} value={this.state.borderRadius}/>
                </div>
            
                {this.state.enable ? <a className="waves-light btn" onClick={this.updateWireframe} >Update Wireframe</a>:<a className="waves-light btn" disabled>Update Wireframe</a>}
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