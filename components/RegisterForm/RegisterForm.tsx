import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Form } from "formik";
import React, { FC } from "react";
import LoginFormInput from "../LoginFormInput/LoginFormInput";

const RegisterForm: FC = () => {
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
          <Button type="submit" fullWidth variant="outlined">
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
