import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import usePersistedState from "../../Hooks/usePersistedState";
import { dark } from "../../Styles/theme/dark";
import { light } from "../../Styles/theme/light";
import { ChildrenNode } from "../../Types/ChildrenTypes";
import { ThemeType } from "../../Types/ThemeType";

export const GetThemeContext = createContext({} as ThemeType);

export const GetThemeProvider = ({ children }: ChildrenNode) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const toggleTheme = () => setTheme(theme.title === "light" ? dark : light);

  return (
    <GetThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </GetThemeContext.Provider>
  );
};
