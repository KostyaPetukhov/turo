import { useState, useEffect, FC } from "react";
import { useRouter, NextRouter } from "next/router";
import Image from "next/image";

import Layout from "../layouts/main";
import AlertDialog from "../conponents/Alerts/Dialog";

import styles from "../styles/Info.module.css";
import illustrationsImg from "../assets/images/illustrations.png";
import bellIcon from "../assets/icons/bell.svg";
import noteIcon from "../assets/icons/note.svg";
import saleIcon from "../assets/icons/sale.svg";
import closeIcon from "../assets/icons/close-button.svg";
import nextIcon from "../assets/icons/arrow-right.svg";

import Button from "@mui/material/Button";

const Info:FC = () => {
	const router: NextRouter = useRouter();
	const { openModal }: { openModal?: string } = router.query;

	const [openAlertDialog, setOpenAlertDialog] = useState<boolean>(false);
	const [openTrackActivityDialog, setOpenTrackActivityDialog] = useState<boolean>(false);

	useEffect(() => {
		openModal && setOpenTrackActivityDialog(true);
	}, [openModal]);

	const handleAgree = () => {
		router.push("/optimization");
	};

	const handleDisagree = () => {
		router.push("/info");
	};

	const handleTrackActivityAgree = () => {
		router.push("/login");
	};

	const handleTrackActivityDisagree = () => {
		router.push("/info");
	};

	return (
		<Layout title="Info">
			<div className={styles.wrapper}>
				<div className={styles.iconButtonsWrap}>
					<div
						className={styles.closeIcon}
						onClick={() => router.push("/optimization")}
					>
						<Image src={closeIcon} alt="Сlose page" />
					</div>
					<div
						className={styles.nextIcon}
						onClick={() => router.push("/optimization")}
					>
						<Image src={nextIcon} alt="Next page" />
					</div>
				</div>
				<div className={styles.container}>
					<Image
						src={illustrationsImg}
						alt="Information about allowing notifications"
					/>
					<h1 className={styles.title}>Stay up to date</h1>
					<p className={styles.paragraph}>
						Ensure a seamless trip experience by allowing notifications – it`s
						the easiest way to keep track of your trips and in-app messages.
					</p>
					<div className={styles.list}>
						<div className={styles.listTitle}>
							If you allow notifications, you`ll received:
						</div>
						<div className={styles.listItem}>
							<Image src={noteIcon} alt="Important trip instructions" />
							<span className={styles.itemText}>
								Important trip instructions
							</span>
						</div>
						<div className={styles.listItem}>
							<Image
								src={bellIcon}
								alt="Alerts whenever a host or guest messages you"
							/>
							<span className={styles.itemText}>
								Alerts whenever a host or guest messages you
							</span>
						</div>
						<div className={styles.listItem}>
							<Image
								src={saleIcon}
								alt="Occasional discounts & other useful information"
							/>
							<span className={styles.itemText}>
								Occasional discounts & other useful information
							</span>
						</div>
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<Button
						className={styles.button}
						onClick={() => setOpenAlertDialog(true)}
					>
						Allow notifications
					</Button>
				</div>
			</div>
			<AlertDialog
				open={openAlertDialog}
				handleClose={() => setOpenAlertDialog(false)}
				dialogTitle="Title Here"
				dialogContent="Here’s to the crazy ones, the misfits, the rebels, the troublemakers..."
				agreeText="Allow"
				disagreeText="Deny"
				onAgree={handleAgree}
				onDisagree={handleDisagree}
			/>
			<AlertDialog
				open={openTrackActivityDialog}
				handleClose={() => setOpenTrackActivityDialog(false)}
				dialogTitle="Allow the App to track your activities on other companies' apps and websites?"
				dialogContent="App will use this data to optimize your experience and the ads you see; we’ll never sell your personal data."
				agreeText="Allow"
				disagreeText="Ask not to be tracked"
				onAgree={handleTrackActivityAgree}
				onDisagree={handleTrackActivityDisagree}
			/>
		</Layout>
	);
};

export default Info;
