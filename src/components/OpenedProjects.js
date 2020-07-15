import "../styles/nav.scss";

import React, {useState} from "react";

export const OpenedProjects = ({ projects, openProjects }) => {
  const [position, setPosition] = useState({ x:0, y:0})

const onMouseMove = (e) => {
  // let image = document.getElementById("image")
  setPosition({x: e.screenX, y: e.screenY})
}
  const projectName = projects.map((i) => (
    <li className="projectsName" key={i.id}>
      {i.name}
      <span className="number">{i.number}</span>
      <p className="description"> {i.description}</p>
      <div id="cursor">

      <img id="image" alt = "Project"src={i.url} />

      </div>
    </li>
  ));

  return (
    <>
      <div className="slideOutMenu" onMouseMove={onMouseMove}>
        {openProjects && (
          <div>
            <ul>{projectName}</ul>
          </div>
        )}
      </div>
    </>
  );
};
export default OpenedProjects;
