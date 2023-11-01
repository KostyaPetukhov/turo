import { memo, type FC } from "react";
import Head from "next/head";

import { type layoutProps } from "../types";
import Header from "../conponents/Header";

const MainComponent: FC<layoutProps> = memo(
  ({ children, title = "Title", description = "Description", ...props }) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
        <Header />
        {children}
        {/* <Footer /> */}
      </>
    );
  },
);

MainComponent.displayName = "MainComponent";

export default MainComponent;
