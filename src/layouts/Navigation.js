import React, { useState } from "react";
import Menu from "../components/Menu";
import "../styles/nav.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { OpenedProjects } from "../components/OpenedProjects";

export const Navigation = ({ toggleProjects, openProjects }) => {
  const projectsNames = [
    { name: "Project One" },
    { name: "Project Two" },
    { name: "Project Three" },
    { name: "Project Four" },
    { name: "Project Three" },
  ];
  const projectsItem = projectsNames.map((item) => (
    <li key={item.name}>{item.name}</li>
  ));

  return (
    <>
      <nav className="navigation">
        <Menu openProjects={openProjects} />
        <div className={openProjects ? "projects active" : "projects"}>
          <div className="menuProjectsLabel">
            <span>Projects</span>
            <span>Close</span>
          </div>
          <div className="slideOutMenu">
            {openProjects ? (
              <ul className="projectsNames">{projectsItem}</ul>
            ) : (
              ""
            )}
          </div>
          {/* <OpenedProjects toggleProjects={toggleProjects} openProjects={openProjects}/> */}
          <div className="naviBurgerDot" onClick={toggleProjects}>
            <BsThreeDotsVertical className="threeDots" />
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navigation;
