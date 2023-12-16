import { type FC } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@mui/material";

import appleIcon from "../../assets/icons/apple.svg";

const AppleButton: FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = (searchParams.get("callbackUrl") as string) ?? "/profile";

  const handleSignInWithApple = (): void => {
    void signIn("apple", { callbackUrl });
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleSignInWithApple}
    >
      <Image
        src={appleIcon}
        alt="Apple Icon"
        width={24}
        height={24}
        style={{ marginRight: 8 }}
      />
      Continue with Apple
    </Button>
  );
};

export default AppleButton;
