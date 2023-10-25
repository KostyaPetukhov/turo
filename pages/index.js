import Link from "next/link";

import Layout from "../layouts/main";
import styles from "../styles/Home.module.css";

const Home = () => {
	return (
		<Layout title={"Home page"}>
			<div className={styles.container}>
				<Link href="/info">
					<h1 className={styles.title}>Find your drive</h1>
				</Link>
			</div>
		</Layout>
	);
};

export default Home;
