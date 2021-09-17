import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import LoginFormInput from "../LoginFormInput/LoginFormInput";



const LoginForm: FC = () => {
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
          </Grid>
          <Button
            className="button"
            type="submit"
            fullWidth
            variant="contained"
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <style jsx>{`
        .button {
          margin-top: 56px;
        }
      `}</style>
    </Container>
  );
};

export default LoginForm;
