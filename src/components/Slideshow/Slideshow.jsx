import React, {Fragment, PureComponent } from 'react'
import "./Slideshow.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from "../../assets/sailing/img1.jpg"

class Slideshow extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Fragment>
                <div className="slideshow">
                    <div className="title">More</div>
                    <img className="slideshow-img" src={img1}></img>
                </div>
                
            </Fragment> 
        )
    }
}

export default Slideshow