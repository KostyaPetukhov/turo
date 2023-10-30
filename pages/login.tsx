import { FC } from "react";
import { useRouter, NextRouter } from "next/router";
import Image from "next/image";

import Layout from "../layouts/main";

import styles from "../styles/Login.module.css";
import travelImg from "../assets/images/travel.png";
import closeIcon from "../assets/icons/close-button.svg";

import Button from "@mui/material/Button";

const Login:FC = () => {
	const router: NextRouter = useRouter();
	return (
		// <Layout title="Login">
		<>
			<div className={styles.wrapper}>
				<div className={styles.closeIcon} onClick={() => router.push("/")}>
					<Image src={closeIcon} alt="Сlose page" />
				</div>
				<div className={styles.container}>
					<Image
						src={travelImg}
						alt="You car almost there, plese login"
						height={300}
					/>
					<h1 className={styles.title}>Find your drive</h1>
					<p className={styles.paragraph}>
						Faucibus mauris eros morbi viverra sit tortor. Orci egestas
						facilisis nunc ullamcorper platea facilisis lacus habitasse. Enim
						erat dapibus consectetur.
					</p>
					<div className={styles.buttonContainer}>
						<Button
							className={styles.signUpButton}
							onClick={() => console.log("signup")}
						>
							Sign up
						</Button>
						<Button
							className={styles.loginButton}
							onClick={() => console.log("login")}
						>
							Log in
						</Button>
					</div>
				</div>
			</div>
			{/* </Layout> */}
		</>
	);
};

export default Login;