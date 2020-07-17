import "../styles/nav.scss";

import React, { useEffect, useState } from "react";

import { ImageComponent } from "./ImageComponent";
import PropTypes from "prop-types";

const useMousePosition = () => {
  const [position, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return position;
};

export const OpenedProjects = ({ projects, openProjects }) => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div className="slideOutMenu">
        {openProjects && (
          <ul>
            {projects.map((i) => (
              <li className="projectsName" key={i.id}>
                {i.name}
                <span className="number">{i.number}</span>
                <p className="description"> {i.description}</p>
                <ImageComponent image={i.url} x={x} y={y} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default OpenedProjects;

OpenedProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      number: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
  openProjects: PropTypes.bool,
};
