import { type FC } from "react";
import { useRouter, type NextRouter } from "next/router";
import Image from "next/image";

import Layout from "../../layouts/main";

import investorImg from "../../assets/images/investor.png";
import shieldIcon from "../../assets/icons/shield.svg";
import supportIcon from "../../assets/icons/support.svg";
import helpIcon from "../../assets/icons/help.svg";
import engineIcon from "../../assets/icons/engine.svg";

import { Box, Button, Typography, Divider } from "@mui/material";

const Investor: FC = () => {
  const router: NextRouter = useRouter();

  const handleRouterPush = (): void => {
    void router.push(`/investor/info`);
  };

  return (
    <Layout title="Become an investor">
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
          }}
        >
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
            <Image src={investorImg} alt="Become an investor" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="h1">Become an investor</Typography>
              <Typography variant="overline">
                Ensure a seamless trip experience by allowing notifications –
                it’s the easiest way to keep track of your trips and in-app
                messages.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: 3,
                gap: 2,
              }}
            >
              <Image src={engineIcon} alt="Important trip instructions" />
              <Box>
                <Typography variant="subtitle1">How it works</Typography>
                <Typography
                  variant="overline"
                  sx={{ marginTop: "4px", fontSize: 16 }}
                >
                  Ensure a seamless trip experience by allowing notifications –
                  it’s the easiest way to keep track of your trips and in.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: 3,
                gap: 2,
              }}
            >
              <Image src={shieldIcon} alt="Important trip instructions" />
              <Box>
                <Typography variant="subtitle1">You’re covered</Typography>
                <Typography
                  variant="overline"
                  sx={{ marginTop: "4px", fontSize: 16 }}
                >
                  Ensure a seamless trip experience by allowing notifications –
                  it’s the easiest way to keep track of your trips and in.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: 3,
                gap: 2,
              }}
            >
              <Image src={supportIcon} alt="Important trip instructions" />
              <Box>
                <Typography variant="subtitle1">We’ve got your back</Typography>
                <Typography
                  variant="overline"
                  sx={{ marginTop: "4px", fontSize: 16 }}
                >
                  Ensure a seamless trip experience by allowing notifications –
                  it’s the easiest way to keep track of your trips and in.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: 3,
                gap: 2,
              }}
            >
              <Image src={helpIcon} alt="Important trip instructions" />
              <Box>
                <Typography variant="subtitle1">
                  Use your commercial insurance
                </Typography>
                <Typography
                  variant="overline"
                  sx={{ marginTop: "4px", fontSize: 16 }}
                >
                  Ensure a seamless trip experience by allowing notifications –
                  it’s the easiest way to keep track of your trips and in.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{
              width: "100%",
              height: "1px",
              border: "1px dashed #EFEFEF",
              marginTop: 3,
              marginBottom: 3,
            }}
          />
          <Typography variant="overline">
            Ensure a seamless trip experience by allowing notifications – it’s
            the easiest way to keep track of your trips and in.
          </Typography>
          <Button
            variant="contained"
            onClick={handleRouterPush}
            sx={{ marginTop: 3, marginBottom: 1 }}
          >
            Get started
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Investor;
