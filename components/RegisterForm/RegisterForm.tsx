import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Image from "next/image";
import React, { Dispatch, FC, SetStateAction } from "react";
import { useUser } from "../../contextes/User/UserContext";
import FileUpload from "../FileUpload/FileUpload";
import LoginFormInput from "../LoginFormInput/LoginFormInput";

interface RegisterFormProps {
  setFiles: Dispatch<SetStateAction<any>>;
  files: null|File;
}

const RegisterForm: FC<RegisterFormProps> = ({ setFiles, files }) => {
  const { error, loading } = useUser();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="div" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <LoginFormInput name="firstName" type="text" label="first name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LoginFormInput name="lastName" type="text" label="last name" />
            </Grid>
            <Grid item xs={12}>
              <LoginFormInput name="email" type="text" label="email" />
            </Grid>
            <Grid item xs={12}>
              <LoginFormInput
                name="password"
                type="password"
                label="password"
              />
            </Grid>
            <Grid item xs={12}>
              <LoginFormInput
                name="confirmPassword"
                type="password"
                label=" confirm password"
              />
            </Grid>
          </Grid>
          <FileUpload accept="image/*" setFiles={setFiles}>
            <Image alt="upload" src="/svgs/upload.svg" width={40} height={40} />
            <div>{files?.name}</div>
          </FileUpload>
          <Button
            className="button"
            type="submit"
            fullWidth
            variant="contained"
          >
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </Box>
      </Box>
      {error ? <Alert severity="error">{error.message}</Alert> : null}
      <style jsx>{`
        .button {
          margin-top: 56px;
        }
      `}</style>
    </Container>
  );
};

export default RegisterForm;
