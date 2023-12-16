import {
  type FC,
  type Dispatch,
  type SetStateAction,
  useState,
  useRef,
} from "react";
import Image from "next/image";

import { Box, Button, Avatar, Typography } from "@mui/material";

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const file = event.target.files?.[0];
    if (file != null) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTypographyClick = (): void => {
    if (fileInputRef.current != null) {
      fileInputRef.current.click();
    }
  };

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
            {/* Скрытый input */}
            <input
              type="file"
              accept="image/*"
              //   capture="camera"
              capture={true}
              onChange={handleFileChange}
              style={{ display: "none" }}
              ref={fileInputRef}
            />
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Image src={addPhotoIcon} alt="Go back" />
              <Typography
                color="primary"
                onClick={handleTypographyClick}
                sx={{ cursor: "pointer" }}
              >
                Add a photo
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Avatar
              alt="User"
              src={photo}
              sx={{ width: "150px", height: "150px" }}
            />
            {/* Скрытый input */}
            <input
              type="file"
              accept="image/*"
              //   capture="camera"
              capture={true}
              onChange={handleFileChange}
              style={{ display: "none" }}
              ref={fileInputRef}
            />
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Image src={changePhotoIcon} alt="Go back" />
              <Typography
                color="primary"
                onClick={handleTypographyClick}
                sx={{ cursor: "pointer" }}
              >
                Change photo
              </Typography>
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
