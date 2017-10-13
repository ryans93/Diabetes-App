import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

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
                    <NavBar/>

                    <div className="container">


                        </div>
                </div>
            );
        }
    }
    
    export default Home;