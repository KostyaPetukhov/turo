import React, { useState } from "react";

import styles from "../../styles/Dialog.module.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AlertDialog = ({
	open,
	handleClose,
	dialogTitle,
	dialogContent,
	agreeText,
	disagreeText,
	onAgree,
	onDisagree,
}) => {
	const handleAgree = () => {
		onAgree();
		handleClose();
	};

	const handleDisagree = () => {
		onDisagree();
		handleClose();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title" className={styles.title}>
				{dialogTitle}
			</DialogTitle>
			<DialogContent>
				<DialogContentText
					id="alert-dialog-description"
					className={styles.content}
				>
					{dialogContent}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<div>
					<Button onClick={handleDisagree} className={styles.disagree}>
						{disagreeText}
					</Button>
					<Button onClick={handleAgree} className={styles.agree} autoFocus>
						{agreeText}
					</Button>
				</div>
			</DialogActions>
		</Dialog>
	);
};

export default AlertDialog;
