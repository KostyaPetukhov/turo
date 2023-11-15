import { type FC } from "react";
import { useRouter, type NextRouter } from "next/router";
import Image from "next/image";

import Layout from "../layouts/main";
import GoogleButton from "../conponents/Signin/GoogleButton";
import FacebookButton from "../conponents/Signin/FacebookButton";
import AppleButton from "../conponents/Signin/AppleButton";
import SignInFrom from "../conponents/Signin/SignInForm";

import closeIcon from "../assets/icons/arrow-left.svg";
import styles from "../styles/Signin.module.css";

const Signin: FC = () => {
  const router: NextRouter = useRouter();

  const handleRouterBack = (): void => {
    router.back();
  };

  return (
    <Layout title={"Sign in"}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.closeIcon} onClick={handleRouterBack}>
            <Image src={closeIcon} alt="Go back" />
          </div>
          <h1 className={styles.title}>Log in</h1>
          <div className={styles.buttonsContainer}>
            <AppleButton />
            <GoogleButton />
            <FacebookButton />
          </div>
          <h2 className={styles.subtitle}>Email log in</h2>
          <SignInFrom />
          <div className={styles.terms}>
            Terms of service and privacy policy
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
