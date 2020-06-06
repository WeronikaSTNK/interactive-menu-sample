import React from "react";
import "../index.css";
export const Header = ({ logo }) => {
  return (
    <>
      <header>
        <hr />
        <img src={logo} alt="logo" />
        <hr />
      </header>
    </>
  );
};

export default Header;
