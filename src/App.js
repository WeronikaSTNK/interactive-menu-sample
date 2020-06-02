import React from "react";
import logo from "./images/logoExample.png";
import About from "./layouts/about/About";
import Header from "./layouts/Header/Header";

// reminder for me :) - remember about proptypes in the whole project!

export const App = () => {
  //
  return (
    <>
      <Header logo={logo} />
      <About />;
    </>
  );
};

export default App;
