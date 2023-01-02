import React from "react";
import OpenMenuProvider from "../../Contexts/OpenMenu";
import { Header, HeaderMobileArea } from "../Header";

import * as C from "./styles";

const Layout = () => {
  return (
    <C.Container>
      <OpenMenuProvider>
        <Header />
        <HeaderMobileArea />
        <div></div>
      </OpenMenuProvider>{" "}
      {/** Por cima das páginas tambem para que possa fechar o menu */}
    </C.Container>
  );
};

export default Layout;
