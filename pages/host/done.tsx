import { type FC } from "react";
import { useRouter, type NextRouter } from "next/router";
import Image from "next/image";

import Layout from "../../layouts/main";

import accountTypeImg from "../../assets/images/accountType.png";

import { Box, Button, Typography } from "@mui/material";

const InvestorDone: FC = () => {
  const router: NextRouter = useRouter();

  const handleRouterPush = (): void => {
    void router.push(`/`);
  };

  return (
    <Layout title="Done">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            margin: "30px",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "83vh",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                border: "1px solid #EFEFEF",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                gap: 2,
              }}
            >
              <Image src={accountTypeImg} alt="Account successful created" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginTop: 4,
              }}
            >
              <Typography variant="h1">Congratulation!</Typography>
              <Typography variant="overline">
                Your account was successful created. We wish you safe travels
                and pleasant trips.
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            onClick={handleRouterPush}
            sx={{ marginTop: 3, marginBottom: 1 }}
          >
            Got it
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default InvestorDone;
