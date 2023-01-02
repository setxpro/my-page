import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { GetThemeProvider } from "./Contexts/Theme/GetThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GetThemeProvider>
      <Router>
        <App />
      </Router>
    </GetThemeProvider>
  </React.StrictMode>
);
