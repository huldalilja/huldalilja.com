import React, { Component} from 'react';
import "./Hello.scss";
import profile from "../../assets/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import cv from '../../assets/Hulda_Lilja_Hannesdóttir_CV.pdf';

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

    render() {
        return (
            <div className="page" id="HelloDiv">
                <a href="./" className="anchor" id="Hello">a</a>
                <div className="testimonial">
                    <div className="title">Hello <FontAwesomeIcon icon="hand-spock" className="wave"/></div>
                    <img className="profile" src={profile} alt="Avatar"/>
                    <p>My name is Hulda Lilja Hannesdóttir and I am a Computer Scientist and a Software Engineering student. <br/>
                        I also work as a research assistant at Reykjavík University.</p>
                </div>
                <Button onClick={this.download}  text="Download CV" icon="download" className="download-button"></Button>
            </div> 
        );
    }
}

export default Hello