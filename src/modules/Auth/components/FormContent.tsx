import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Logo from "../../../assets/images/logo.png";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

interface SignInCardProps {
  textResources: {
    title?: string;
    emailLabel?: string;
    passwordLabel?: string;
    submitButton?: string;
    emailErrorMessage?: string;
    passwordErrorMessage?: string;
    rememberMe?: string;
    signUpPrompt?: string;
    signUpLinkText?: string;
  };
  children?: React.ReactNode;
  renderForm?: (validateInputs: () => boolean) => React.ReactNode;
}

const FormContent: React.FC<SignInCardProps> = ({
  textResources,
  children,
  renderForm,
}) => {
  return (
    <Card variant="outlined">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            maxWidth: "100%",
            height: "2.6rem"
          }}
        />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          textAlign: "center",
          width: "100%",
          fontSize: "clamp(1rem, 10vw, 1rem)",
          marginBottom: 3,
        }}
      >
        {textResources.title}
      </Typography>
      {children}
    </Card>
  );
};

export default FormContent;
