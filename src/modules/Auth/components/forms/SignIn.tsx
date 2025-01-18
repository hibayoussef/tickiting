import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material';
import React from 'react';

interface SignInFormProps {
  textResources: {
    emailLabel: string;
    passwordLabel: string;
    submitButton: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SignIn: React.FC<SignInFormProps> = ({ textResources, handleSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
    >
     
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

export default SignIn;
