import React, { PureComponent } from 'react';
import "./TimelineCard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TimelineCard extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showingMore: false,
        }
    }

    showMore= () => {
        this.setState({
            showingMore: !this.state.showingMore
        })
    }

    render() {
        let rotateClass = "";
        let extraInfoClass= "";
        if (this.state.showingMore) {
            rotateClass = "rotate-right";
            extraInfoClass = "show-extra-info"
        }
        else {
            rotateClass = "rotate-left";
            extraInfoClass = "hide-extra-info"
        }
        return (
            <div className={"container " + this.props.direction}>
                <div className="content">
                    <a target="_blank" rel="noopener noreferrer" href={this.props.logoLink}>
                        {/* Writing width and height here to prevent reflow from lazy-loaded images */}
                        <img className="company-logo" src={this.props.logo} height="70px" alt={this.props.title + " logo"}></img>
                    </a>
                    <p>{this.props.title}</p>
                    <p className="last-p">{this.props.period}</p>
                    <a onClick={this.showMore} className="show-more"><FontAwesomeIcon className={rotateClass} icon="chevron-circle-down"/></a>
                    <div className={extraInfoClass}>{this.props.extraInfo}</div>
                </div>
            </div>
        )
    }
}

export default TimelineCard