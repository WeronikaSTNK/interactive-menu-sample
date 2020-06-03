import React, {useState} from 'react'
import '../styles/nav.scss'
export const Projects = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
    {/* should i use  different tag here? for example section/fragment */}
      <div className="allProjects">
        Projects
      </div>
       <span className="naviBurgerDot"></span>
    </>
  )
}

export default Projects
