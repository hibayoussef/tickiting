import SignUpImage from "../../../assets/images/create-account.png";
import FormContent from "../components/FormContent";
import SignInForm from "../components/forms/SignIn";

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const textResources = {
    title: "Login to your account",
    emailLabel: "Email",
    passwordLabel: "Password",
    forgotPassword: "Forgot your password?",
    rememberMe: "Remember me",
    signUpPrompt: "Don't have an account? ",
    signUpLinkText: "Sign up",
    submitButton: "Sign in",
    emailPlaceholder: "your@email.com",
    passwordPlaceholder: "••••••",
    emailErrorMessage: "Please enter a valid email address.",
    passwordErrorMessage: "Password must be at least 6 characters long.",
  };

  const image = {
    src: SignUpImage,
    alt: "Description of the image",
  };

  return (
    // <CenterLayout image={image.src} alt={image.alt}>
      <FormContent textResources={textResources}>
        <SignInForm textResources={textResources} handleSubmit={() => {}} />
      </FormContent>
    // </CenterLayout>
  );
}
