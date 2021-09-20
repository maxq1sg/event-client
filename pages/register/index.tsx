import React from "react";
import RegisterFormikWrapper from "../../components/RegisterForm/RegisterFormikWrapper";
import MainLayout from "../../layout/Layout";

const RegisterPage = () => {
  return (
    <MainLayout title="Registration">
      <RegisterFormikWrapper />
    </MainLayout>
  );
};

export default RegisterPage;
