import { type FC, useState } from "react";
import { useRouter, type NextRouter } from "next/router";
import Image from "next/image";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

import Layout from "../../layouts/main";
import DriverLicensePhoto from "../FirstTrip/DriverLicensePhoto";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  Box,
  Button,
  Typography,
  FormControl,
  TextField,
  Checkbox,
} from "@mui/material";

import infoIcon from "../../assets/icons/info.svg";

interface CompanyInfo {
  companyName: string;
  companyEmail: string;
  buisnessAddress: string;
  phone: string;
}

interface InsuranceSettingsFormProps {
  companyInfo: CompanyInfo;
}

const InsuranceSettingsForm: FC<InsuranceSettingsFormProps> = (props) => {
  const { companyInfo } = props;
  const router: NextRouter = useRouter();
  const [insuarenceCertificatePhoto, setInsuarenceCertificatePhoto] =
    useState("");

  const initialValues = {
    insuarenceCompanyName: "",
    ein: "",
    re: "",
    startDate: null,
    effectiveDate: null,
    lulaInsurance: true,
    personalInsurance: false,
    commerciallInsurance: false,
    consentUse: false,
  };

  const validationSchema = Yup.object({
    insuarenceCompanyName: Yup.string()
      .min(2, "Company name must be at least 2 characters")
      .required("Required field"),
    ein: Yup.string().required("Required field"),
    re: Yup.string().required("Required field"),
    startDate: Yup.date().required("Start is required"),
    effectiveDate: Yup.date().required("Effective date is required"),
    lulaInsurance: Yup.boolean(),
    personalInsurance: Yup.boolean(),
    commerciallInsurance: Yup.boolean(),
    consentUse: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("company info *** ");
      const copmanyAcountData = {
        ...companyInfo,
        ...values,
        insuarenceCertificatePhoto,
      };
      // TODO: save form data
      console.log("copmanyAcountData", copmanyAcountData);
      void router.push("/host/done");
    },
  });

  return (
    <Layout title="Insuarence settings">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                    Insurance settings
                  </Typography>
                  <FormControl>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 2,
                        }}
                      >
                        <Checkbox
                          id="lulaInsurance"
                          checked={formik.values.lulaInsurance}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          color="primary"
                          sx={{
                            backgroundColor: "#F0F9FF",
                            borderRadius: 1,
                            height: "48px",
                            width: "48px",
                          }}
                        />
                        <Box>
                          <Typography fontWeight={600}>
                            Lula insurance
                          </Typography>
                          <Typography variant="overline">
                            Dependable – Hit the road confidently with solid
                            protection.
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          height: "48px",
                          width: "48px",
                          backgroundColor: "#F8F8F8",
                          borderRadius: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={infoIcon}
                          alt="Info about lila insuarence"
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 2,
                        }}
                      >
                        <Checkbox
                          id="personalInsurance"
                          checked={formik.values.personalInsurance}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          color="primary"
                          sx={{
                            backgroundColor: "#F0F9FF",
                            borderRadius: 1,
                            height: "48px",
                            width: "48px",
                          }}
                        />
                        <Box>
                          <Typography fontWeight={600}>
                            Clients personal insurance
                          </Typography>
                          <Typography variant="overline">
                            Dependable – Hit the road confidently with solid
                            protection.
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          height: "48px",
                          width: "48px",
                          backgroundColor: "#F8F8F8",
                          borderRadius: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={infoIcon}
                          alt="Info about clients personal insuarence"
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 2,
                        }}
                      >
                        <Checkbox
                          id="commerciallInsurance"
                          checked={formik.values.commerciallInsurance}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          color="primary"
                          sx={{
                            backgroundColor: "#F0F9FF",
                            borderRadius: 1,
                            height: "48px",
                            width: "48px",
                          }}
                        />
                        <Box>
                          <Typography fontWeight={600}>
                            Company commercial insurance
                          </Typography>
                          <Typography variant="overline">
                            Dependable – Hit the road confidently with solid
                            protection.
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          height: "48px",
                          width: "48px",
                          backgroundColor: "#F8F8F8",
                          borderRadius: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={infoIcon}
                          alt="Info about company commercial insuarence"
                        />
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl>
                    <Typography variant="overline">
                      Insuarence company name
                    </Typography>
                    <TextField
                      name="insuarenceCompanyName"
                      label={
                        formik.values.insuarenceCompanyName !== ""
                          ? ""
                          : "e.g. Oranta"
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.insuarenceCompanyName}
                      error={
                        formik.touched.insuarenceCompanyName === true &&
                        Boolean(formik.errors.insuarenceCompanyName)
                      }
                      helperText={
                        formik.touched.insuarenceCompanyName === true &&
                        formik.errors.insuarenceCompanyName
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <Typography variant="overline">EIN</Typography>
                    <TextField
                      name="ein"
                      label={formik.values.ein !== "" ? "" : "e.g. 02902039"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.ein}
                      error={
                        formik.touched.ein === true &&
                        Boolean(formik.errors.ein)
                      }
                      helperText={
                        formik.touched.ein === true && formik.errors.ein
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <Typography variant="overline">RE</Typography>
                    <TextField
                      name="re"
                      label={formik.values.re !== "" ? "" : "e.g. R34ER738"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.re}
                      error={
                        formik.touched.re === true && Boolean(formik.errors.re)
                      }
                      helperText={
                        formik.touched.re === true && formik.errors.re
                      }
                    />
                  </FormControl>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <FormControl sx={{ width: "100%" }}>
                      <Typography variant="overline">Start date</Typography>
                      <MobileDatePicker
                        name="startDate"
                        onChange={(date) => {
                          void formik.setFieldValue("startDate", date);
                        }}
                        value={formik.values.startDate}
                        disableFuture
                      />
                    </FormControl>
                    <FormControl sx={{ width: "100%" }}>
                      <Typography variant="overline">Effective date</Typography>
                      <MobileDatePicker
                        name="effectiveDate"
                        onChange={(date) => {
                          void formik.setFieldValue("effectiveDate", date);
                        }}
                        value={formik.values.effectiveDate}
                        disablePast
                      />
                    </FormControl>
                  </Box>
                </Box>
                <Box>
                  <DriverLicensePhoto
                    photo={insuarenceCertificatePhoto}
                    setPhoto={setInsuarenceCertificatePhoto}
                    title="Upload certificate"
                    description="Upload photo of your insurance certificate"
                  />
                </Box>
                {insuarenceCertificatePhoto.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Checkbox
                      id="consentUse"
                      checked={formik.values.consentUse}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      color="primary"
                      sx={{
                        backgroundColor: "#F8F8F8",
                        borderRadius: 1,
                        height: "48px",
                        width: "48px",
                      }}
                    />
                    <Typography sx={{ color: "#7B7B7B" }}>
                      I consent to the use of my insurance for this application.
                    </Typography>
                  </Box>
                )}
                <Box sx={{ marginTop: 3 }}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={
                      !formik.isValid ||
                      !formik.dirty ||
                      insuarenceCertificatePhoto.length === 0
                    }
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
        </FormikProvider>
      </LocalizationProvider>
    </Layout>
  );
};

export default InsuranceSettingsForm;
