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

export interface SignUpFormProps {
  textResources: {
    nameLabel: string;
    emailLabel: string;
    phoneNumberLabel: string;
    passwordLabel: string;
    submitButton: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phoneNumberPlaceholder: string;
    passwordPlaceholder: string;
    rememberMe: string;
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
