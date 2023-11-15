import { type FC } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";

import googleIcon from "../../assets/icons/google.svg";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
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
          transition: "background-color 0.3s ease", // Добавлен переход для плавности изменения цвета
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

const GoogleButton: FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = (searchParams.get("callbackUrl") as string) ?? "/profile";

  const handleSignInWithGoogle = (): void => {
    void signIn("google", { callbackUrl });
  };

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={handleSignInWithGoogle}>
        <Image src={googleIcon} alt="Google Icon" width={24} height={24} />
        <Typography style={{ marginLeft: 8 }}>Continue with Google</Typography>
      </Button>
    </ThemeProvider>
  );
};

export default GoogleButton;
