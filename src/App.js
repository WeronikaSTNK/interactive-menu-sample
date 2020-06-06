import React, {useState} from "react";
import About from "./layouts/About";
import Header from "./layouts/Header";
import Navigation from './layouts/Navigation'
import logo from "./images/logoExample.png";
import { BrowserRouter as Router } from "react-router-dom";

// reminder for me :) - remember about proptypes in the whole project!

export const App = () => {

const [openProjects, setOpenProjects] = useState(false);

const toggleProjects = () => {
  setOpenProjects(!openProjects)
  // document.querySelector('.projects').classList.toggle('active');
}
  return (
    <>
      <Router>
        <Header logo={logo} />
        <Navigation toggleProjects={toggleProjects} openProjects={openProjects}/>
        <About />
      </Router>
    </>
  );
};

export default App;
