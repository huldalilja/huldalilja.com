import React, { PureComponent, Fragment } from 'react'
import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Fragment>
                <svg className="svg-wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path className="primary-light-wave" d="M0,96L30,90.7C60,85,120,75,180,112C240,149,300,235,360,266.7C420,299,480,277,540,245.3C600,213,660,171,720,154.7C780,139,840,149,900,144C960,139,1020,117,1080,128C1140,139,1200,181,1260,186.7C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
                <div className="footer">
                    <a href="https://www.linkedin.com/in/huldalilja" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                    </a>
                    <a href="https://www.instagram.com/huldalilja" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                        <FontAwesomeIcon icon={['fab', 'instagram']}/>
                    </a>
                    <a href="https://github.com/huldalilja/huldalilja.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
                        <FontAwesomeIcon icon={['fab', 'github']}/>
                    </a>
                    <a href = "mailto:hulda@huldalilja.com?subject=What's up?&body=Hello!" target="_blank" rel="noopener noreferrer" className="social-icon envelope">
                        <FontAwesomeIcon icon="envelope"/>
                    </a>
                    <p>Made by: Hulda Lilja Hannesdóttir</p>
                </div>
            </Fragment>
        )
    }
}

export default Footer