import { type FC } from "react";
import { useRouter, type NextRouter } from "next/router";
import Image from "next/image";

import Layout from "../layouts/main";
import GoogleButton from "../conponents/Signin/GoogleButton";
import FacebookButton from "../conponents/Signin/FacebookButton";
import AppleButton from "../conponents/Signin/AppleButton";
import SignUpForm from "../conponents/Signin/SignupForm";

import closeIcon from "../assets/icons/arrow-left.svg";
import styles from "../styles/Signin.module.css";

const Signup: FC = () => {
  const router: NextRouter = useRouter();

  const handleRouterBack = (): void => {
    void router.back();
  };

  return (
    <Layout title={"Sign up"}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.closeIcon} onClick={handleRouterBack}>
            <Image src={closeIcon} alt="Go back" />
          </div>
          <h1 className={styles.title}>Sign up</h1>
          <div className={styles.buttonsContainer}>
            <AppleButton />
            <GoogleButton />
            <FacebookButton />
          </div>
          <h2 className={styles.subtitle}>Email sign up</h2>
          <SignUpForm />
          <div className={styles.terms}>
            Terms of service and privacy policy
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
