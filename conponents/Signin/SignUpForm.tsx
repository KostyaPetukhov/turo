import { type FC } from "react";
import { useRouter, type NextRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      void router.push({
        pathname: "/profile/registration",
        query: { email: values.email },
      });
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={formik.handleSubmit}>
        <Box style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <FormControl>
            <TextField
              name="email"
              label="Enter email address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={
                formik.touched.email === true && Boolean(formik.errors.email)
              }
              helperText={formik.touched.email === true && formik.errors.email}
            />
          </FormControl>
          <Button type="submit" variant="contained">
            <Typography>Next</Typography>
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default SignUpForm;
