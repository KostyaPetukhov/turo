import { type FC, useState } from "react";
import { useRouter, type NextRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";

import Layout from "../layouts/main";

import successImg from "../assets/images/success.png";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";

const steps = ["Mobile number", "Profile photo", "Driver license"];

const MobileNumberForm = dynamic(
  async () => await import("../conponents/FirstTrip/MobileNumberForm"),
  {
    ssr: false,
  },
);

const ProfilePhotoForm = dynamic(
  async () => await import("../conponents/FirstTrip/ProfilePhotoForm"),
  {
    ssr: false,
  },
);

const DriverLicenseForm = dynamic(
  async () => await import("../conponents/FirstTrip/DriverLicenseForm"),
  {
    ssr: false,
  },
);

const FirstTrip: FC = () => {
  const router: NextRouter = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    isPhoneNumberCopmlete: true,
    isProfilePhotoCopmlete: true,
    isDriverLicenseCopmlete: false,
  });

  const isStepComplete = (step: number): boolean => {
    switch (step) {
      case 0:
        return formData.isPhoneNumberCopmlete;
      case 1:
        return formData.isProfilePhotoCopmlete;
      case 2:
        return formData.isDriverLicenseCopmlete;
      default:
        return false;
    }
  };

  const handleNext = (): void => {
    if (isStepComplete(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      // Добавьте логику обработки случая, когда форма не заполнена
      alert("Пожалуйста, заполните все поля формы");
    }
  };

  // const handleBack = (): void => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const getStepContent = (step: number): JSX.Element => {
    switch (step) {
      case 0:
        return (
          <MobileNumberForm
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNext}
          />
        );
      case 1:
        return (
          <ProfilePhotoForm
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNext}
          />
        );
      case 2:
        return (
          <DriverLicenseForm
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNext}
          />
        );
      default:
        return <div>Unknow step</div>;
    }
  };

  const handleRouterPush = (): void => {
    void router.push("/");
  };

  return (
    <Layout title={"First trip"}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box style={{ margin: "30px", maxWidth: "500px" }}>
          <Typography variant="h1">Get approval to drive</Typography>
          <p style={{ color: "#7B7B7B" }}>
            Since this is your first trip, you’ll need to provide us with some
            information before you can check out.
          </p>
          <Box style={{ marginTop: "30px" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 3,
                    }}
                  >
                    <Image
                      src={successImg}
                      alt={"Form complete success"}
                      height={200}
                      width={300}
                    />
                  </Box>
                  <Typography variant="h1" sx={{ marginTop: 4 }}>
                    All done
                  </Typography>
                  <Typography sx={{ color: "#7B7B7B", marginTop: 2 }}>
                    Congratulations, you have successfully created your account.
                    Now you can enjoy all the benefits of traveling with our
                    app. Good luck!
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleRouterPush}
                    sx={{ marginTop: 5, marginBottom: 1 }}
                  >
                    Got it
                  </Button>
                </>
              ) : (
                <div>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "30px",
                    }}
                  >
                    {getStepContent(activeStep)}
                  </Box>
                  {/* управлять из формы */}
                  {/* <div>
                    <Button
                      color="secondary"
                      variant="contained"
                      // disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1
                        ? "Finish"
                        : "Save and continue"}
                    </Button>
                  </div> */}
                </div>
              )}
            </div>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default FirstTrip;
