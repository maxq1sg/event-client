import {
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "./constatnts";
import * as Yup from "yup";

export const ValidationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(
      MIN_NAME_LENGTH,
      `First name should be at least ${MIN_NAME_LENGTH} chars`
    )
    .max(
      MAX_NAME_LENGTH,
      `First name should be at least ${MAX_NAME_LENGTH} chars`
    )
    .required("Required"),
  lastName: Yup.string()
    .trim()
    .min(
      MIN_NAME_LENGTH,
      `Last name should be at least ${MIN_NAME_LENGTH} chars`
    )
    .max(
      MAX_NAME_LENGTH,
      `Last name should be at least ${MAX_NAME_LENGTH} chars`
    )
    .required("Required"),
  email: Yup.string().trim().email("Invalid email!").required("Required"),
  password: Yup.string()
    .trim()
    .min(
      MIN_PASSWORD_LENGTH,
      `First name should be at least ${MIN_PASSWORD_LENGTH} chars`
    )
    .max(
      MAX_PASSWORD_LENGTH,
      `First name should be at least ${MAX_PASSWORD_LENGTH} chars`
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords should be equal")
    .required("Required"),
});
