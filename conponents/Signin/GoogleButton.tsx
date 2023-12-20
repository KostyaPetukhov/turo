import { type FC } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Button from "@mui/material/Button";

import googleIcon from "../../assets/icons/google.svg";

interface GoogleButtonProps {
  returnUrl: string;
}

const GoogleButton: FC<GoogleButtonProps> = ({ returnUrl }) => {
  const callbackUrl = returnUrl.length > 0 ? returnUrl : "/profile";

  const handleSignInWithGoogle = (): void => {
    void signIn("google", { callbackUrl });
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleSignInWithGoogle}
    >
      <Image
        src={googleIcon}
        alt="Google Icon"
        width={24}
        height={24}
        style={{ marginRight: 8 }}
      />
      Continue with Google
    </Button>
  );
};

export default GoogleButton;
