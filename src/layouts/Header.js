import React from "react";
import "../index.css";
import Navigation from "../layouts/Navigation";
export const Header = ({ logo, toggleProjects, openProjects }) => {
  return (
    <>
      <section id="header">
        <hr />
        <img src={logo} alt="logo" />
      </section>
        <Navigation toggleProjects={toggleProjects} openProjects={openProjects}/>
    </>
  );
};

export default Header;
