import React, { PureComponent, Fragment } from 'react'
import "./Projects.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "../Card/Card"
import BoatsFilled from "../../assets/boatsfilled.svg";
import repos from "./repos.js"

class Projects extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        this.repos = repos;
    }

    render() {
        return (
            <Fragment>
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-wave-top" viewBox="0 0 1440 320"><path className="secondary-light-wave" d="M0,128L26.7,138.7C53.3,149,107,171,160,186.7C213.3,203,267,213,320,234.7C373.3,256,427,288,480,282.7C533.3,277,587,235,640,224C693.3,213,747,235,800,240C853.3,245,907,235,960,202.7C1013.3,171,1067,117,1120,117.3C1173.3,117,1227,171,1280,181.3C1333.3,192,1387,160,1413,144L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                <a href="./"  className="anchor" id="Projects" ></a>
                <div className="secondary-light-bg" id="ProjectsDiv">
                    <div className="page">
                        <div className="projects">
                            <div className="title space-under">Projects <FontAwesomeIcon icon="hammer"/></div>
                            <div className="row">
                                {this.repos.map((item, idx) => {
                                    return (
                                        <Card key={idx}
                                            logo={item.logo} 
                                            companyName={item.companyName}
                                            companyLink={item.companyLink} 
                                            period={item.period} 
                                            description={item.description}
                                            back={item.back} 
                                            folded={true}>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondary-light-bg" height="60px"></div>
                <img src={BoatsFilled} width="100%" alt="" className="filled-boats space-under"></img>
            </Fragment>
        )
    }
}

export default Projects 