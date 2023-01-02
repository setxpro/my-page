import { Link } from "react-router-dom";

import * as C from "./styles";
import { useWrapperMenu } from "./../../Hooks/useWrapperMenu";
import { useTheme } from "./../../Hooks/useTheme";
import React from "react";
import { DisappearHeaderType } from "../../Types/DisappearHeaderType";
import { scrollTop } from "../../Utils/HandleScrollTop";

export const Header = ({ disappearHeader }: DisappearHeaderType) => {
  const { handleWrapperMenu, wrapperMenu, setWrapperMenu } = useWrapperMenu();
  const { toggleTheme, theme } = useTheme();

  return (
    <React.Fragment>
      <C.Container wrapperMenu={wrapperMenu} disappearHeader={disappearHeader}>
        <C.ContentHeaderLeft>
          <C.NavArea>
            <C.ContentTopMobile>
              <div></div>
              <h2>Zend</h2>
              <C.CloseIcon onClick={handleWrapperMenu} />
            </C.ContentTopMobile>
            <C.Ul>
              <Link to="#" onClick={scrollTop}>
                Home
              </Link>
              <a href="#about">About</a>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </C.Ul>
          </C.NavArea>
        </C.ContentHeaderLeft>
        <C.ContentHeaderRight></C.ContentHeaderRight>
        <C.ThemeContentArea onClick={toggleTheme}>
          {theme.title === "light" && <C.DarkIcon />}
          {theme.title === "dark" && <C.LightIcon />}
        </C.ThemeContentArea>
      </C.Container>
      <C.ContentBlur
        wrapperMenu={wrapperMenu}
        onClick={() => setWrapperMenu(false)}
      ></C.ContentBlur>
    </React.Fragment>
  );
};

export const HeaderMobileArea = () => {
  const { handleWrapperMenu } = useWrapperMenu();
  const { toggleTheme, theme } = useTheme();
  return (
    <C.HeaderMobile>
      <C.BarsIcon onClick={() => handleWrapperMenu()} />
      <div onClick={toggleTheme}>
        {theme.title === "light" && <C.DarkIcon />}
        {theme.title === "dark" && <C.LightIcon />}
      </div>
    </C.HeaderMobile>
  );
};
