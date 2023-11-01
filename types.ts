import { type ReactNode } from "react";

export interface layoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export interface dialogTypes {
  open: boolean;
  handleClose: () => void;
  dialogTitle: string;
  dialogContent: string;
  agreeText: string;
  disagreeText: string;
  onAgree: () => void;
  onDisagree: () => void;
}
