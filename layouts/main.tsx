import { memo, FC } from "react";
import Head from "next/head";

import { layoutProps } from "../types";
import Header from "../conponents/Header";
import Footer from "../conponents/Footer";

const MainComponent:FC<layoutProps> = memo(
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
	}
);

export default MainComponent;
