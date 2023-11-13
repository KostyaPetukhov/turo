import { type AppProps } from "next/app";
import { type ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};
export default MyApp;
