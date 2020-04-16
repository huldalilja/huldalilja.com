import React, { Component} from 'react'
import "./Education.scss";
import HRlogo from "../../assets/hr.svg";
import AUlogo from "../../assets/AU.svg";
import Verzlologo from "../../assets/verzlo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimelineCard from "../TimelineCard/TimelineCard"

class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="page" id="EducationDiv">
                <a href="./" className="anchor" id="Education">a</a>
                <div className="timeline-title title">Education<br/><FontAwesomeIcon icon="book" /></div>
                <div className="timeline">
                    {/* 
                        <TimelineCard direction="left"
                            logoLink="https://inf.ethz.ch/studies/master.html"
                            logo={ETHlogo}
                            title="Eidgenössische Technische Hochschule Zürich"
                            period = "2020- : MSc in Computer Science" 
                        />
                    */}
                    <TimelineCard direction="left"
                        logoLink="https://en.ru.is/st/dcs/graduate-study/msc-software-engineering/"
                        logo={HRlogo}
                        title="Reykjavík University"
                        period = "2018-2020: Part-time MSc in Software Engineering. Not finished." 
                        extraInfo= "Part-time studies while working as a research assistant."
                    />
                    <TimelineCard direction="right"
                        logoLink="https://ingenioer.au.dk/en/education/international-programme/software-engineering/"
                        logo={AUlogo}
                        altLogo="Aarhus University logo"
                        title="Aarhus University"
                        period = "2017-2018: One semester exchange studies during BSc studies." 
                        extraInfo= "International programme for Software Engineering."
                    />
                    <TimelineCard direction="left"
                        logoLink="https://en.ru.is/st/dcs/undergraduate-study/bsc-software-engineering/"
                        logo={HRlogo}
                        title="Reykjavík University"
                        period = "2015-2018: BSc in Software Engineering." 
                        extraInfo= "New-students’ scholarship when I started. After the second and fourth semesters I was a dean's list recipient. Teacher Assistant in Calculus II. Helped students with homework assignments and graded the course."
                    />
                    <TimelineCard direction="right"
                        logoLink="https://www.verslo.is/english/about-us/"
                        logo={Verzlologo}
                        title="Commercial College of Iceland"
                        period = "2010-2014: Matriculation exam with focus on math and science." 
                        extraInfo= "Focus on math and science."
                    />
                </div>
            </div> 
        )
    }
}

export default Education