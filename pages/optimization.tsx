import { type FC } from "react";
import { useRouter, type NextRouter } from "next/router";
import Image from "next/image";

import Layout from "../layouts/main";

import styles from "../styles/Optimization.module.css";
import optimazedImg from "../assets/images/optimazed.png";

import Button from "@mui/material/Button";

const Optimization: FC = () => {
  const router: NextRouter = useRouter();
  const handleRouterPush = (): void => {
    void router.push("/info?openModal=true");
  };
  return (
    <Layout title="Optimization">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Image
            src={optimazedImg}
            alt="Information about optimizing your application"
          />
          <h1 className={styles.title}>Help us optimize your App experience</h1>
          <p className={styles.paragraph}>
            Faucibus mauris eros morbi viverra sit tortor. Orci egestas
            facilisis nunc ullamcorper platea facilisis lacus habitasse. Enim
            erat dapibus consectetur curabitur ut.
          </p>
          <p className={styles.paragraph}>
            Faucibus mauris eros morbi viverra sit tortor. Orci egestas
            facilisis nunc ullamcorper platea facilisis lacus habitasse. Enim
            erat dapibus consectetur curabitur ut.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Button className={styles.button} onClick={handleRouterPush}>
            View options
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Optimization;
