import React, { useState } from "react";
import Menu from "../components/Menu";
import "../styles/nav.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { OpenedProjects } from "../components/OpenedProjects";

export const Navigation = ({ toggleProjects, openProjects }) => {
  return (
    <>
      <nav className="navigation">
        <Menu />
        <div className={openProjects ? "active" : ""}>
          <div className="projects" onClick={toggleProjects}>
            <div className="menuProjectsButton">
              <span>Projects</span>
              <span>Close</span>
            </div>
          <OpenedProjects toggleProjects={toggleProjects} openProjects={openProjects}/>
            <div className="naviBurgerDot">
              <BsThreeDotsVertical className="threeDots" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )}


export default Navigation;
