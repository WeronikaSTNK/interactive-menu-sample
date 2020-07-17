import React, {useState} from "react";

import About from "./layouts/About";
import Header from "./layouts/Header";
import Navigation from './layouts/Navigation'
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./images/logoExample.png";
import { projects } from "./data";

export const App = () => {
const [openProjects, setOpenProjects] = useState(false);

const toggleProjects = () => {
  setOpenProjects(!openProjects)
}

  return (
    <>
      <Router>
        <Header logo={logo} />
        <Navigation projects = {projects} toggleProjects={toggleProjects} openProjects={openProjects}/>
        <About />
      </Router>
    </>
  );
};

export default App;
