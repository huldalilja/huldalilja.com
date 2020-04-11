import React, { PureComponent, Fragment } from 'react'
import Slideshow from "../Slideshow/Slideshow"
import "./More.scss"

class More extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Fragment>
                <a href="./" className="anchor" id="More">a</a>
                <div id="MoreDiv" className="page">
                    <Slideshow/>
                </div>
            </Fragment>
        )
    }
}

export default More