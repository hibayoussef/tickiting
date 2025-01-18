import SignUpImage from "../../../assets/images/create-account.png";
import FormContent from "../components/FormContent";
import SignUpForm from "../components/forms/SignUp";
import CenterLayout from "../layout/CenterLayout";

export default function SignUp(props: { disableCustomTheme?: boolean }) {
  const image = {
    src: SignUpImage,
    alt: "Description of the image",
  };

  return (
    <CenterLayout image={image.src} alt={image.alt}>
      <FormContent title="Create New Account">
        <SignUpForm handleSubmit={() => {}} />
      </FormContent>
    </CenterLayout>
  );
}
