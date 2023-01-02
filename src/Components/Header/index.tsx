import React from "react";
import { Link } from "react-router-dom";

import * as C from "./styles";
import { useWrapperMenu } from "./../../Hooks/useWrapperMenu";

export const Header = () => {
  const { handleWrapperMenu, wrapperMenu } = useWrapperMenu();

  return (
    <C.Container wrapperMenu={wrapperMenu}>
      <C.ContentHeaderLeft>
        <C.NavArea>
          <C.ContentTopMobile>
            <div></div>
            <h2>Zend</h2>
            <button onClick={handleWrapperMenu}>CLOSE</button>
          </C.ContentTopMobile>
          <C.Ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </C.Ul>
        </C.NavArea>
      </C.ContentHeaderLeft>
      <C.ContentHeaderRight></C.ContentHeaderRight>
      <C.ThemeContentArea>
        <button>ToggleTheme</button>
      </C.ThemeContentArea>
    </C.Container>
  );
};

export const HeaderMobileArea = () => {
  const { handleWrapperMenu } = useWrapperMenu();
  return (
    <C.HeaderMobile>
      <button onClick={handleWrapperMenu}>OPEN</button>
      <button>Theme</button>
    </C.HeaderMobile>
  );
};
