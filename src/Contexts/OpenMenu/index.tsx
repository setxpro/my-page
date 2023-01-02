import { createContext, useState } from "react";
import { ChildrenNode } from "../../Types/ChildrenTypes";
import { OpenMenuTypes } from "../../Types/OpenMenuTypes";

export const OpenMenuContext = createContext({} as OpenMenuTypes);

const OpenMenuProvider = ({ children }: ChildrenNode) => {
  const [wrapperMenu, setWrapperMenu] = useState(false);
  const handleWrapperMenu = () => setWrapperMenu(!wrapperMenu);

  return (
    <OpenMenuContext.Provider value={{ handleWrapperMenu, wrapperMenu }}>
      {children}
    </OpenMenuContext.Provider>
  );
};

export default OpenMenuProvider;
