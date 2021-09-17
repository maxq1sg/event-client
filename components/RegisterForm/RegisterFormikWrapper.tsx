import { Form, Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
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
  const [files, setFiles] = useState<File | null>(null);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={async (values: obj) => {
        const formData = new FormData();
        for (const field in values) {
          formData.append(field, values[field]);
        }
        formData.append("file", files as File);
        formData.append("type", "users");
        try {
          const { data } = await $api.post("api/auth/register", formData);
          console.log(data);
        } catch (error) {}
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
