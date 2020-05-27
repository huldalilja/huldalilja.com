import React, { PureComponent } from 'react'
import "./Activities.scss"
import Gallery from "../Gallery/Gallery"


class Activities extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div id="ActivitiesDiv" className="page">
                <a href="./" className="anchor" id="Activities">a</a>
                <Gallery title="Activities" icon="anchor"/>
            </div>
        )
    }
}

export default Activities