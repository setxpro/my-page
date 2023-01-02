import React from "react";
import OpenMenuProvider from "../../Contexts/OpenMenu";
import { ChildrenNode } from "../../Types/ChildrenTypes";
import { Header, HeaderMobileArea } from "../Header";

import * as C from "./styles";

const Layout = ({ children }: ChildrenNode) => {
  return (
    <C.Container>
      <OpenMenuProvider>
        <Header />
        <HeaderMobileArea />
        <div>{children}</div>
      </OpenMenuProvider>{" "}
      {/** Por cima das páginas tambem para que possa fechar o menu */}
    </C.Container>
  );
};

export default Layout;
