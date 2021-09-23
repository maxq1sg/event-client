import React, { ChangeEvent, Dispatch, FC, MutableRefObject, SetStateAction, useRef } from "react";
import { WithClick } from "../../types/withClick";

interface IFileUploadProps {
  accept: string;
  setFiles: Dispatch<SetStateAction<any>>;
}

const FileUpload: FC<IFileUploadProps> = ({ accept, setFiles, children }) => {
  return (
    <label>
      <input
        // ref={input}
        style={{ display: "none" }}
        type="file"
        name="files"
        accept={accept}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFiles(e.target.files&&e.target.files[0])
        }
      />
      {children}
    </label>
  );
};

export default FileUpload