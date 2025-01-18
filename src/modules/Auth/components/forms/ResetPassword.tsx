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
import type { FormProps } from "../../../../types/formTypes";

const ResetPassword: React.FC<FormProps> = ({
  handleSubmit
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
    >
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField
          id="password"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          autoComplete="current-password"
          required
          fullWidth
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="confirm-password">
          Confirm Password
        </FormLabel>
        <TextField
          id="confirm-password"
          type="confirm-password"
          name="confirm-password"
          placeholder="Please Enter your password again"
          autoComplete="confirm-password"
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
        label="remember Me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        // onClick={validateInputs}
      >
        Save
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

export default ResetPassword;
