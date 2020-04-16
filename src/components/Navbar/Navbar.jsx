import React, { Fragment, Component } from 'react';
import "./Navbar.scss"
import Scrollspy from 'react-scrollspy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {

constructor(props) {
    super(props);
    window.onscroll= () => this.scrollFunction()
    this.state = {
      visible: false,
      responsiveBarVisible: "",
      turnHamburger: "",
      hamburgerIcon: "bars",
      topIconVisible: false
    };
  }

scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    this.setState({
      visible: true,
      topIconVisible: true
    });
  } else {
    this.setState({
      visible: false,
      topIconVisible: false
    });
  }
}

topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

showNavItems = () => {
  if (this.state.responsiveBarVisible === "") {
    this.setState({
      responsiveBarVisible: " responsive-visible",
      turnHamburger: "turn-right",
      hamburgerIcon: "times"
    })
  }
  else {
    this.setState({
      responsiveBarVisible: "",
      turnHamburger: "turn-left",
      hamburgerIcon: "bars"
    })
  }
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
  const turnHamburger = this.state.turnHamburger;
  const hamburgerIcon = this.state.hamburgerIcon;
  let iconClass = ""
  if (!this.state.topIconVisible) {
      iconClass = "hidden-icon"
  }
  return (
      <Fragment>
        <div id="navbar" className={classnames}>
          <Scrollspy items={ ['NothingDiv', 'HelloDiv', 'ExperienceDiv', 'EducationDiv', 'ProjectsDiv', 'ActivitiesDiv'] } currentClassName="active-link">
            <a  onClick={this.showNavItems} className="hamburger"><FontAwesomeIcon className={turnHamburger} icon={hamburgerIcon}/></a>
            <a className={"nav-item" + this.state.responsiveBarVisible} href="#Hello">Hello</a>
            <a className={"nav-item" + this.state.responsiveBarVisible} href="#Experience">Experience</a>
            <a className={"nav-item" + this.state.responsiveBarVisible} href="#Education">Education</a>
            <a className={"nav-item" + this.state.responsiveBarVisible} href="#Projects">Projects</a>
            <a className={"nav-item" + this.state.responsiveBarVisible} href="#Activities">Activities</a>
          </Scrollspy>
        </div>
        <FontAwesomeIcon onClick={this.topFunction} className={"go-to-top-icon " + iconClass}  icon="arrow-circle-up"/>
      </Fragment>
    )
  }
}

export default Navbar;