import React from "react";
import "./App.css";
import Header from "./components/Header";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import { ColorModeContext } from "./components/ToggleColorMode";
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain } from "wagmi";
import { HashRouter, Route, Routes } from "react-router-dom";
import NewStory from "./pages/NewStory";
import Stories from "./pages/Stories";
import MyStories from "./pages/MyStories";
import NotFound from "./pages/404";
import Home from "./pages/Home";
import { chains } from "./lib/wagmi";
import { darkModePalette, lightModePallette } from "./lib/colors";
import Story from "./pages/Story";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light"
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? // palette values for light mode
              lightModePallette
            : // palette values for dark mode
              darkModePalette),
        },
      }),
    [mode]
  );

  return (
    <HashRouter>
      <RainbowKitProvider
        coolMode
        theme={theme.palette.mode === "dark" ? darkTheme() : lightTheme()}
        chains={chains}
        initialChain={chain.polygonMumbai}
        showRecentTransactions={true}
      >
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="create-story" element={<NewStory />} />
              <Route path="stories" element={<Stories />} />
              <Route path="my-stories" element={<MyStories />} />
              <Route path="story/:storyId" element={<Story />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </RainbowKitProvider>
    </HashRouter>
  );
}
