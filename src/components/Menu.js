import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Cursor from "../components/Cursor";
import "../styles/nav.scss";

export const Menu = ({ openProjects }) => {
  //here we have just menu items without projects section

  const [pointerCursor, setPointerCursor] = useState(false);

  const navList = [
    { name: "About", path: "/about", exact: true },
    { name: "Work", path: "/work" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const menu = navList.map((item) => (
    <li key={item.name} className="menuItem">
      <NavLink
        onMouseEnter={() => setPointerCursor(true)}
        onMouseLeave={() => setPointerCursor(false)}
        to={item.path}
        exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      {/* <Cursor cursorClass={pointerCursor ? "active" : null} /> */}
      {!openProjects ? <ul className="menu">{menu}</ul> : ""}
    </>
  );
};

export default Menu;
