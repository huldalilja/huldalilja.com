import React, { Component } from 'react';
import "./Navbar.scss"
import Scrollspy from 'react-scrollspy'

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
      <Scrollspy items={ ['Hello', 'Experience', 'Education', 'Other'] } currentClassName="active-link">
        <a href="#Hello">Hello</a>
        <a href="#Experience">Experience</a>
        <a href="#Education">Education</a>
        <a href="#Other">Other</a>
      </Scrollspy>
    </div>

  )
  }
}

export default Navbar;