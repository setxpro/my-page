import { useContext } from "react";
import { OpenMenuContext } from "./../Contexts/OpenMenu/index";

export const useWrapperMenu = () => {
  const wrapperMenu = useContext(OpenMenuContext);
  return wrapperMenu;
};
