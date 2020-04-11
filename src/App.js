import React, { Fragment } from "react";
import "./App.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faHammer, faDownload, faHandSpock, faHandPaper, faChevronCircleUp, faAward, faFolder, faBriefcase, faBook} from '@fortawesome/free-solid-svg-icons'
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"
import More from "./components/More/More"

library.add(faBars, faHammer, faDownload, fab, faHandSpock, faHandPaper, faChevronCircleUp, faAward, faFolder, faBriefcase, faBook);

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Banner/>
        <Hello/>
        <Experience/>
        <Education/>
        <Projects/>
        <More/>
        <Footer/>
    </Fragment>
  );
}

export default App;
