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
                            <img className="company-logo" src={this.props.logo} alt={this.props.alt}></img>
                            <p>{this.props.companyName}</p>
                        </div>
                        <div className="card-content">
                            <p>{this.props.period}<br></br>{this.props.description}</p>
                        </div>
                    </div>
                    <div className={"flip-card-back"}>
                        <a target="_blank" rel="noopener noreferrer" href={this.props.companyLink}>
                            <img className="company-logo" src={backLogo} alt={this.props.alt}></img>
                        </a>
                        {this.props.back}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card