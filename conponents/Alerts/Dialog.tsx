import React, { type FC } from "react";

import { type dialogTypes } from "../../types";
import styles from "../../styles/Dialog.module.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AlertDialog: FC<dialogTypes> = ({
  open,
  handleClose,
  dialogTitle,
  dialogContent,
  agreeText,
  disagreeText,
  onAgree,
  onDisagree,
}) => {
  const handleAgree = (): void => {
    onAgree();
    handleClose();
  };

  const handleDisagree = (): void => {
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
      <DialogTitle
        id="alert-dialog-title"
        fontFamily={"SF Pro Display"}
        className={styles.title}
      >
        {dialogTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          fontFamily={"SF Pro Display"}
          className={styles.content}
        >
          {dialogContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <div>
          <Button
            onClick={() => {
              handleDisagree();
            }}
            className={styles.disagree}
          >
            {disagreeText}
          </Button>
          <Button
            onClick={() => {
              handleAgree();
            }}
            className={styles.agree}
            autoFocus
          >
            {agreeText}
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
