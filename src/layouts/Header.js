import React from "react";
import "../index.css";
import Navigation from "../layouts/Navigation";
export const Header = ({ logo }) => {
  return (
    <>
      <section id="header">
        <hr />
        <img src={logo} alt="logo" />
      </section>
        <Navigation />
    </>
  );
};

export default Header;