import PropTypes from 'prop-types';
import React from "react";

export const Header = ({ logo }) => {
  return (
    <>
      <header>
        <hr />
        <img src={logo} alt="logo" className="logo" />
        <hr />
      </header>
    </>
  );
};

export default Header;

Header.propTypes = {
  logo: PropTypes.string
};
