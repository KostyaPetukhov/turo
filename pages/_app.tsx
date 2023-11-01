import { type AppProps } from "next/app";
import { type ReactNode } from "react";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />;
};
export default MyApp;
