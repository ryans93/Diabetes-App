import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./css/home.css";

class Home extends Component {

    state = {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <NavBar />
                <div className="container" id="container-home">

                    <h1>Welcome</h1>
                    <h2>About</h2>
                    <p className="paragraph">This app is for calculations regarding intensive insulin therapy for individuals with
                    type 1 diabetes mellitus. This app is not designed for individuals who are type 2 diabetics
                    or those in the honeymoon-phase of type 1. This app is not meant to replace professional medical
                    advice and any changes in medication should be approved by a licensed physician.
                </p>
                    <h2>How to Use</h2>
                    <p className="paragraph">This app performs insulin dosing calculations based on the user's age, body weight, and sensitivity coefficient
                    Additional settings and features can be enabled and customized via the account settings link.
                </p>
                    <h2>Features</h2>
                    <ol id="features">
                        <li>Bolus: input blood sugar and nutrient intake to calculate insulin dosage</li>
                        <li>Basal: displays calculated dosages for long acting insulin (Lantus, Levemir), and insulin pump basal rates</li>
                        <li>Account Settings: update user settings and features to customize insulin dosage calculations</li>
                    </ol>
                    <h2>Upcoming Features</h2>
                    <ol id="upcoming-features">
                        <li>User Authentication: user Authentication with Auth0</li>
                        <li>Record events: record events like meals, snacks, and blood sugar readings</li>
                        <li>Blood Sugar Reports: display recent blood sugar readings via graph or table for specified time period</li>
                        <li>Hemoglobin A1C estimate: average blood sugar readings over 3 months to estimate Hemoglobin A1C</li>
                        <li>Food API: search for common foods via the nutritionix database to import nutrition data</li>
                        <li>Meal Saver: use the food API to save your favorite meals which can be imported for bolus calculation</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Home;