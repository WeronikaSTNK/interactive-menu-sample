import React from 'react'
import '../styles/nav.scss'
import {
BsThreeDotsVertical
} from "react-icons/bs";
export const Projects = ({toggleProjects}) => {

  return (
    <>
    {/* should i use  different tag here? for example section/fragment */}
    <div className="projects" onClick={toggleProjects}>
    <div className="menuProjects">
        Projects
      </div>
       <div className="naviBurgerDot">
          <BsThreeDotsVertical  className="threeDots"/>
          </div>
      </div>
    </>
  )
}

export default Projects
