import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, TextField } from '@mui/material';
import React from 'react';
import { SignUpFormProps } from '../../../../types/formTypes';


const SignUp: React.FC<SignUpFormProps> = ({ textResources, handleSubmit }) => {
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
      {/* <Button type="submit" fullWidth variant="contained">
        {textResources.submitButton}
      </Button> */}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label={textResources.rememberMe}
      />
      <Button type="submit" fullWidth variant="contained" 
      // onClick={validateInputs}
      >
        {textResources.submitButton}
      </Button>
      {/* <Typography sx={{ textAlign: 'center' }}>
        {textResources.signUpPrompt}{' '}
        <span>
          <Link href="/material-ui/getting-started/templates/sign-in/" variant="body2">
            {textResources.signUpLinkText}
          </Link>
        </span>
      </Typography> */}
    </Box>
  );
};

export default SignUp;
