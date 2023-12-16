import { type FC, useState } from "react";
import { useRouter, type NextRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Button,
  TextField,
  FormControl,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignInForm: FC = () => {
  const router: NextRouter = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      signIn("credentials", {
        email: values.email,
        password: values.password,
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
    },
  });

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  return (
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
        <FormControl>
          <TextField
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={
              formik.touched.password === true &&
              Boolean(formik.errors.password)
            }
            helperText={
              formik.touched.password === true && formik.errors.password
            }
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
        <Button
          type="submit"
          variant="contained"
          disabled={!formik.isValid || !formik.dirty}
        >
          Log in
        </Button>
      </Box>
    </form>
  );
};

export default SignInForm;
