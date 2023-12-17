import { Typography } from "@mui/material";
import { type FC } from "react";

interface PhotoUploaderProps {
  title: string;
  setPhoto: (photo: string) => void;
}

const PhotoUploader: FC<PhotoUploaderProps> = ({ title, setPhoto }) => {
  const handleAddPhotoClick = (): void => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.capture = "true";

    fileInput.addEventListener("change", (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];

      if (selectedFile != null) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const photoUrl = reader.result as string;
          setPhoto(photoUrl);
        };
        reader.readAsDataURL(selectedFile);
      }
    });

    fileInput.click();
  };

  return (
    <div>
      <Typography
        color="primary"
        sx={{ cursor: "pointer" }}
        onClick={handleAddPhotoClick}
      >
        {title}
      </Typography>
    </div>
  );
};

export default PhotoUploader;
