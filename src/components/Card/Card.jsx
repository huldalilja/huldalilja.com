import React, { PureComponent } from 'react'
import "./Card.scss"

class Card extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        var backLogo = this.props.backLogo
        if (backLogo == null) {
            backLogo = this.props.logo;
        }
        var foldedClassName = "";
        if (this.props.folded) {
            foldedClassName = " foldbr";
        }
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className={"flip-card-front" + foldedClassName}>
                        <div className="card-header">
                            {/* Writing width and height here to prevent reflow from lazy-loaded images */}
                            <img className="company-logo" src={this.props.logo} height="70px" alt={this.props.companyName + " logo"}></img>
                            <p>{this.props.companyName}</p>
                        </div>
                        <div className="card-content">
                            <p>{this.props.period}<br></br>{this.props.description}</p>
                        </div>
                    </div>
                    <div className={"flip-card-back"}>
                        <a target="_blank" rel="noopener noreferrer" href={this.props.companyLink}>
                            {/* Skipping because img made slow loading in Google Chrome when flipped
                            <img className="company-logo" src={backLogo} height="70px" alt={this.props.alt}></img>*/}
                            <p>{this.props.companyName}</p>
                        </a>
                        {this.props.back}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card