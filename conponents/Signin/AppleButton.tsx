import { type FC } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";

import appleIcon from "../../assets/icons/apple.svg";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "48px",
          padding: "16px",
          borderRadius: "8px",
          gap: "8px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F0F9FF",
          color: "#0494F5",
          border: "none",
          textTransform: "none",
          boxShadow: "none",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#DDEEFF",
            boxShadow: "none",
          },
          "&:active": {
            backgroundColor: "#AAD4FF",
            boxShadow: "none",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 600,
          fontFamily: "SF Pro Display",
          color: "#0494F5",
        },
      },
    },
  },
});

const AppleButton: FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = (searchParams.get("callbackUrl") as string) ?? "/profile";

  const handleSignInWithApple = (): void => {
    void signIn("apple", { callbackUrl });
  };

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={handleSignInWithApple}>
        <Image src={appleIcon} alt="Apple Icon" width={24} height={24} />
        <Typography style={{ marginLeft: 8 }}>Continue with Apple</Typography>
      </Button>
    </ThemeProvider>
  );
};

export default AppleButton;
