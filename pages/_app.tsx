import type { AppProps } from "next/app";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import UserProvider from "../contextes/User/UserContext";
import EventProvider from "../contextes/Event/EventListContext";

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
      <UserProvider>
        <EventProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </EventProvider>
      </UserProvider>
    </>
  );
}
export default MyApp;
