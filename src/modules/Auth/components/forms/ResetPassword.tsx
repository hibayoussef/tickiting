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
import { useResetPasswordValidation } from "../../validations/useFormsValidation";
import { useForm } from "react-hook-form";

const ResetPassword: React.FC<FormProps> = ({ handleSubmit }) => {
  const { validationResolver } = useResetPasswordValidation();
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm({
    resolver: validationResolver,
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    // handleSubmit();
  };
  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit(onSubmit)}
      noValidate
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
    >
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField
          id="password"
          type="password"
          placeholder="••••••"
          autoComplete="current-password"
          required
          fullWidth
          variant="outlined"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
        <TextField
          id="password_confirmation"
          type="password_confirmation"
          placeholder="Please Enter your password again"
          autoComplete="password_confirmation"
          required
          fullWidth
          variant="outlined"
          {...register("password_confirmation")}
          error={!!errors.password_confirmation}
          helperText={errors.password_confirmation ? errors.password_confirmation.message : ""}
        />
      </FormControl>
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
