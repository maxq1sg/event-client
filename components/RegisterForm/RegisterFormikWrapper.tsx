import { AxiosError } from "axios";
import { Form, Formik } from "formik";
import Router from "next/dist/client/router";
import React, { FC, useEffect, useState } from "react";
import { EUserActionType } from "../../contextes/User/types";
import { useUser } from "../../contextes/User/UserContext";
import { iterableObject } from "../../types/iterableObject";
import $api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";
import RegisterForm from "./RegisterForm";
import { ValidationSchema } from "./validation";
import { initialValues } from "./validation/initialValues";


const RegisterFormikWrapper: FC = () => {
  const [files, setFiles] = useState<null|File>(null);
  useEffect(() => {
    console.log(files);
  }, [files]);
  const { dispatch } = useUser();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={async (values: iterableObject) => {
        const formData = new FormData();
        for (const field in values) {
          formData.append(field, values[field]);
        }
        formData.append("type", "users");
        formData.append("file", files as File);

        try {
          dispatch({ type: EUserActionType.AUTH_USER_REQUEST });
          const { data } = await $api.post("api/auth/register", formData);
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
        <RegisterForm setFiles={setFiles} files={files} />
      </Form>
    </Formik>
  );
};
export default RegisterFormikWrapper;
