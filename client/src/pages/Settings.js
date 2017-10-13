import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CountToggle from "../components/countToggle";
import HyperToggle from "../components/hyperToggle";
import $ from "jquery";
import "./css/settings.css";


class Settings extends Component {

    state = {
        weight: "",
        age: "",
        sensCo: ".37",
        ic: "8",
        ip: "8",
        bsRaise: "8",
        cf: "8",
        lowLimit: "70",
        highLimit: "180",
        targetBG: "100",
        exerCo: "1",
        errorMargin: "10",
        countProtein: "false",
        hyperAdj: "false",
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    switchCount = switched => {
        if (switched.switched){
        this.setState({countProtein: "true"});
        }
        else {
            this.setState({countProtein: "false"});
        }
    }

    switchHyper = switched => {
        console.log(this.state.hyperAdj);
        if (switched.switched){
            this.setState({hyperAdj: "true"});
            }
            else {
                this.setState({hyperAdj: "false"});
            }
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="container" id="container-settings">
                    <h1>Account Settings</h1>
                    <form>
                        <div className="row">
                            <label>Weight</label>
                        </div>
                        <input
                            value={this.state.weight}
                            onChange={this.handleInputChange}
                            name="weight"
                            id="settings-input"
                        />
                        <div className="row">
                            <label>Age</label>
                        </div>
                        <input
                            value={this.state.age}
                            onChange={this.handleInputChange}
                            name="age"
                            id="settings-input"
                        />
                        <div className="row">
                            <label>Insulin Sensitivity Coefficient</label>
                            <h5>Enter estimate based on level of physical activity</h5>
                            <h5>Sedentary: .27 - .55</h5>
                            <h5>Active: .23 - .46</h5>
                            <h5>Very Active: .18 - .36</h5>
                        </div>
                        <div id="sliderVal">{this.state.sensCo}</div>
                        <div id="slidecontainer">
                            <input
                                type="range"
                                min=".18"
                                max=".55"
                                defaultValue=".37"
                                step=".01"
                                className="slider"
                                id="sensCoRange"
                                onInput={function () {
                                    var slider = $("#sensCoRange");
                                    var output = $("#sliderVal");
                                    console.log(slider.val());
                                    $("#sliderVal").html(slider.val());
                                }}
                                value={this.state.sensCo}
                                onChange={this.handleInputChange}
                                name="sensCo"
                            />

                        </div>
                        <div className="row">
                            <label>Insulin:Carb Ratio</label>
                        </div>
                        <input
                            value={this.state.ic}
                            onChange={this.handleInputChange}
                            name="ic"
                            id="settings-input"
                        />
                        <div className="row">
                            <label>Insulin:Protein Ratio</label>
                        </div>
                        <input
                            value={this.state.ip}
                            onChange={this.handleInputChange}
                            name="ip"
                            id="settings-input"
                        />
                        <div className="row">
                            <label>Glucose Raise per Carbohydrate </label>
                        </div>
                        <input
                            value={this.state.bsRaise}
                            onChange={this.handleInputChange}
                            name="bsRaise"
                            id="settings-input"
                        />
                        <div className="row">
                            <label>Correction Factor</label>
                        </div>
                        <input
                            value={this.state.cf}
                            onChange={this.handleInputChange}
                            name="cf"
                            id="settings-input"
                        />
                        <div className="row">
                            <label>Low Limit</label>
                        </div>
                        <div id="lowLimitSliderVal">{this.state.lowLimit}</div>
                        <div id="slidecontainer">
                            <input
                                type="range"
                                min="60"
                                max="120"
                                step="1"
                                className="slider"
                                id="lowLimitRange"
                                onInput={function () {
                                    var lowLimitSlider = $("#lowLimitRange");
                                    var lowLimitOutput = $("#lowLimitSliderVal");
                                    $("#lowLimitSliderVal").html(lowLimitSlider.val());
                                }}
                                value={this.state.lowLimit}
                                onChange={this.handleInputChange}
                                name="lowLimit"
                            />

                        </div>
                        <div className="row">
                            <label>High Limit</label>
                        </div>
                        <div id="highLimitSliderVal">{this.state.highLimit}</div>
                        <div id="slidecontainer">
                            <input
                                type="range"
                                min="100"
                                max="300"
                                step="1"
                                className="slider"
                                id="highLimitRange"
                                onInput={function () {
                                    var highLimitSlider = $("#highLimitRange");
                                    var highLimitOutput = $("#highLimitSliderVal");
                                    $("#highLimitSliderVal").html(highLimitSlider.val());
                                }}
                                value={this.state.highLimit}
                                onChange={this.handleInputChange}
                                name="highLimit"
                            />

                        </div>
                        <div className="row">
                            <label>Target Blood Sugar</label>
                        </div>
                        <div id="targetBGSliderVal">{this.state.targetBG}</div>
                        <div id="slidecontainer">
                            <input
                                type="range"
                                min="80"
                                max="200"
                                step="1"
                                className="slider"
                                id="targetBGRange"
                                onInput={function () {
                                    var targetBGSlider = $("#targetBGRange");
                                    var ltargetBGOutput = $("#targetBGSliderVal");
                                    $("#targetBGSliderVal").html(targetBGSlider.val());
                                }}
                                value={this.state.targetBG}
                                onChange={this.handleInputChange}
                                name="targetBG"
                            />

                        </div>
                        <div className="row">
                            <label>Exercise Coefficient</label>
                        </div>
                        <div id="exerCoSliderVal">{this.state.exerCo}</div>
                        <div id="slidecontainer">
                            <input
                                type="range"
                                min=".33"
                                max="1.25"
                                step=".01"
                                className="slider"
                                id="exerCoRange"
                                onInput={function () {
                                    var exerCoSlider = $("#exerCoRange");
                                    var exerCoOutput = $("#exerCoSliderVal");
                                    $("#exerCoSliderVal").html(exerCoSlider.val());
                                }}
                                value={this.state.exerCo}
                                onChange={this.handleInputChange}
                                name="exerCo"
                            />

                        </div>
                        <div className="row">
                            <label>Error Margin</label>
                        </div>
                        <div id="errorMarginSliderVal">{this.state.errorMargin}</div>
                        <div id="slidecontainer">
                            <input
                                type="range"
                                min="0"
                                max="25"
                                step="1"
                                className="slider"
                                id="errorMarginRange"
                                onInput={function () {
                                    var errorMarginSlider = $("#errorMarginRange");
                                    var errorMarginOutput = $("#errorMarginSliderVal");
                                    $("#errorMarginSliderVal").html(errorMarginSlider.val());
                                }}
                                value={this.state.errorMargin}
                                onChange={this.handleInputChange}
                                name="errorMargin"
                            />

                        </div>
                        <div className="row">
                            <label>Count Protein</label>
                        </div>
                       <CountToggle switched={this.state.countProtein == "true" ? true : false} getSwitched={this.switchCount}/>
                        <div className="row">
                            <label>Hyperglycemia Adjustment</label>
                        </div>
                        <HyperToggle switched={this.state.hyperAdj == "true" ? true : false} getSwitched={this.switchHyper}/>

                        <div className="row">
                            <div id="btnContainer">
                                <button
                                    className="btn btn-success"
                                    id="btn-createAccount"
                                    disabled={!(this.state.weight) || !(this.state.age) || !(this.state.sensCo) || !(this.state.ic) || !(this.state.ip) || !(this.state.bsRaise) || !(this.state.cf) || !(this.state.lowLimit) || !(this.state.highLimit) || !(this.state.targetBG) || !(this.state.exerCo) || !(this.state.errorMargin) || !(this.state.countProtein) || !(this.state.hyperAdj)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Edit
                            </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default Settings;