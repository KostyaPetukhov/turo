import { type FC, type ReactNode, useRef } from "react";

interface PhotoUploaderProps {
  setPhoto: (photo: string) => void;
  buttonContent: ReactNode;
}

const PhotoUploader: FC<PhotoUploaderProps> = ({
  setPhoto,
  buttonContent,
  ...rest
}) => {
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

  const handleAddPhotoClick = (): void => {
    if (fileInputRef.current != null) {
      fileInputRef.current.click();
    }
  };

  return (
    <div {...rest}>
      <input
        accept="image/*"
        type="file"
        onChange={handleFileChange}
        autoComplete="off"
        tabIndex={-1}
        style={{ display: "none" }}
        ref={fileInputRef}
      ></input>
      <div onClick={handleAddPhotoClick}>{buttonContent}</div>
    </div>
  );
};

export default PhotoUploader;
