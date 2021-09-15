import { IconButton, InputBase } from "@material-ui/core";
import { useField } from "formik";
import { FC } from "react";
import Image from "next/image";

const CustomSearchInput: FC<{ name: string; placeholder: string; type: string }> =
  ({ name, placeholder, type }) => {
    const [field] = useField({ name, type });
    return (
      <>
        <InputBase
          {...field}
          name={name}
          type={type}
          placeholder={placeholder}
        />
        <IconButton>
          <Image alt="search" src="/svgs/ticket.svg" width={40} height={40} />
        </IconButton>
      </>
    );
  };

export default CustomSearchInput;
