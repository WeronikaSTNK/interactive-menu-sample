import React, { useState } from "react";
import Menu from "../components/Menu";
import "../styles/nav.scss";
import { OpenProjects } from "../components/OpenProjects";
import Projects from "../components/Projects";
export const Navigation = ({toggleProjects, openProjects}) => {

  return (
    <>
      <nav id="navigation">
        <Menu />
        {openProjects ? (
          <OpenProjects />
        ) : (
          <Projects
            toggleProjects={toggleProjects}
            openProjects={openProjects}
          />
          // should here be arrow function?
        )}
      </nav>
    </>
  );
};
export default Navigation;
