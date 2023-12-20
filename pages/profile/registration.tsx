import { type FC, useState, useEffect } from "react";
import { useRouter, type NextRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Button,
  TextField,
  FormControl,
  Box,
  IconButton,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Layout from "../../layouts/main";
import closeIcon from "../../assets/icons/arrow-left.svg";
import styles from "../../styles/Signin.module.css";

const Registration: FC = () => {
  const router: NextRouter = useRouter();
  const { email }: { email?: string | undefined } = router.query;

  useEffect(() => {
    if (email == null) {
      void router.push("/signup");
    }
  }, [email, router]);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const initialValues = {
    email,
    password: "",
    firstName: "",
    lastName: "",
    terms: true,
    sendInfo: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("Fist name is required"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),
    terms: Yup.boolean().required("You must accept the terms of service"),
    sendInfo: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (!values.terms) {
        alert("You must accept the terms of service");
        return;
      }
      void router.push("/");
    },
  });

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  const handleRouterBack = (): void => {
    router.back();
  };

  return (
    <Layout title={"Sign in"}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.closeIcon} onClick={handleRouterBack}>
            <Image src={closeIcon} alt="Go back" />
          </div>
          <h1 className={styles.title}>Email sign up</h1>
          <form onSubmit={formik.handleSubmit}>
            <Box style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <FormControl>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <TextField
                  name="email"
                  label={formik.values.email !== "" ? "" : "Enter your email"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={
                    formik.touched.email === true &&
                    Boolean(formik.errors.email)
                  }
                  helperText={
                    formik.touched.email === true && formik.errors.email
                  }
                />
              </FormControl>
              <FormControl>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <TextField
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label={
                    formik.values.password !== "" ? "" : "Enter your password"
                  }
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
              <FormControl>
                <label htmlFor="firstName" className={styles.label}>
                  First name
                </label>
                <TextField
                  name="firstName"
                  label={
                    formik.values.firstName !== ""
                      ? ""
                      : "Enter your first name"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  error={
                    formik.touched.firstName === true &&
                    Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName === true && formik.errors.firstName
                  }
                />
              </FormControl>
              <FormControl>
                <label htmlFor="lastName" className={styles.label}>
                  Last name
                </label>
                <TextField
                  name="lastName"
                  label={
                    formik.values.lastName !== "" ? "" : "Enter your last name"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  error={
                    formik.touched.lastName === true &&
                    Boolean(formik.errors.lastName)
                  }
                  helperText={
                    formik.touched.lastName === true && formik.errors.lastName
                  }
                />
              </FormControl>
              <FormControl>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 24,
                  }}
                >
                  <Checkbox
                    id="terms"
                    checked={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    color="primary"
                  />
                  <div className={styles.paragraph}>
                    I agree to the{" "}
                    <Link href="/" className={styles.link}>
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/" className={styles.link}>
                      privacy policy
                    </Link>
                  </div>
                </Box>
              </FormControl>
              <FormControl>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 24,
                  }}
                >
                  <Checkbox
                    id="sendInfo"
                    checked={formik.values.sendInfo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    color="primary"
                  />
                  <div className={styles.paragraph}>
                    Yes, send me deals, discounts, and updates!
                  </div>
                </Box>
              </FormControl>
            </Box>
            <Button
              type="submit"
              variant="contained"
              className={styles.submitButton}
            >
              Sign up with email
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
