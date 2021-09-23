import type { AppProps } from "next/app";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import UserProvider from "../contextes/User/UserContext";
import EventProvider from "../contextes/Event/EventListContext";
import { AppContextType } from "next/dist/shared/lib/utils";
import App from "next/app";
import { Router } from "next/dist/client/router";
import $api from "../utils/api";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
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

MyApp.getInitialProps = async (appContext: AppContextType<Router>) => {
  const appProps = await App.getInitialProps(appContext);
  // appProps.pageProps.categories = await $api.get("/api/category");
  appProps.pageProps

  return { ...appProps };
};

export default MyApp;
