import SignUpImage from "../../../assets/images/create-account.png";
import FormContent from "../components/FormContent";
import ResetPasswordForm from "../components/forms/ResetPassword";
import CenterLayout from "../layout/CenterLayout";

export default function ResetPassword(props: { disableCustomTheme?: boolean }) {
  const image = {
    src: SignUpImage,
    alt: "Description of the image",
  };

  return (
    <CenterLayout image={image.src} alt={image.alt}>
      <FormContent title="Reset Password">
        <ResetPasswordForm handleSubmit={() => {}} />
      </FormContent>
    </CenterLayout>
  );
}
