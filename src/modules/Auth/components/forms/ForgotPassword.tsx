import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import React from "react";
import type { FormProps } from "../../../../types/formTypes";
import { useForm } from "react-hook-form";
import { useForgotPasswordValidation } from "../../validations/useFormsValidation";

const ForgotPassword: React.FC<FormProps> = ({ handleSubmit }) => {
  const { validationResolver } = useForgotPasswordValidation();
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
          helperText={errors.email ? errors.email.message : ""} // عرض رسالة الخطأ
        />
      </FormControl>

      <Button type="submit" fullWidth variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default ForgotPassword;
