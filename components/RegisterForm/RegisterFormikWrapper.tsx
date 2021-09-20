import { Form, Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
import { useUser } from "../../contextes/User/UserContext";
import $api from "../../utils/api";
import LoginFormInput from "../LoginFormInput/LoginFormInput";
import RegisterForm from "./RegisterForm";
import { ValidationSchema } from "./validation";
import { initialValues } from "./validation/initialValues";

type obj = {
  [key: string]: string;
};

//todo - lock icon , already an account
const RegisterFormikWrapper: FC = () => {
  const [files, setFiles] = useState<any>(null);
  const { data, error, loading, dispatch } = useUser();
  console.log(data, error, loading, dispatch);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={async (values: obj) => {
        const formData = new FormData();
        for (const field in values) {
          formData.append(field, values[field]);
        }
        formData.append("type", "users");

        formData.append("file", files && files[0]);
        try {
          const { data } = await $api.post("api/auth/register", formData);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ values }) => (
        <Form>
          <RegisterForm setFiles={setFiles} files={files} />
        </Form>
      )}
    </Formik>
  );
};
export default RegisterFormikWrapper;
