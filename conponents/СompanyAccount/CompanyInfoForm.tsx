import { type FC, type Dispatch, type SetStateAction, useState } from "react";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import Layout from "../../layouts/main";
import { Box, Button, Typography, FormControl, TextField } from "@mui/material";

interface CompanyInfo {
  companyName: string;
  companyEmail: string;
  buisnessAddress: string;
  phone: string;
}

interface CompanyInfoFormProps {
  setIisCompanyInfoSuccess: Dispatch<SetStateAction<boolean>>;
  setCompanyInfo: Dispatch<SetStateAction<CompanyInfo>>;
}

const CompanyInfoForm: FC<CompanyInfoFormProps> = (props) => {
  const { setIisCompanyInfoSuccess, setCompanyInfo } = props;

  const [phone, setPhone] = useState("");

  const initialValues = {
    companyName: "",
    companyEmail: "",
    buisnessAddress: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    companyName: Yup.string()
      .min(2, "Company name must be at least 2 characters")
      .required("Required field"),
    companyEmail: Yup.string()
      .email("Invalid email address")
      .required("Required field"),
    buisnessAddress: Yup.string()
      .min(2, "Address must be at least 2 characters")
      .required("Required field"),
    phone: Yup.string().required("Required field"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setIisCompanyInfoSuccess(true);
      setCompanyInfo(values);
    },
  });

  const handlePhoneChange = (newPhone: string): void => {
    setPhone(newPhone);
    void formik.setFieldValue("phone", newPhone);
  };

  return (
    <Layout title="Company info">
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "500px",
                justifyContent: "space-between",
                minHeight: "88vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h1" marginTop={1} marginBottom={1}>
                  Company info
                </Typography>
                <FormControl>
                  <Typography variant="overline">Company name</Typography>
                  <TextField
                    name="companyName"
                    label={
                      formik.values.companyName !== "" ? "" : "e.g. Oranta"
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.companyName}
                    error={
                      formik.touched.companyName === true &&
                      Boolean(formik.errors.companyName)
                    }
                    helperText={
                      formik.touched.companyName === true &&
                      formik.errors.companyName
                    }
                  />
                </FormControl>
                <FormControl>
                  <Typography variant="overline">Company Email</Typography>
                  <TextField
                    name="companyEmail"
                    label={
                      formik.values.companyEmail !== ""
                        ? ""
                        : "e.g. helloorantaglobal@gmail.com"
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.companyEmail}
                    error={
                      formik.touched.companyEmail === true &&
                      Boolean(formik.errors.companyEmail)
                    }
                    helperText={
                      formik.touched.companyEmail === true &&
                      formik.errors.companyEmail
                    }
                  />
                </FormControl>
                <FormControl>
                  <Typography variant="overline">Buisness address</Typography>
                  <TextField
                    name="buisnessAddress"
                    label={
                      formik.values.buisnessAddress !== ""
                        ? ""
                        : "Country, city, street..."
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.buisnessAddress}
                    error={
                      formik.touched.buisnessAddress === true &&
                      Boolean(formik.errors.buisnessAddress)
                    }
                    helperText={
                      formik.touched.buisnessAddress === true &&
                      formik.errors.buisnessAddress
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
              </Box>
              <Box sx={{ marginTop: 3 }}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </FormikProvider>
    </Layout>
  );
};

export default CompanyInfoForm;
