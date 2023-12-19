import {
  type FC,
  type Dispatch,
  type SetStateAction,
  useState,
  useEffect,
} from "react";

import { Box, Button, Typography } from "@mui/material";
import DriverLicenseData from "./DriverLicenseData";
import DriverLicensePhoto from "./DriverLicensePhoto";

interface DriverLicenseFormProps {
  formData: {
    isPhoneNumberCopmlete: boolean;
    isProfilePhotoCopmlete: boolean;
    isDriverLicenseCopmlete: boolean;
  };
  setFormData: Dispatch<
    SetStateAction<{
      isPhoneNumberCopmlete: boolean;
      isProfilePhotoCopmlete: boolean;
      isDriverLicenseCopmlete: boolean;
    }>
  >;
  handleNextStep: () => void;
}

const DriverLicenseForm: FC<DriverLicenseFormProps> = (props) => {
  const { formData, setFormData, handleNextStep } = props;
  const [isDriverLicenseDataSuccess, setIsDriverLicenseDataSuccess] =
    useState(false);

  const [frontPhoto, setFrontPhoto] = useState("");
  const [backPhoto, setBackPhoto] = useState("");
  const [selfiePhoto, setSelfiePhoto] = useState("");

  const handleSubmit = (): void => {
    // TODO: логика оптравки значений
    setFormData({ ...formData, isDriverLicenseCopmlete: true });
    handleNextStep();
  };

  useEffect(() => {
    if (isDriverLicenseDataSuccess) {
      setFormData({ ...formData, isDriverLicenseCopmlete: true });
    }
  }, [isDriverLicenseDataSuccess]);

  return (
    <>
      {!isDriverLicenseDataSuccess ? (
        <DriverLicenseData
          setIsDriverLicenseDataSuccess={setIsDriverLicenseDataSuccess}
        />
      ) : (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1">Add driver’s license photos</Typography>
          <Typography sx={{ color: "#7B7B7B", marginTop: 2 }}>
            You need to add: License front, License back and selfie with license
            photos. They should be clear, with no foreign objects in the frame.
          </Typography>
          <DriverLicensePhoto
            photo={frontPhoto}
            setPhoto={setFrontPhoto}
            title="1. License front"
            description=" Upload a photo of the front side of your driver`s license"
          />
          <DriverLicensePhoto
            photo={backPhoto}
            setPhoto={setBackPhoto}
            title="2. License back"
            description=" Upload a photo of the back side of your driver`s license"
          />
          <DriverLicensePhoto
            photo={selfiePhoto}
            setPhoto={setSelfiePhoto}
            title="3. Selfie with license"
            description=" Upload a selfie photo with your driver's license"
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ marginTop: 3, marginBottom: 1 }}
            disabled={
              frontPhoto.length === 0 ||
              backPhoto.length === 0 ||
              selfiePhoto.length === 0
            }
          >
            Next
          </Button>
        </Box>
      )}
    </>
  );
};

export default DriverLicenseForm;
