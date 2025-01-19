import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { FormProps } from "../../../../types/formTypes";
import { useSignUpValidation } from "../../validations/useFormsValidation";

const SignUpForm: React.FC<FormProps> = ({ handleSubmit }) => {
  // استخدام الدالة لاستخراج الـ validation resolver
  const { validationResolver } = useSignUpValidation();

  // إعداد react-hook-form باستخدام resolver
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm({
    resolver: validationResolver, // استخدام resolver للتحقق من الصحة باستخدام yup
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    // يمكن استدعاء handleSubmit من هنا
    // handleSubmit();
  };

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit(onSubmit)}
      noValidate
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
    >
      {/* حقل الاسم */}
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <TextField
          id="name"
          type="text"
          placeholder="Enter Your Name"
          autoComplete="name"
          autoFocus
          required
          fullWidth
          variant="outlined"
          {...register("name")} // ربط الحقل مع react-hook-form
          error={!!errors.name} // عرض الخطأ إذا كان هناك
          helperText={errors.name ? errors.name.message : ""} // عرض رسالة الخطأ
        />
      </FormControl>

      {/* حقل البريد الإلكتروني */}
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
          {...register("email")} // ربط الحقل مع react-hook-form
          error={!!errors.email} // عرض الخطأ إذا كان هناك
          helperText={errors.email ? errors.email.message : ""} // عرض رسالة الخطأ
        />
      </FormControl>

      {/* حقل رقم الهاتف */}
      <FormControl>
        <FormLabel htmlFor="phone-number">Phone Number</FormLabel>
        <TextField
          id="phone-number"
          type="tel"
          placeholder="Enter Your Phone Number"
          required
          fullWidth
          variant="outlined"
          {...register("phone_number")}
          error={!!errors["phone_number"]}
          helperText={
            errors["phone_number"] ? errors["phone_number"].message : ""
          }
        />
      </FormControl>

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

      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember Me"
      />
      <Button type="submit" fullWidth variant="contained">
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUpForm;
