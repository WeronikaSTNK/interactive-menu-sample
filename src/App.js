import React, {useState} from "react";
import logo from "./images/logoExample.png";
import About from "./layouts/About";
import Header from "./layouts/Header";
import { BrowserRouter as Router } from "react-router-dom";

// reminder for me :) - remember about proptypes in the whole project!

export const App = () => {

const [openProjects, setOpenProjects] = useState(false);

const toggleProjects = () => {
  setOpenProjects(!openProjects)
}
  return (
    <>
      <Router>
        <Header logo={logo} toggleProjects={toggleProjects} openProjects={openProjects}/>
        <About />;
      </Router>
    </>
  );
};

export default App;
