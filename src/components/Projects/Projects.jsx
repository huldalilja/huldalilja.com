import React, { PureComponent, Fragment } from 'react'
import "./Projects.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "../Card/Card"
import LostInCodelogo from "../../assets/lostincode.svg";
import Aldalogo from "../../assets/aldagradient.svg"
import SheepOfIcelandlogo from "../../assets/sheepoficeland.png"
import HLHlogo from "../../assets/HLH.svg"
import Regiftlogo from "../../assets/regift.svg"
import BoatsFilled from "../../assets/boatsfilled.svg";

class Projects extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
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
                                {/*<Card logo={Regiftlogo} companyName="Regift" companyLink="https://regift.is" alt="Regift's logo" 
                                    period="Started spring 2020" 
                                    description="Send some virtual hugs"
                                    back={(<p>Project made during Covid-19 outbreak but the idea had been in my head for a while.</p>)}>
                                </Card>
                                <Card logo={Aldalogo} companyName="Alda" companyLink="https://alda.surf" alt="Alda's logo" 
                                    period="Started winter 2019" 
                                    description="Sailing related project"
                                    back={(<p>As a sailor I have a lot of training notes from many different places and different coaches. I wanted to create a software to store and organize all of them. Then one of my coach also made a request of a feature for racing.</p>)}>
                                </Card> */}
                                <Card logo={LostInCodelogo} companyName="LostInCode.blog" companyLink="https://lostincode.blog"
                                    folded={true}
                                    period="Started summer 2017" 
                                    description="Computer Science's related blog I write with two of my friends"
                                    back={(<p>Three computer scientists graduates from Reykjavík University in Iceland writing a blog about subjects and topics that they find interesting in the field of Computer Science and related areas. <a target="_blank" rel="noopener noreferrer" href="https://lostincode.blog">Read on</a>.</p>)}>
                                </Card>
                                <Card logo={HLHlogo} companyName="huldalilja.com" companyLink="https://huldalilja.com/huldaliljaold"
                                    folded={true}
                                    period="Made in 2018" 
                                    description="My old website"
                                    back={(<p>My old website. Stopped updating in spring 2020. I made a <a target="_blank" rel="noopener noreferrer" href="https://lostincode.blog/2018/10/23/online-cv/">blog post</a> with some notes on how I made it.</p>)}>
                                </Card>
                                <Card logo={SheepOfIcelandlogo} companyName="Sheep Of Iceland" companyLink="https://huldalilja.com/sheepoficeland"
                                    folded={true}
                                    period="Made in the spring 2017" 
                                    description="Game where you collect sheep in Iceland"
                                    back={(<p>Unity game made in a three week course at Reykjavík University along two others. The player is a shepherd girl that travels around Iceland collecting her lost sheep.</p>)}>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<svg className="svg-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="secondary-light-wave" d="M0,256L26.7,240C53.3,224,107,192,160,192C213.3,192,267,224,320,229.3C373.3,235,427,213,480,186.7C533.3,160,587,128,640,128C693.3,128,747,160,800,186.7C853.3,213,907,235,960,250.7C1013.3,267,1067,277,1120,256C1173.3,235,1227,181,1280,186.7C1333.3,192,1387,256,1413,288L1440,320L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z">
                </path>
                </svg>*/}
                <div className="secondary-light-bg" height="60px"></div>
                <img src={BoatsFilled} width="100%" alt="" className="filled-boats space-under"></img>
            </Fragment>
        )
    }
}

export default Projects 