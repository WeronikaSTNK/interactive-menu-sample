import "../styles/nav.scss";

import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "../components/Menu";
import { OpenedProjects } from "../components/OpenedProjects";
import PropTypes from "prop-types";
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
              <div className="naviBurgerDot" onClick={toggleProjects}>
            <BsThreeDotsVertical className="threeDots" />
          </div>
          <OpenedProjects
            projects={projects}
            toggleProjects={toggleProjects}
            openProjects={openProjects}
          />
        </div>
      </nav>
    </>
  );
};

export default Navigation;

Navigation.propTypes = {
  toggleProjects: PropTypes.func,
  openProjects: PropTypes.bool,
   projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      number: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
}
