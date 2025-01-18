export interface CenterLayoutProps {
  children: React.ReactNode;
  image?: string;
  alt?: string;
}

export interface ContentProps {
  src: string;
  alt?: string;
  maxWidth?: number;
}

export interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface ForgotPasswordFormProps {
  textResources: {
    title: string; 
    emailLabel: string;
    submitButton: string;
    emailPlaceholder: string;
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface VerificationCodeFormProps {
  textResources: {
    title: string;
    verificationLabel: string;
    submitButton: string;
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

