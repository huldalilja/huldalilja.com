import React, { Fragment } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Banner/>
      <About/>
      <Timeline/>
    </Fragment>
  );
}

export default App;
