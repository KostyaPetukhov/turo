import { type FC } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Button from "@mui/material/Button";

import googleIcon from "../../assets/icons/google.svg";

const GoogleButton: FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = (searchParams.get("callbackUrl") as string) ?? "/profile";

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
