import React, { Component} from 'react';
import "./Hello.scss";
import profile from "../../assets/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import cv from '../../assets/Hulda_Lilja_Hannesdóttir_CV.pdf';
import cvISL from '../../assets/Hulda_Lilja_Hannesdóttir_Ferilskrá.pdf';

class Hello extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    download() {
        // fake server request, getting the file url as response
        setTimeout(() => {
            const response = {
            file:  cv
            };
            window.open(response.file);
        }, 100);
    }

    downloadISL() {
        // fake server request, getting the file url as response
        setTimeout(() => {
            const response = {
            file:  cvISL
            };
            window.open(response.file);
        }, 100);
    }

    render() {
        return (
            <div className="page" id="HelloDiv">
                <a href="./" className="anchor" id="Hello">a</a>
                <div className="testimonial">
                    <div className="title">Hello <FontAwesomeIcon icon="hand-spock" className="wave"/></div>
                    <img className="profile" src={profile} alt="Avatar"/>
                    <p>My name is Hulda Lilja Hannesdóttir and I am a Computer Scientist with BSc in Software Engineering, 
                        currently doing my MSc in Computer Science.
                    <br/> Pronouns: she/her</p>
                </div>
                <Button onClick={this.download}  text="Download CV - EN" icon="download" className="download-button"></Button>
                <br/>
                <Button onClick={this.downloadISL}  text="Sækja ferilskrá - ISL" icon="download" className="download-button"></Button>
            </div> 
        );
    }
}

export default Hello