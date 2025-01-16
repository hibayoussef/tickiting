// SignInCardWrapper.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SitemarkIcon from '../../../components/images/SitemarkIcon'; // تأكد من المسار الصحيح للـ icon

interface CardWrapperProps {
  title: string;
  children: React.ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ title, children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, mb: 2 }}>
        <SitemarkIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default CardWrapper;
