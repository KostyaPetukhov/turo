import { type FC } from "react";
import { useSession } from "next-auth/react";

import Layout from "../layouts/main";
import styles from "../styles/Home.module.css";

const Profile: FC = () => {
  const session = useSession();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>Not authenticated</p>;
  }

  return (
    <Layout title={"Home page"}>
      <h1 className={styles.title}>
        Profile of {session?.data && session?.data.user?.name}
      </h1>
      {session?.data?.user?.image && (
        <img
          src={session.data.user.image}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      )}
    </Layout>
  );
};

export default Profile;
