import { AxiosError } from "axios";
import { Form, Formik } from "formik";
import Router from "next/dist/client/router";
import React, { FC, useEffect } from "react";
import { EUserActionType } from "../../contextes/User/types";
import { useUser } from "../../contextes/User/UserContext";
import $api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";
import LoginForm from "./LoginForm";
import { LoginValidationSchema } from "./validation";
import { initialValues } from "./validation/initialValues";

const LoginFormikWrapper: FC = () => {
  const { dispatch, data, error, loading } = useUser();
  useEffect(() => {
    console.log(data, error, loading);
  }, [data, error, loading]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginValidationSchema}
      onSubmit={async (values) => {
        try {
          dispatch({ type: EUserActionType.AUTH_USER_REQUEST });
          const { data } = await $api.post("api/auth/login", values);
          dispatch({ type: EUserActionType.AUTH_USER_SUCCESS, payload: data });
          Router.push("/");
        } catch (error) {
          dispatch({
            type: EUserActionType.AUTH_USER_ERROR,
            payload: handleAxiosError(error as AxiosError),
          });
        }
      }}
    >
        <Form>
          <LoginForm />
        </Form>
    </Formik>
  );
};
export default LoginFormikWrapper;
