import {
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { type VerificationCodeFormProps } from "../../../../types/formTypes";

const VerificationCode: React.FC<VerificationCodeFormProps> = ({
  textResources,
  handleSubmit,
}) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (timer !== null && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => (prev ? prev - 1 : null));
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent entering more than one character
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Automatically focus on the next input
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleResendCode = () => {
    setTimer(15); // Start 15-second countdown
    console.log("Code resent");
  };

  return (
    <>
      <FormLabel sx={{ textAlign: "center" }}>
        {textResources.verificationLabel}
      </FormLabel>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          // handleSubmit({ otp: otp.join("") }); // Combine the OTP values
        }}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
        }}
      >
        <FormControl sx={{ alignItems: "center" }}>
          {" "}
          {/* Center the label */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {otp.map((value, index) => (
              <TextField
                key={index}
                id={`otp-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e: any) => handleKeyDown(e, index)}
                inputProps={{
                  maxLength: 1, // Limit input to one character
                  style: {
                    textAlign: "center",
                    fontSize: "24px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%", // Makes the field circular
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50%", // Circular field
                    width: "50px", // Field width
                    height: "50px", // Field height
                    padding: 0,
                  },
                  "& .MuiOutlinedInput-input": {
                    textAlign: "center",
                    fontSize: "24px",
                    padding: 0,
                  },
                }}
                required
                variant="outlined"
              />
            ))}
          </Box>
        </FormControl>

        <Button type="submit" fullWidth variant="contained">
          {textResources.submitButton}
        </Button>

        <Typography
          sx={{
            textAlign: "center",
            marginTop: 2,
          }}
        >
          {timer === null ? (
            <>
              Didn't receive a code?&nbsp;
              <Typography
                component="span"
                sx={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "primary.main",
                }}
                onClick={handleResendCode}
              >
                Resend Code
              </Typography>
            </>
          ) : (
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
                color: "text.primary",
              }}
            >
              Resend Code in {timer} sec
            </Typography>
          )}
        </Typography>
      </Box>
    </>
  );
};

export default VerificationCode;
