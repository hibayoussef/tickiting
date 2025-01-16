import SignUpImage from "../../../assets/images/create-account.png";
import FormContent from "../components/FormContent";
import SignUpForm from "../components/forms/SignUp";
import CenterLayout from "../layout/CenterLayout";

export default function SignUp(props: { disableCustomTheme?: boolean }) {
  const textResources = {
    title: "Create New Account",
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
    src: SignUpImage,
    alt: "Description of the image",
  };

  return (
    <CenterLayout image={image.src} alt={image.alt}>
      <FormContent textResources={textResources}>
        <SignUpForm textResources={textResources} handleSubmit={() => {}} />
      </FormContent>
    </CenterLayout>
  );
}
