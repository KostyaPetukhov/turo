import { type FC, type Dispatch, type SetStateAction, useState } from "react";
import Image from "next/image";

import PhotoUploader from "../PhotoUploader/PhotoUploader";
import { Box, Button, Avatar } from "@mui/material";
import addPhotoIcon from "../../assets/icons/add.svg";
import changePhotoIcon from "../../assets/icons/edit.svg";

interface ProfilePhotoFormProps {
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

const ProfilePhotoForm: FC<ProfilePhotoFormProps> = (props) => {
  const { formData, setFormData, handleNextStep } = props;
  const [photo, setPhoto] = useState("");

  const handleSubmit = (): void => {
    // TODO: логика для сохранения фото
    setFormData({ ...formData, isProfilePhotoCopmlete: true });
    handleNextStep();
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>
        Please provide a clear photo of your face so your hosts can recognize
        you.
      </p>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "80px auto",
          gap: 16,
        }}
      >
        {photo.length === 0 ? (
          <>
            <Avatar
              alt="User"
              src={photo}
              sx={{ width: "150px", height: "150px" }}
            />
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Image src={addPhotoIcon} alt="Add a photo" />
              <PhotoUploader title="Add a photo" setPhoto={setPhoto} />
            </Box>
          </>
        ) : (
          <>
            <Avatar
              alt="User"
              src={photo}
              sx={{ width: "150px", height: "150px" }}
            />
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Image src={changePhotoIcon} alt="Change photo" />
              <PhotoUploader title="Change photo" setPhoto={setPhoto} />
            </Box>
          </>
        )}
      </Box>
      <Button variant="contained" onClick={handleSubmit}>
        Save and continue
      </Button>
    </Box>
  );
};

export default ProfilePhotoForm;
