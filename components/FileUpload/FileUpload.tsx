import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface IFileUploadProps {
  accept: string;
  setFiles: Dispatch<SetStateAction<any>>;
}

const FileUpload: FC<IFileUploadProps> = ({ accept, setFiles, children }) => {
  return (
    <label>
      <input
        style={{ display: "none" }}
        type="file"
        name="files"
        accept={accept}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFiles( e.target.files?.[0])
        }
      />
      {children}
    </label>
  );
};

export default FileUpload;
