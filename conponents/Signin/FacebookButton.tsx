import { type FC } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@mui/material";

import facebookIcon from "../../assets/icons/facebook.svg";

const FacebookButton: FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = (searchParams.get("callbackUrl") as string) ?? "/profile";

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
