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
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const alchemyId = process.env.POLYGON_MUMBAI_ALCHEMY;

export default function App() {
  const { chains, provider } = configureChains(
    [
      chain.mainnet,
      chain.polygon,
      chain.optimism,
      chain.arbitrum,
      chain.polygonMumbai,
    ],
    [alchemyProvider({ alchemyId: alchemyId } as any), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Web3 Blog",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

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
        },
      }),
    [mode]
  );

  return (
    <WagmiConfig client={wagmiClient}>
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
            <Header></Header>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
