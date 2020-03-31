import React, { Fragment } from "react";
import "./App.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faHandSpock, faHandPaper, faChevronCircleUp, faAward, faFolder, faBriefcase, faBook} from '@fortawesome/free-solid-svg-icons'
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Timeline from "./components/Timeline/Timeline";
import Experience from "./components/Excperience/Experience"

library.add(faDownload, fab, faHandSpock, faHandPaper, faChevronCircleUp, faAward, faFolder, faBriefcase, faBook);

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Banner/>
        <div className="page">
          <Hello/>
        </div>
        <Experience/>
        <div className="page">
          <Timeline/>
        </div>
    </Fragment>
  );
}

export default App;
