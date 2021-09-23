import type { AppProps } from "next/app";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import UserProvider from "../contextes/User/UserContext";
import EventProvider from "../contextes/Event/EventListContext";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <UserProvider>
        <EventProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </EventProvider>
      </UserProvider>
    </MuiPickersUtilsProvider>
  );
}

export default MyApp;
