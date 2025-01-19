import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// useSignUpValidation function to return the validation schema
export const useSignUpValidation = () => {
  const signInSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long"),

    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),

    phone_number: yup
      .string()
      .required("Phone number is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long")
      .max(20, "Password must be at most 20 characters long"),

    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Password confirmation is required"),
  });

  return { validationResolver: yupResolver(signInSchema) };
};
