import React, { Fragment } from "react";
import "./App.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faAnchor, faArrowCircleUp, faTimes, faBars, faHammer, faDownload, faHandSpock, faHandPaper, faChevronCircleUp, faChevronCircleDown, faAward, faFolder, faBriefcase, faBook} from '@fortawesome/free-solid-svg-icons'
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"
import Activities from "./components/Activities/Activities"
import Statcounter from "./components/Statcounter/Statcounter"

library.add(faEnvelope, faAnchor, faArrowCircleUp, faChevronCircleDown, faChevronCircleUp, faTimes, faBars, faHammer, faDownload, fab, faHandSpock, faHandPaper, faAward, faFolder, faBriefcase, faBook);

function App() {
  console.log("Hi there! You can also just have a look at the source code on GitHub: github.com/huldalilja/huldalilja.com or send me a line to huldalilja@huldalilja.com!")
  return (
    <Fragment>
      <Navbar/>
      <Banner/>
      <Hello/>
      <Experience/>
      <Education/>
      <Projects/>
      <Activities/>
      <Footer/>
      <Statcounter/>
    </Fragment>
  );
}

export default App;
