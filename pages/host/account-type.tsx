import { type FC, type ChangeEvent, useState } from "react";
import { useRouter, type NextRouter } from "next/router";
import Image from "next/image";

import Layout from "../../layouts/main";

import accountTypeImg from "../../assets/images/accountType.png";

import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const AccountType: FC = () => {
  const router: NextRouter = useRouter();
  const [selectedRole, setSelectedRole] = useState("company");

  const handleRoleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedRole(event.target.value);
  };

  const handleRouterPush = (): void => {
    // void router.push(`account/${selectedRole}`);
    // пока нет страницы персонального аккаунта
    void router.push(`account/company`);
  };

  return (
    <Layout title="Account type">
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
            <Image src={accountTypeImg} alt="Choose account type" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="h1">Account type</Typography>
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
                <FormControlLabel
                  value="personal"
                  control={<Radio />}
                  label=""
                />
                <Box>
                  <Typography variant="subtitle1">Personal account</Typography>
                  <Typography variant="overline" sx={{ marginTop: "4px" }}>
                    Dependable – Hit the road confidently with solid protection.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-start", marginTop: 3 }}
              >
                <FormControlLabel
                  value="company"
                  control={<Radio />} // Set border color
                  label=""
                />
                <Box>
                  <Typography variant="subtitle1">Company account</Typography>
                  <Typography variant="overline" sx={{ marginTop: "4px" }}>
                    Cost-effective – Stay covered while pinching some pennies.
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

export default AccountType;
