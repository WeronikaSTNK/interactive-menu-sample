import React, { useState } from "react";
import Menu from "../../components/Menu";
import "../../styles/nav.scss";
import { OpenProjects } from "../../components/OpenProjects";
import Projects from "../../components/Projects";
export const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav id="navigation">
        <Menu />
        {openMenu ? (
          <OpenProjects />
        ) : (
          <Projects
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        )}
      </nav>
    </>
  );
};
export default Navigation;
