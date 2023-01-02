import React, { useState, useEffect } from "react";
import OpenMenuProvider from "../../Contexts/OpenMenu";
import { ChildrenNode } from "../../Types/ChildrenTypes";
import { Header, HeaderMobileArea } from "../Header";

import * as C from "./styles";

const Layout = ({ children }: ChildrenNode) => {
  const [disappearHeader, setDisappearHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 2) {
        setDisappearHeader(true);
      } else {
        setDisappearHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <C.Container>
      <OpenMenuProvider>
        <Header disappearHeader={disappearHeader} />
        <HeaderMobileArea />
        <C.ContentPages>{children}</C.ContentPages>
      </OpenMenuProvider>{" "}
      {/** Por cima das páginas tambem para que possa fechar o menu */}
    </C.Container>
  );
};

export default Layout;
