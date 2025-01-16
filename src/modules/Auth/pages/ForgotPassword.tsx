import ForgorPasswordImage from "../../../assets/images/forgot-password.png";
import FormContent from "../components/FormContent";
import ForgotPasswordForm from "../components/forms/ForgotPassword";
import CenterLayout from "../layout/CenterLayout";

export default function ForgotPassword(props: {
  disableCustomTheme?: boolean;
}) {
  const textResources = {
    title: "Forgot Password",
    emailLabel: "Email",
    submitButton: "Sign in",
    emailPlaceholder: "your@email.com",
  };

  const image = {
    src: ForgorPasswordImage,
    alt: "Description of the image",
  };

  return (
    <CenterLayout image={image.src} alt={image.alt}>
      <FormContent textResources={textResources}>
        <ForgotPasswordForm
          textResources={textResources}
          handleSubmit={() => {}}
        />
      </FormContent>
    </CenterLayout>
  );
}
