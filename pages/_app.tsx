import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import { UserContext } from "../contextes/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <UserContext.Provider value={{ data: null, error: "", loading: true }}>
        <CssBaseline />
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}
export default MyApp;
