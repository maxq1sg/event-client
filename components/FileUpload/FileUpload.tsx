import React, { ChangeEvent, Dispatch, FC, MutableRefObject, SetStateAction, useRef } from "react";
import { WithClick } from "../../types/withClick";

interface IFileUploadProps {
  accept: string;
  setFiles: Dispatch<SetStateAction<any>>;
}

//todo
const FileUpload: FC<IFileUploadProps> = ({ accept, setFiles, children }) => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <div onClick={() => input?.current?.click()}>
      <input
        ref={input}
        style={{ display: "none" }}
        type="file"
        name="files"
        accept={accept}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFiles(e.target.files)
        }
      />
      {children}
    </div>
  );
};

export default FileUpload