import React from "react";
import "../index.css";
import Navigation from "../layouts/Navigation";
export const Header = ({ logo }) => {
  return (
    <>
      <header>
        <hr />
        <img src={logo} alt="logo" />
      </header>
    </>
  );
};

export default Header;
