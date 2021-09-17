import { Form, Formik } from "formik";
import React, { FC, useContext, useEffect } from "react";
import { UserContext } from "../../contextes/UserContext";
import $api from "../../utils/api";
import LoginForm from "./LoginForm";
import { LoginValidationSchema } from "./validation";
import { initialValues } from "./validation/initialValues";

const LoginFormikWrapper: FC = () => {
  const { data: userData, error:loginError, loading } = useContext(UserContext);

  useEffect(() => {
    console.log(userData, loginError, loading);
  }, [userData, loginError, loading]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginValidationSchema}
      onSubmit={async (values) => {
        try {
          const { data } = await $api.post("api/auth/login", values);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {() => (
        <Form>
          <LoginForm />
        </Form>
      )}
    </Formik>
  );
};
export default LoginFormikWrapper;
