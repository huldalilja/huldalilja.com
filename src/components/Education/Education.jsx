import React, { Component} from 'react'
import "./Education.scss";
import HRlogo from "../../assets/hr.svg";
import ETHlogo from "../../assets/eth.svg";
import AUlogo from "../../assets/AU.svg";
import Verzlologo from "../../assets/verzlo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    <div className="container left">
                        <div className="content">
                            <a target="_blank" rel="noopener noreferrer" href="https://inf.ethz.ch/studies/master.html">
                                <img className="company-logo" src={ETHlogo} alt="ETH logo"></img>
                            </a>
                            <p>Eidgenössische Technische Hochschule Zürich</p>
                            <p>2020- : 
                                MSc in Computer Science </p>
                            <p className="show-more">Hovera hér</p>
                            <div className="extra-info">Bara eitthvað skemmtilegt</div>
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content">
                            <a target="_blank" rel="noopener noreferrer" href="https://en.ru.is/st/dcs/graduate-study/msc-software-engineering/">
                                <img className="company-logo" src={HRlogo} alt="Reykjavík University logo"></img>
                            </a>
                            <p>Reykjavík University</p>
                            <p>2018-2020: 
                            Part-time MSc in Software Engineering. Not finished.</p>
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content">
                            <a target="_blank" rel="noopener noreferrer" href="https://ingenioer.au.dk/en/education/international-programme/software-engineering/">
                                <img className="company-logo" src={AUlogo} alt="Aarhus University logo"></img>
                            </a>
                            <p>Aarhus University</p>
                            <p>2017-2018: 
                                One semester exchange studies during BSc studies.</p>
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content">
                            <a target="_blank" rel="noopener noreferrer" href="https://en.ru.is/st/dcs/undergraduate-study/bsc-software-engineering/">
                                <img className="company-logo" src={HRlogo} alt="Reykjavík University logo"></img>
                            </a>
                            <p>Reykjavík University</p>
                            <p>2015-2018: 
                                BSc in Software Engineering.</p>
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.verslo.is/english/about-us/">
                                <img className="company-logo" src={Verzlologo} alt="Commercial College of Iceland logo"></img>
                            </a>
                            <p>Commercial College of Iceland</p>
                            <p>2010-2014: 
                                Matriculation exam with focus on math and science.</p>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Education