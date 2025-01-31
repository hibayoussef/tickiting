import SignUpImage from "../../../assets/images/create-account.png";
import FormContent from "../components/FormContent";
import VerificationCodeForm from "../components/forms/VerificationCode";
import CenterLayout from "../layout/CenterLayout";
import VerificationCodeImage from "../../../assets/images/verification-code.png"

export default function VerificationCode(props: {
  disableCustomTheme?: boolean;
}) {
  const image = {
    src: VerificationCodeImage,
    alt: "A user verifying their account",
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Verification code submitted");
  };

  return (
    <CenterLayout image={image.src} alt={image.alt}>
      <FormContent title="Verification Code">
        <VerificationCodeForm
          handleSubmit={handleSubmit}
        />
      </FormContent>
    </CenterLayout>
  );
}
