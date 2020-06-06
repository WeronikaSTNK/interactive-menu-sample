import React from "react";
import Menu from "./Menu";

export const OpenedProjects = ({ openProjects, toggleProjects }) => {
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
<div className="slideOutMenu">
    {openProjects ? <ul className="projectsNames">{projectsItem}</ul> : ""}

</div>


    </>
  );
};

export default OpenedProjects;
