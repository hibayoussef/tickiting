import Stack from "@mui/material/Stack";
import Content from "../components/Content";
import SignInCard from "../components/SigninCard";
import d from "../../../assets/images/sss.png";
import SignUp from "../components/forms/SignUp";

export default function SignInSide(props: { disableCustomTheme?: boolean }) {
  const textResources = {
    signInTitle: "Sign in",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneNumberLabel: "Phone Number",
    passwordLabel: "Password",
    forgotPassword: "Forgot your password?",
    rememberMe: "Remember me",
    signUpPrompt: "Don't have an account? ",
    signUpLinkText: "Sign up",
    submitButton: "Sign in",
    namePlaceholder: "Name",
    emailPlaceholder: "your@email.com",
    phoneNumberPlaceholder: "0963969862620",
    passwordPlaceholder: "••••••",
    emailErrorMessage: "Please enter a valid email address.",
    passwordErrorMessage: "Password must be at least 6 characters long.",
  };

  const image = {
    src: d,
    alt: "Description of the image",
  };

  return (
    <>
      <Stack
        direction="column"
        component="main"
        mt="3rem"
        sx={[
          {
            justifyContent: "center",
            height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
            marginTop: "10rem",
            minHeight: "100%",
          },
        ]}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{
            justifyContent: "center",
            gap: { xs: 6, sm: 12 },
            p: 2,
            mx: "auto",
          }}
        >
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            sx={{
              justifyContent: "center",
              gap: { xs: 6, sm: 12 },
              p: { xs: 2, sm: 4 },
              m: "auto",
            }}
          >
            <Content src={image.src} alt={image.alt} />
            <SignInCard textResources={textResources}>
              <SignUp textResources={textResources} handleSubmit={() => {}} />
            </SignInCard>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
