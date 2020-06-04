import React from 'react'
import '../styles/nav.scss'
import {
BsThreeDotsVertical
} from "react-icons/bs";
export const Projects = ({toggleProjects}) => {
//here we have just component w
  return (
    <>
    {/* should i use  different tag here? for example section/fragment */}
      <div className="allProjects">
        Projects
      </div>
       <div className="naviBurgerDot">
         <button onClick={toggleProjects}>
          <BsThreeDotsVertical  className="threeDots"/>
          </button>
          </div>
    </>
  )
}

export default Projects
