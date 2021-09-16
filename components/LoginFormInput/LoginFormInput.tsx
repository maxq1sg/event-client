import { IconButton, InputBase, TextField } from "@material-ui/core";
import { ErrorMessage, useField } from "formik";
import { FC } from "react";
import Image from "next/image";
import useStyles from "../../styles/materialStyles";
import ErrorTextMessage from "./ErrorMessage";

const LoginFormInput: FC<{ name: string; label: string; type: string }> = ({
  name,
  label,
  type,
}) => {
  const [field, meta] = useField({ name, type });
  const hasError = Boolean(meta.touched && meta.error);
  const isCorrect = Boolean(meta.touched && !meta.error);
  const styles = useStyles();
  return (
    <>
      <TextField
        className={
          isCorrect
            ? styles["correct-input"]
            : hasError
            ? styles["incorrect-input"]
            : "common"
        }
        error={hasError}
        fullWidth
        {...field}
        name={name}
        type={type}
        label={label}
      />
      {hasError ? (
        <ErrorMessage name={name} component={ErrorTextMessage} />
      ) : null}
    </>
  );
};

export default LoginFormInput;
