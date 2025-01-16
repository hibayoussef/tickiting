import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material';
import React from 'react';

interface ForgotPasswordFormProps {
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
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ForgotPassword: React.FC<ForgotPasswordFormProps> = ({ textResources, handleSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
    >
      <FormControl>
        <FormLabel htmlFor="name">{textResources.nameLabel}</FormLabel>
        <TextField
          id="name"
          type="text"
          name="name"
          placeholder={textResources.namePlaceholder}
          autoComplete="name"
          autoFocus
          required
          fullWidth
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">{textResources.emailLabel}</FormLabel>
        <TextField
          id="email"
          type="email"
          name="email"
          placeholder={textResources.emailPlaceholder}
          autoComplete="email"
          required
          fullWidth
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="phone-number">{textResources.phoneNumberLabel}</FormLabel>
        <TextField
          id="phone-number"
          type="tel"
          name="phone-number"
          placeholder={textResources.phoneNumberPlaceholder}
          required
          fullWidth
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">{textResources.passwordLabel}</FormLabel>
        <TextField
          id="password"
          type="password"
          name="password"
          placeholder={textResources.passwordPlaceholder}
          autoComplete="current-password"
          required
          fullWidth
          variant="outlined"
        />
      </FormControl>
      <Button type="submit" fullWidth variant="contained">
        {textResources.submitButton}
      </Button>
    </Box>
  );
};

export default ForgotPassword;
