import { IconButton, InputBase, TextField } from "@material-ui/core";
import { useField } from "formik";
import { FC } from "react";
import Image from "next/image";

const LoginFormInput: FC<{ name: string; placeholder: string; type: string }> =
  ({ name, placeholder, type }) => {
    const [field] = useField({ name, type });
    return (
      <>
        <TextField
          fullWidth
          {...field}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </>
    );
  };

export default LoginFormInput;
