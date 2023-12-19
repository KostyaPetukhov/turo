import {
  type FC,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from "react";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

import CountrySelect from "../FormElements/CountrySelect";
import { Button, TextField, FormControl, Box, Typography } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface DriverLicenseDataProps {
  setIsDriverLicenseDataSuccess: Dispatch<SetStateAction<boolean>>;
}

const DriverLicenseData: FC<DriverLicenseDataProps> = (props) => {
  const { setIsDriverLicenseDataSuccess } = props;

  const initialValues = {
    country: "United States",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    licenseNumber: "",
    dateOfBirth: null,
    expirationDate: null,
  };

  const validationSchema = Yup.object({
    country: Yup.string().required("Country is required"),
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("Fist name is required"),
    middleName: Yup.string(),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),
    licenseNumber: Yup.string().required("License number is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
    expirationDate: Yup.date().required("Expiration date is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("submit values", values);
      setIsDriverLicenseDataSuccess(true);
    },
  });

  const handleCountryChange = (
    _: ChangeEvent<unknown>,
    value: { label: string | null } | null,
  ): void => {
    void formik.setFieldValue("country", Boolean(value?.label) || "");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Box style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <FormControl>
              <Typography variant="overline">Country</Typography>
              <CountrySelect
                onChange={handleCountryChange}
                error={Boolean(formik.errors.country)}
                helperText={
                  formik.touched.country === true &&
                  formik.errors.country != null
                    ? formik.errors.country
                    : ""
                }
              />
            </FormControl>
            <FormControl>
              <Typography variant="overline">First name</Typography>
              <TextField
                name="firstName"
                label={
                  formik.values.firstName !== "" ? "" : "Enter your first name"
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
              <Typography variant="overline">Middle name</Typography>
              <TextField
                name="middleName"
                label={
                  formik.values.middleName !== ""
                    ? ""
                    : "Enter your middle name"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.middleName}
                error={
                  formik.touched.middleName === true &&
                  Boolean(formik.errors.middleName)
                }
                helperText={
                  formik.touched.middleName === true && formik.errors.middleName
                }
              />
            </FormControl>
            <FormControl>
              <Typography variant="overline">Last name</Typography>
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
              <Typography variant="overline">License number</Typography>
              <TextField
                name="licenseNumber"
                label={
                  formik.values.licenseNumber !== ""
                    ? ""
                    : "Enter your license number"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.licenseNumber}
                error={
                  formik.touched.licenseNumber === true &&
                  Boolean(formik.errors.licenseNumber)
                }
                helperText={
                  formik.touched.licenseNumber === true &&
                  formik.errors.licenseNumber
                }
              />
            </FormControl>
            <FormControl>
              <Typography variant="overline">Date of birth</Typography>
              <MobileDatePicker
                name="dateOfBirth"
                value={formik.values.dateOfBirth}
                onChange={(date) => {
                  void formik.setFieldValue("dateOfBirth", date);
                }}
                disableFuture
                // slotProps={{
                //   textField: {
                //     helperText: formik.errors.dateOfBirth,
                //   },
                // }}
              />
            </FormControl>
            <FormControl>
              <Typography variant="overline">Expiration date</Typography>
              <MobileDatePicker
                name="expirationDate"
                onChange={(date) => {
                  void formik.setFieldValue("expirationDate", date);
                }}
                value={formik.values.expirationDate}
                disablePast
              />
            </FormControl>
            <Typography sx={{ fontSize: 14 }}>
              By continuing, you agree that App may collect your{" "}
              <a
                style={{
                  textDecoration: "underline",
                  color: "#0494F5",
                }}
              >
                auto insurance score.
              </a>{" "}
              Your information is stored securely.
            </Typography>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ margin: "32px auto" }}
            disabled={!formik.isValid || !formik.dirty}
          >
            Save and continue
          </Button>
        </form>
      </FormikProvider>
    </LocalizationProvider>
  );
};

export default DriverLicenseData;
