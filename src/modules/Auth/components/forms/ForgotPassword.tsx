import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import React from "react";
import type { FormProps } from "../../../../types/formTypes";

const ForgotPassword: React.FC<FormProps> = ({
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
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
          autoComplete="email"
          required
          fullWidth
          variant="outlined"
        />
      </FormControl>

      <Button type="submit" fullWidth variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default ForgotPassword;
