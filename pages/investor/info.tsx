import { type FC, useState } from "react";
import { useRouter, type NextRouter } from "next/router";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import Layout from "../../layouts/main";
import GoogleButton from "../../conponents/Signin/GoogleButton";
import FacebookButton from "../../conponents/Signin/FacebookButton";
import { Box, Button, Typography, FormControl, TextField } from "@mui/material";

const InvestorInfo: FC = () => {
  const router: NextRouter = useRouter();
  const [phone, setPhone] = useState("");

  const initialValues = {
    firstName: "",
    email: "",
    phone: "",
    make: "",
    model: "",
    year: "",
    mileage: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("Required field"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required field"),
    phone: Yup.string().required("Required field"),
    make: Yup.string()
      .min(2, "Make must be at least 2 characters")
      .required("Required field"),
    model: Yup.string().required("Model name is required"),
    year: Yup.string()
      .min(4, "Year must be at least 4 characters")
      .required("Required field"),
    mileage: Yup.string()
      .min(2, "Mileage must be at least 2 characters")
      .required("Required field"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("submit values *** ", values);
      // TODO: save form data
      void router.push("/investor/done");
    },
  });

  const handlePhoneChange = (newPhone: string): void => {
    setPhone(newPhone);
    void formik.setFieldValue("phone", newPhone);
  };

  return (
    <Layout title="Investor info">
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "500px",
                gap: 24,
              }}
            >
              <Box margin={4}>
                <Typography variant="h1">
                  Share you car with our company
                </Typography>
                <Typography variant="overline">
                  Scan your driver’s or enter your information exactly as it
                  appears on your license.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 3,
                    gap: 2,
                  }}
                >
                  <FormControl>
                    <Typography variant="overline">First name</Typography>
                    <TextField
                      name="firstName"
                      label={
                        formik.values.firstName !== "" ? "" : "e.g. Atlanta"
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      error={
                        formik.touched.firstName === true &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName === true &&
                        formik.errors.firstName
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <Typography variant="overline">Email</Typography>
                    <TextField
                      name="email"
                      label={formik.values.email !== "" ? "" : "e.g. Atlanta"}
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
                    <Typography variant="overline">Phone</Typography>
                    <PhoneInput
                      country={"us"}
                      value={phone}
                      onChange={(phone) => {
                        handlePhoneChange(phone);
                      }}
                      inputStyle={{
                        width: "100%",
                      }}
                    />
                  </FormControl>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <FormControl sx={{ width: "100%" }}>
                      <Typography variant="overline">Make</Typography>
                      <TextField
                        name="make"
                        label={formik.values.make !== "" ? "" : "e.g. Atlanta"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.make}
                        error={
                          formik.touched.make === true &&
                          Boolean(formik.errors.make)
                        }
                        helperText={
                          formik.touched.make === true && formik.errors.make
                        }
                      />
                    </FormControl>
                    <FormControl sx={{ width: "100%" }}>
                      <Typography variant="overline">Model</Typography>
                      <TextField
                        name="model"
                        label={formik.values.model !== "" ? "" : "e.g. Atlanta"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.model}
                        error={
                          formik.touched.model === true &&
                          Boolean(formik.errors.model)
                        }
                        helperText={
                          formik.touched.model === true && formik.errors.model
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <FormControl sx={{ width: "100%" }}>
                      <Typography variant="overline">Year</Typography>
                      <TextField
                        name="year"
                        label={formik.values.year !== "" ? "" : "e.g. Atlanta"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.year}
                        error={
                          formik.touched.year === true &&
                          Boolean(formik.errors.year)
                        }
                        helperText={
                          formik.touched.year === true && formik.errors.year
                        }
                      />
                    </FormControl>
                    <FormControl sx={{ width: "100%" }}>
                      <Typography variant="overline">Mileage</Typography>
                      <TextField
                        name="mileage"
                        label={
                          formik.values.mileage !== "" ? "" : "e.g. Atlanta"
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mileage}
                        error={
                          formik.touched.mileage === true &&
                          Boolean(formik.errors.mileage)
                        }
                        helperText={
                          formik.touched.mileage === true &&
                          formik.errors.mileage
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 3,
                      gap: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={!formik.isValid || !formik.dirty}
                    >
                      Registration
                    </Button>
                    <Typography sx={{ textAlign: "center", color: "#BDC7CB" }}>
                      Or
                    </Typography>
                    <GoogleButton returnUrl="/investor/done" />
                    <FacebookButton returnUrl="/investor/done" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </FormikProvider>
    </Layout>
  );
};

export default InvestorInfo;
