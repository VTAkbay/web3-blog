import React from "react";
import "./App.css";
import Header from "./components/Header";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import DarkModeSwitch from "./components/DarkModeSwitch";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode && prefersDarkMode ? "dark" : "light",
        },
      }),
    [darkMode, prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header></Header>
        <DarkModeSwitch
          check={darkMode}
          change={() => setDarkMode(!darkMode)}
        ></DarkModeSwitch>
      </div>
    </ThemeProvider>
  );
}

export default App;
