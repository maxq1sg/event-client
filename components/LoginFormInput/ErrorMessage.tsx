import React, { FC } from "react";

const ErrorTextMessage:FC = ({children}) => {
  return (
    <>
      <div className="message">{children}</div>
      <style jsx>{`
        .message {
          color: red;
        }
      `}</style>
    </>
  );
};

export default ErrorTextMessage;
