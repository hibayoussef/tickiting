import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useSignInValidation } from "../../validations/useFormsValidation";
import { FormProps } from "../../../../types/formTypes";
import { useNavigate } from "react-router-dom";

const SignInForm: React.FC<FormProps> = ({ handleSubmit }) => {
  const { validationResolver } = useSignInValidation();

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm({
    resolver: validationResolver,
  });

  const onSubmit = (data: any) => {
    // handleSubmit();
  };

  const navigate = useNavigate(); 

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit(onSubmit)}
      noValidate
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
    >
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          id="email"
          type="email"
          placeholder="Enter Your Email"
          autoComplete="email"
          required
          fullWidth
          variant="outlined"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
      </FormControl>

      <FormControl>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Link
            component="button"
            type="button"
            onClick={()=> navigate("/forgot-password")}
            variant="body2"
            sx={{ alignSelf: "baseline" }}
          >
            Forgot your password?
          </Link>
        </Box>
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

      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember Me"
      />
      <Button type="submit" fullWidth variant="contained">
        Sign Up
      </Button>
      <Typography sx={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <span>
          <Link href="/signup" variant="body2" color="#009CDF">
            Sign Up
          </Link>
        </span>
      </Typography>
    </Box>
  );
};

export default SignInForm;
