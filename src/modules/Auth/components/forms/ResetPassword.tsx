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
import { SignUpFormProps } from "../../../../types/formTypes";

const ResetPassword: React.FC<SignUpFormProps> = ({
  textResources,
  handleSubmit,
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
    >
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
      <FormControl>
        <FormLabel htmlFor="confirm-password">
          {textResources.passwordLabel}
        </FormLabel>
        <TextField
          id="confirm-password"
          type="confirm-password"
          name="confirm-password"
          placeholder={textResources.passwordPlaceholder}
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
        label={textResources.rememberMe}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
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

export default ResetPassword;
