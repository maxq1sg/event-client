import React from "react";
import LoginFormikWrapper from "../../components/LoginForm/LoginFormWrapper";
import MainLayout from "../../layout/Layout";

const LoginPage = () => {
  return (
    <MainLayout title="Login page">
      <LoginFormikWrapper />
    </MainLayout>
  );
};

export default LoginPage;
