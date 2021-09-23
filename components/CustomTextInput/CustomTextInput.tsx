import {InputBase } from "@material-ui/core";
import { useField } from "formik";
import { FC } from "react";
import Image from "next/image";
import useStyles from "../../styles/materialStyles";

const CustomSearchInput: FC<{
  name: string;
  placeholder: string;
  type: string;
}> = ({ name, placeholder, type }) => {
  const [field] = useField({ name, type });
  const styles = useStyles();
  return (
    <>
      <div className="input-wrapper">
        <InputBase
          {...field}
          name={name}
          type={type}
          placeholder={placeholder}
          className={styles["base-input"]}
        />
      </div>

      <button type="submit">
        <Image alt="search" src="/svgs/search.svg" width={40} height={40} />
      </button>
      <style jsx>{`
        .input-wrapper {

        }
      `}</style>
    </>
  );
};

export default CustomSearchInput;
