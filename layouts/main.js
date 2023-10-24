import { memo } from "react";
import Head from "next/head";

import Header from "../conponents/Header";
import Footer from "../conponents/Footer";

const MainComponent = memo(
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
