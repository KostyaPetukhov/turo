import { type FC } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "@mui/material";

import facebookIcon from "../../assets/icons/facebook.svg";

interface FacebookButtonProps {
  returnUrl: string;
}

const FacebookButton: FC<FacebookButtonProps> = ({ returnUrl }) => {
  const callbackUrl = returnUrl.length > 0 ? returnUrl : "/profile";

  const handleSignInWithFacebook = (): void => {
    void signIn("facebook", { callbackUrl });
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleSignInWithFacebook}
    >
      <Image
        src={facebookIcon}
        alt="Facebook Icon"
        width={24}
        height={24}
        style={{ marginRight: 8 }}
      />
      Continue with Facebook
    </Button>
  );
};

export default FacebookButton;
