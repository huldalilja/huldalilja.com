import React, { Component, Fragment } from "react";
import "./Banner.scss";
import logo from "../../assets/HLHorange.svg";

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <Fragment>
        <div className="bg">
        <div className='circle'>
          <img className="logo" src={logo} alt="logo"></img>
          <div className="title">Hulda Lilja<br/>Hannesdóttir</div>
        </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-wave">
          <path className="light-primary-wave"
            fill="#ffecb3"
            d="M0,224L21.8,224C43.6,224,87,224,131,202.7C174.5,181,218,139,262,112C305.5,85,349,75,393,90.7C436.4,107,480,149,524,138.7C567.3,128,611,64,655,74.7C698.2,85,742,171,785,192C829.1,213,873,171,916,138.7C960,107,1004,85,1047,85.3C1090.9,85,1135,107,1178,149.3C1221.8,192,1265,256,1309,282.7C1352.7,309,1396,299,1418,293.3L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </Fragment>
    );
  }
}

export default Banner;
