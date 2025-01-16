import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
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

      {children}

    
    </Card>
  );
};

export default SignInCard;
