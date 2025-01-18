import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import type { FormProps } from "../../../../types/formTypes";

const SignIn: React.FC<FormProps> = ({ handleSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
    >
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ backgroundColor: "#009CDF" }}
      >
        Sign In
      </Button>
      <Typography sx={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <span>
          <Link
            href="/material-ui/getting-started/templates/sign-in/"
            variant="body2"
            color="#009CDF"
          >
            Sign Up
          </Link>
        </span>
      </Typography>
    </Box>
  );
};

export default SignIn;
