import { Typography } from "@mui/material";
import { type FC, useState } from "react";
// import { useMediaQuery } from "react-responsive";

interface PhotoUploaderProps {
  title: string;
  setPhoto: (photo: string) => void;
}

const PhotoUploader: FC<PhotoUploaderProps> = ({ title, setPhoto }) => {
  const [showOptions, setShowOptions] = useState(false);

  //   const isMobile = useMediaQuery({ maxWidth: 767 });
  const isMobile = true;

  const handleAddPhotoClick = (): void => {
    if (isMobile) {
      setShowOptions(!showOptions);
    } else {
      handleGalleryClick();
    }
  };

  const handleCameraClick = (): void => {
    setShowOptions(false);

    try {
      void navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          const video = document.createElement("video");
          document.body.appendChild(video);

          video.srcObject = stream;

          video.onloadeddata = () => {
            handleLoadedData(video, stream);
          };

          video.play().catch((error) => {
            console.error("Error playing video:", error);
            // Если возникает ошибка при воспроизведении видео, все равно вызываем handleLoadedData
            handleLoadedData(video, stream);
          });
        });
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleLoadedData = (
    video: HTMLVideoElement,
    stream: MediaStream,
  ): void => {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);

    const photoUrl = canvas.toDataURL("image/png");
    setPhoto(photoUrl);

    // Очистка ресурсов
    video.pause();
    stream.getTracks().forEach((track) => {
      track.stop();
    });
    document.body.removeChild(video);
  };

  const handleGalleryClick = (): void => {
    setShowOptions(false);

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

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
      {showOptions && isMobile && (
        <div>
          <button onClick={handleCameraClick}>Сделать фото</button>
          <button onClick={handleGalleryClick}>Загрузить из галереи</button>
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
