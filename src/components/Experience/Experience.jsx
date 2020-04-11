import React, { PureComponent, Fragment } from 'react'
import "./Experience.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "../Card/Card"
import HRlogo from "../../assets/hr.svg";
import Mimirlogo from "../../assets/mimir.svg";
import NPAlogo from "../../assets/npa.svg";
import Brokeylogo from "../../assets/brokey.svg";
import Reglalogo from "../../assets/regla.svg";
import Datawelllogo from "../../assets/datawell.png";

class Experience extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Fragment>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-wave-top"><path className="secondary-light-wave" d="M0,64L24,85.3C48,107,96,149,144,165.3C192,181,240,171,288,186.7C336,203,384,245,432,266.7C480,288,528,288,576,288C624,288,672,288,720,266.7C768,245,816,203,864,165.3C912,128,960,96,1008,106.7C1056,117,1104,171,1152,181.3C1200,192,1248,160,1296,165.3C1344,171,1392,213,1416,234.7L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z">
                </path></svg>
                <a href="./"  className="anchor" id="Experience" >a</a>
                <div className="secondary-light-bg" id="ExperienceDiv">
                    <div className="page">
                        <div className="experiences">
                            <div className="title space-under">Experience <FontAwesomeIcon icon="briefcase" className="wave"/></div>
                            <div className="row">
                                <Card logo={Reglalogo} companyName="Regla ehf/ Fakta ehf" companyLink="https://www.regla.is/is/vorur/verkbokhald/" alt="Regla ehf's logo" 
                                    period="Summers of 2017 and 2018, part-time 2018-2020" 
                                    description="Cross-platform and web developer"
                                    folded={true}
                                    back={(<p>Made the company’s first cross-platform mobile app(Xamarin Forms), available on android and ios.
                                            Made a responsive website(ASP.NET) with some of the company’s features as well as new ones that required adopting all layers.</p>)}>
                                </Card>
                                <Card logo={HRlogo} companyName="Reykjavík University" companyLink="http://datawell.ru.is" alt="Reykjavík University's logo" 
                                    period="August 2018 - Spring 2020" 
                                    description="Research assistant, working as a full-stack developer"
                                    backLogo={Datawelllogo}
                                    folded={true}
                                    back={(<p>Creating a sport and health data platform(Datawell) in Django and React in cooperation with the Sports Science Department. 
                                        Gathering consecutive and single measurements in a automatic way and visualizing the data.</p>)}>
                                </Card>
                                <Card logo={Mimirlogo} companyName="Mímir símenntun" companyLink="https://www.mimir.is/is/moya/page/staerdfraedi-menntastodir" alt="Mímir's logo" 
                                    period="Winter 2019-2020" 
                                    description="Math teacher at a high school level"
                                    folded={true}
                                    back={(<p>Teaching math at a high school level for individuals returning to school along with my dad. Part-time remotely due to circumstances.
                                        Inspired me to write a post about <a target="_blank" rel="noopener noreferrer" href="https://lostincode.blog/2020/03/11/studying-math-focus/">studying math</a>.</p>)}>
                                </Card>
                                <Card logo={NPAlogo} companyName="NPA miðstöðin" companyLink="https://www.npa.is" alt="NPA's logo" 
                                    period="2014-2015" 
                                    description="Assistant to a paraplegic person"
                                    folded={true}
                                    back={(<p>Duties included assisting a paraplegic person that is deaf-blind with everyday life. Used tactile signing to communicate with her on a daily basis.</p>)}>
                                </Card>
                                <Card logo={Brokeylogo} companyName="Brokey - Reykjavík Yacht club " companyLink="https://www.brokey.is" alt="Brokey's logo" 
                                    period="Summers 2011-2015" 
                                    description="Dinghy sailing coach" 
                                    folded={true}
                                    back={(<p>Taught beginners to sail in the summer. I held courses at the sailing club alongside two More employees.</p>)}>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <svg className="svg-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="secondary-light-wave" d="M0,96L24,112C48,128,96,160,144,170.7C192,181,240,171,288,154.7C336,139,384,117,432,112C480,107,528,117,576,101.3C624,85,672,43,720,58.7C768,75,816,149,864,181.3C912,213,960,203,1008,176C1056,149,1104,107,1152,101.3C1200,96,1248,128,1296,138.7C1344,149,1392,139,1416,133.3L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z">
                </path>
                </svg>
            </Fragment>
        )
    }
}

export default Experience