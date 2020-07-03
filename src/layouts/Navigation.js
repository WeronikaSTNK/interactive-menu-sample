import "../styles/nav.scss";

import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "../components/Menu";
import { OpenedProjects } from "../components/OpenedProjects";
import React from "react";

export const Navigation = ({ toggleProjects, openProjects, projects }) => {
  return (
    <>
      <nav className="navigation">
        <Menu openProjects={openProjects} />
        <div className={openProjects ? "projects active" : "projects"}>
          <div className="menuProjectsLabel">
            <span>Projects</span>
            <span>Close</span>
          </div>
          <OpenedProjects
            projects={projects}
            toggleProjects={toggleProjects}
            openProjects={openProjects}
          />
          <div className="naviBurgerDot" onClick={toggleProjects}>
            <BsThreeDotsVertical className="threeDots" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
