import d from "../../../assets/images/sss.png";
import SignUpForm from "../components/forms/SignUp";
import SignInCard from "../components/SigninCard";
import CenterLayout from "../layout/CenterLayout";

export default function SignUp(props: { disableCustomTheme?: boolean }) {
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
    <CenterLayout image={image.src} alt={image.alt}>
      <SignInCard textResources={textResources}>
        <SignUpForm textResources={textResources} handleSubmit={() => {}} />
      </SignInCard>
    </CenterLayout>
  );
}
