import { type AppProps } from "next/app";
import { type ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "@mui/material/styles"; // Импортируйте ThemeProvider
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline устанавливает стандартные стили для вашего приложения */}
      <CssBaseline />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
};
export default MyApp;
