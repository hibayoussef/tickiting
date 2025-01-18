import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { type FormProps } from "../../../../types/formTypes";

const SignUp: React.FC<FormProps> = ({ handleSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
    >
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <TextField
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          autoComplete="name"
          autoFocus
          required
          fullWidth
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          autoComplete="email"
          required
          fullWidth
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="phone-number">Phone Number</FormLabel>
        <TextField
          id="phone-number"
          type="tel"
          name="phone-number"
          placeholder="Enter Your Phone Number"
          required
          fullWidth
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField
          id="password"
          type="password"
          name="password"
          placeholder="••••••"
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
        label="Remember Me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        // onClick={validateInputs}
      >
        Sign Up
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
