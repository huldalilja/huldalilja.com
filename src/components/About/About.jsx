import React, { Component } from 'react';
import "./About.css";
import profile from "../../assets/profile.png";

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="testimonial">
                <img className="profile" src={profile} alt="Avatar"/>
                <p><span>Hulda Lilja Hannesdóttir</span>Computer Scientist.</p>
                <p>BSc in Software Engingineering, working as a developer, research assistant and a math teacher.</p>
            </div>
        );
    }
}

export default About