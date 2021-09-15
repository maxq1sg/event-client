import { useField } from "formik";
import { FC } from "react";

const CustomTextInput: FC<{ name: string; placeholder: string; type: string }> = ({
  name,
  placeholder,
  type,
}) => {
  const [field] = useField({ name, type });
  return (
    <>
      <input
        className="text-input"
        {...field}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomTextInput
