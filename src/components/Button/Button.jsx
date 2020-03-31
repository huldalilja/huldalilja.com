import React, { PureComponent } from 'react';
import "./Button.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Button extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <button className="button" onClick={this.props.onClick}><FontAwesomeIcon icon={this.props.icon}/> {this.props.text}</button>
        )
    }
}

export default Button