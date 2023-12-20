import { type FC, type ChangeEvent, useState } from "react";
import { useRouter, type NextRouter } from "next/router";
import Image from "next/image";

import Layout from "../layouts/main";

import chooseRoleImg from "../assets/images/choose-role.png";

import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const ChooseRole: FC = () => {
  const router: NextRouter = useRouter();
  const [selectedRole, setSelectedRole] = useState("host");

  const handleRoleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedRole(event.target.value);
  };

  const handleRouterPush = (): void => {
    void router.push(`/${selectedRole}`);
  };

  return (
    <Layout title="Choose role">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
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
            <Image src={chooseRoleImg} alt="Choose your role" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="h1">Choose your role</Typography>
              <Typography variant="overline">
                Ensure a seamless trip experience by allowing notifications –
                it’s the easiest way to keep track of your trips and in-app
                messages.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: 2 }}>
            <RadioGroup
              row
              aria-label="role"
              name="role"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <FormControlLabel value="host" control={<Radio />} label="" />
                <Box>
                  <Typography variant="subtitle1">Become a host</Typography>
                  <Typography variant="overline" sx={{ marginTop: "4px" }}>
                    Unleash your passion for cars and drive your career forward
                    as a host car enthusiast!
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-start", marginTop: 3 }}
              >
                <FormControlLabel
                  value="investor"
                  control={<Radio />} // Set border color
                  label=""
                />
                <Box>
                  <Typography variant="subtitle1">
                    Investor - share your car with our company
                  </Typography>
                  <Typography variant="overline" sx={{ marginTop: "4px" }}>
                    Unleash your passion for cars and drive your career forward
                    as a host car enthusiast!
                  </Typography>
                </Box>
              </Box>
            </RadioGroup>
          </Box>
          <Button
            variant="contained"
            onClick={handleRouterPush}
            sx={{ marginTop: 3, marginBottom: 1 }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default ChooseRole;
