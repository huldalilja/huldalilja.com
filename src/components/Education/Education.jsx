import React, { Component} from 'react'
import "./Education.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimelineCard from "./TimelineCard/TimelineCard"
import schools from "./Schools"

class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.schools = schools;
    }

    render() {
        return (
            <div className="page" id="EducationDiv">
                <a href="./" className="anchor" id="Education">a</a>
                <div className="timeline-title title">Education<br/><FontAwesomeIcon icon="book" /></div>
                <div className="timeline">
                    {this.schools.map((item, idx) => {
                        let direction = "right";
                        if (idx % 2 === 0) {
                            direction = "left"
                        }
                        return (
                            <TimelineCard key={idx}
                                direction={direction}
                                logoLink={item.logoLink}
                                logo={item.logo}
                                title={item.title}
                                period = {item.period}
                                extraInfo= {item.extraInfo}
                            />
                        )
                    })}
                </div>
            </div> 
        )
    }
}

export default Education