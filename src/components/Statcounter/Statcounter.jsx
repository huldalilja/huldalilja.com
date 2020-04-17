import React from 'react'

function Statcounter() {
    return (
        <div id="statcounter_image" style={{display: "none"}}><a
            title="Web Analytics Made Easy - StatCounter"
            href="https://statcounter.com/"><img
            src={process.env.REACT_APP_STATCOUNTER_URL}
            alt="Web Analytics Made Easy - StatCounter"  /></a>
        </div>
    )
}

export default Statcounter
