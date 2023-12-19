import { type FC, type Dispatch, type SetStateAction, useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { MuiOtpInput } from "mui-one-time-password-input";

import { Button, Typography, Box, Checkbox } from "@mui/material";

interface MobileNumberFormProps {
  formData: {
    isPhoneNumberCopmlete: boolean;
    isProfilePhotoCopmlete: boolean;
    isDriverLicenseCopmlete: boolean;
  };
  setFormData: Dispatch<
    SetStateAction<{
      isPhoneNumberCopmlete: boolean;
      isProfilePhotoCopmlete: boolean;
      isDriverLicenseCopmlete: boolean;
    }>
  >;
  handleNextStep: () => void;
}

const MobileNumberForm: FC<MobileNumberFormProps> = (props) => {
  const { formData, setFormData, handleNextStep } = props;
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isUpdatedChecked, setIsUpdatedChecked] = useState(false);

  const handlePhoneChange = (newPhone: string): void => {
    setPhone(newPhone);
  };

  const handleOtpChange = (newValue: string): void => {
    setOtp(newValue);
  };

  const handleCheckBoxClick = (isUpdatedChecked: boolean): void => {
    setIsUpdatedChecked(!isUpdatedChecked);
  };

  const handleSendCodeClick = (): void => {
    // TODO: запрос для генерации кода
    console.log("send code");

    setIsCodeSent(true);
  };

  const handleVerifyCodeClick = (): void => {
    // TODO: логика для проверки кода
    console.log("Verifying code:", otp);
    setFormData({ ...formData, isPhoneNumberCopmlete: true });
    handleNextStep();
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "65vh",
        position: "relative",
      }}
    >
      <p>
        {isCodeSent ? (
          <div>
            Please enter the code sent to <b> +{phone}</b>
          </div>
        ) : (
          `Enter your mobile number and we'll send you a verification code.`
        )}
      </p>
      <Typography variant="overline">Phone number</Typography>
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={(phone) => {
          handlePhoneChange(phone);
        }}
        inputStyle={{
          width: "100%",
        }}
      />
      {!isCodeSent && (
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            height: 24,
            marginTop: 8,
          }}
        >
          <Checkbox
            id="sendInfo"
            checked={isUpdatedChecked}
            onChange={() => {
              handleCheckBoxClick(isUpdatedChecked);
            }}
          />
          <Typography>Get trip updates via text</Typography>
        </Box>
      )}
      {!isCodeSent ? (
        <Box
          style={{
            marginTop: "auto",
            position: "sticky",
            width: "100%",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Button
            variant="contained"
            style={{ marginBottom: 32 }}
            onClick={handleSendCodeClick}
          >
            Get the code
          </Button>
        </Box>
      ) : (
        <Box
          style={{
            maxWidth: "430px",
          }}
        >
          <Typography variant="overline">Code</Typography>
          <MuiOtpInput
            length={6}
            gap={1}
            value={otp}
            onChange={handleOtpChange}
          />
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <Typography>Didn’t receive the text?</Typography>
            <Typography
              color="primary"
              style={{ fontWeight: 500, cursor: "pointer" }}
              onClick={handleSendCodeClick}
            >
              Resent code
            </Typography>
          </Box>
          <Button
            variant="contained"
            style={{ marginTop: 32 }}
            onClick={handleVerifyCodeClick}
            disabled={otp.length < 6}
          >
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MobileNumberForm;
