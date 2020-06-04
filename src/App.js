import React from "react";
import logo from "./images/logoExample.png";
import About from "./layouts/About";
import Header from "./layouts/Header";
import { BrowserRouter as Router } from "react-router-dom";

// reminder for me :) - remember about proptypes in the whole project!

export const App = () => {
  //
  return (
    <>
      <Router>
        <Header logo={logo} />
        <About />;
      </Router>
    </>
  );
};

export default App;
