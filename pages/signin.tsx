import { type FC } from "react";

import GoogleButton from "../conponents/Signin/GoogleButton";
import Layout from "../layouts/main";
import styles from "../styles/Home.module.css";

const Signin: FC = () => {
  return (
    <Layout title={"Sign in"}>
      <h1 className={styles.title}>Sign in</h1>
      <GoogleButton />
    </Layout>
  );
};

export default Signin;
