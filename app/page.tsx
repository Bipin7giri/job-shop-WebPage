"use client";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import NavBar from "./components/NavBar/navBar";

import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <NavBar {...pageProps} />
    </MantineProvider>
  );
}
