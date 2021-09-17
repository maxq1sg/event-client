import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "./constatnts";
import * as Yup from "yup";

export const LoginValidationSchema = Yup.object({
  email: Yup.string().trim().email("Invalid email!").required("Required"),
  password: Yup.string()
    .trim()
    .min(
      MIN_PASSWORD_LENGTH,
      `Password should be at least ${MIN_PASSWORD_LENGTH} chars`
    )
    .max(
      MAX_PASSWORD_LENGTH,
      `Password should be max ${MAX_PASSWORD_LENGTH} chars`
    )
    .required("Required"),
});
