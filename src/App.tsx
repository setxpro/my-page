import GlobalStyle from "./Styles/GlobalStyle";
import { RoutesApp } from "./Routes/index";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Hooks/useTheme";

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RoutesApp />
    </ThemeProvider>
  );
};

export default App;
