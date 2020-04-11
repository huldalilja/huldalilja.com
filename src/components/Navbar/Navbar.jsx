import React, { Component } from 'react';
import "./Navbar.scss"
import Scrollspy from 'react-scrollspy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {

constructor(props) {
    super(props);
    window.onscroll= () => this.scrollFunction()
    this.state = {
      visible: false
    };
  }

scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    this.setState({
      visible: true
    });
  } else {
    this.setState({
      visible: false
    });
  }
}

showNavItems() {

}

render() {
  var classname = "";
  if (this.state.visible) {
    classname = "visible-navbar";
  }
  else {
    classname = "invisible-navbar";
  }
  const classnames = classname;
  return (
    <div id="navbar" className={classnames}>
      <Scrollspy items={ ['HelloDiv', 'ExperienceDiv', 'EducationDiv', 'ProjectsDiv', 'MoreDiv'] } currentClassName="active-link">
        <a className="nav-item" href="#Hello">Hello</a>
        <a className="nav-item" href="#Experience">Experience</a>
        <a className="nav-item" href="#Education">Education</a>
        <a  className="nav-item" href="#Projects">Projects</a>
        <a  className="nav-item" href="#More">More</a>
        <a  onClick={this.showNavItems()} className="nav-item" className="hamburger"><FontAwesomeIcon icon="bars"/></a>
      </Scrollspy>
    </div>

  )
  }
}

export default Navbar;