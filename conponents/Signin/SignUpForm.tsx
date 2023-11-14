import { FC, useState } from "react";
import { useRouter, NextRouter } from "next/router";
import { FormEventHandler } from "react";
import {
  Button,
  TextField,
  FormControl,
  ThemeProvider,
  createTheme,
  Box,
  Typography,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          height: 50,
          padding: "0px 12px",
          borderRadius: 8,
          borderWidth: 1,
          gap: 8,
          backgroundColor: "#AEB7CE",
          color: "#FFFFFF",
          border: "none",
          borderColor: " #BDC7CB",
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
        outlined: {
          borderWidth: 1,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 600,
          fontFamily: "SF Pro Display",
          color: "#FFFFFF",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#BDC7CB",
          fontWeight: 400,
          "& .MuiInputLabel-root": {
            color: "#BDC7CB",
          },
          "&:active": {
            borderColor: "#BDC7CB",
          },
        },
      },
    },
  },
});

const SignUpForm: FC = () => {
  const router: NextRouter = useRouter();
  const [email, setEmail] = useState<string>("");
  const [emailTouched, setEmailTouched] = useState<boolean>(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    router.push("/signin");
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Box style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <FormControl>
            <TextField
              name="email"
              label="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
              inputProps={{ pattern: emailPattern.source }}
              error={emailTouched && !emailPattern.test(email)}
              helperText={
                emailTouched && !emailPattern.test(email)
                  ? "Enter a valid email address"
                  : ""
              }
            />
          </FormControl>
          <Button type="submit" variant="contained">
            <Typography> Next</Typography>
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default SignUpForm;
