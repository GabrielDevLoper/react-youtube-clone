import React, { useState } from "react";
import Home from "./pages/Home";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { SideBarProvider } from "./context/VisibleSideBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#ab003c",
      },
      secondary: {
        main: "#3ea6ff",
      },
      background: {
        default: darkMode ? "#252525" : "#fff",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#252525" : "#fff",
      },
    },
  });
  return (
    <SideBarProvider>
      <ThemeProvider theme={theme}>
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </SideBarProvider>
  );
}

export default App;
