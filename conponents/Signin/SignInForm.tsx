import { type FC, type FormEventHandler, useState } from "react";
import { useRouter, type NextRouter } from "next/router";
import { signIn } from "next-auth/react";
import {
  Button,
  TextField,
  FormControl,
  ThemeProvider,
  createTheme,
  Box,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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

const SignInForm: FC = () => {
  const router: NextRouter = useRouter();
  const [email, setEmail] = useState<string>("");
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    })
      .then((res) => {
        if (res !== undefined && res.error == null) {
          void router.push("/profile");
        } else {
          alert("Something went wrong, check your data");
        }
      })
      .catch((error) => {
        console.error("An error occurred during signin:", error);
        alert("An error occurred during signin");
      });
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Box style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <FormControl>
            <TextField
              name="email"
              label="Enter email address"
              onChange={(e): void => {
                setEmail(e.target.value);
              }}
              onBlur={(): void => {
                setEmailTouched(true);
              }}
              inputProps={{ pattern: emailPattern.source }}
              error={emailTouched && !emailPattern.test(email)}
              helperText={
                emailTouched && !emailPattern.test(email)
                  ? "Enter a valid email address"
                  : ""
              }
            />
          </FormControl>
          <FormControl>
            <TextField
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff
                          style={{
                            color: " #BDC7CB",
                          }}
                        />
                      ) : (
                        <Visibility
                          style={{
                            color: " #BDC7CB",
                          }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Button type="submit" variant="contained">
            <Typography> Log in</Typography>
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default SignInForm;
