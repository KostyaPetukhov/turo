import { type FC, type Dispatch, type SetStateAction } from "react";
import Image from "next/image";

import PhotoUploader from "../PhotoUploader/PhotoUploader";
import { Box, Typography } from "@mui/material";
import uploadPhotoIcon from "../../assets/icons/upload.svg";
import changePhotoIcon from "../../assets/icons/edit.svg";

interface DriverLicensePhotoProps {
  photo: string;
  setPhoto: Dispatch<SetStateAction<string>>;
  title: string;
  description: string;
}

const DriverLicensePhoto: FC<DriverLicensePhotoProps> = (props) => {
  const { photo, setPhoto, title, description } = props;

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box marginTop={3} marginBottom={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>{title}</Typography>
          <PhotoUploader
            setPhoto={setPhoto}
            buttonContent={
              <Image
                src={changePhotoIcon}
                alt="Change photo"
                style={{ cursor: "pointer" }}
              />
            }
          />
        </Box>

        {photo.length === 0 ? (
          <PhotoUploader
            setPhoto={setPhoto}
            buttonContent={
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: 200,
                  backgroundColor: "#F0F9FF",
                  cursor: "pointer",
                  border: "2px dashed #0494F5",
                  borderRadius: "4px",
                }}
              >
                <Image src={uploadPhotoIcon} alt="Upload photo" />
                <Typography color="primary" sx={{ marginTop: "16px" }}>
                  {description}
                </Typography>
              </Box>
            }
          />
        ) : (
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              border: "2px dashed #0494F5",
              borderRadius: "4px",
            }}
          >
            <Image
              alt="User"
              src={photo}
              height={200}
              width={400}
              layout="responsive"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DriverLicensePhoto;
