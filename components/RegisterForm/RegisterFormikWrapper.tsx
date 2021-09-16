import { Form, Formik } from "formik";
import React, { FC } from "react";
import LoginFormInput from "../LoginFormInput/LoginFormInput";
import RegisterForm from "./RegisterForm";
import { ValidationSchema } from "./validation";
import { initialValues } from "./validation/initialValues";

//todo - lock icon , already an account
const RegisterFormikWrapper: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <RegisterForm />
        </Form>
      )}
    </Formik>
  );
};
export default RegisterFormikWrapper;
