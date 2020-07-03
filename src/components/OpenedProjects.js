
// import styled from "styled-components";
// const HoverDescription = styled.div`
//   width: 250px;
//   height: 500px;
//   left: 10%;
//   :hover {
//     color: #ed1212;
//   }
// `;

import '../styles/nav.scss'

import React from 'react'

export const OpenedProjects = ({projects, openProjects}) => {
  const projectName = projects.map(i => <li className="projectsName" key = {i.id}>{i.name}</li>
  )
  return (
    <div className="slideOutMenu">
      {openProjects ? <ul>{projectName}</ul> : ""}
    </div>
  )
}
 export default OpenedProjects;
