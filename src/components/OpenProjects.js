import React from "react";

export const OpenProjects = ({ openProjects, toggleProjects }) => {
  const projectsNames = [
    { name: "Project One" },
    { name: "Project Two" },
    { name: "Project Three" },
  ];

 const projectsItem =  projectsNames.map(i => {
    return <li key={projectsNames.name}>{projectsNames.name}</li>
  })
console.log(projectsNames)
  return (
    <>
      <section  className={openProjects ? "active" : 'projects'}>
Test
      </section>
    </>
  );
};
