import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SitemarkIcon from '../../../components/images/SitemarkIcon';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

interface SignInCardProps {
  textResources: {
    signInTitle: string;
    emailLabel: string;
    passwordLabel: string;
    submitButton: string;
    emailErrorMessage: string;
    passwordErrorMessage: string;
    rememberMe: string;
    signUpPrompt: string;
    signUpLinkText: string;
  };
  children?: React.ReactNode; // لتمرير المكونات عبر children
  renderForm?: (validateInputs: () => boolean) => React.ReactNode; // لتمرير المكون كـ render prop
}

const SignInCard: React.FC<SignInCardProps> = ({ textResources, children, renderForm }) => {
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    return isValid;
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <SitemarkIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        {textResources.signInTitle}
      </Typography>

      {children || (renderForm && renderForm(validateInputs))}

      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label={textResources.rememberMe}
      />
      <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
        {textResources.submitButton}
      </Button>
      <Typography sx={{ textAlign: 'center' }}>
        {textResources.signUpPrompt}{' '}
        <span>
          <Link href="/material-ui/getting-started/templates/sign-in/" variant="body2">
            {textResources.signUpLinkText}
          </Link>
        </span>
      </Typography>
    </Card>
  );
};

export default SignInCard;
