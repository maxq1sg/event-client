import { FC } from "react";
import { EColor, EMessage } from "../../types/message";

const Message: FC<{ type: EMessage }> = ({ type, children }) => {
  return (
    <>
      <div className={`message ${type}`}>{children}</div>
      <style jsx>{`
        .message{
            padding:10px;
            border-radius:3px;
        }
        .error{
            background:${EColor.ERROR}
        }
        .warning{
            background:${EColor.WARNING}
        }
        .success{
            background:${EColor.SUCCESS}
        }
        .info{
            background:${EColor.INFO}
      `}</style>
    </>
  );
};

export default Message;
