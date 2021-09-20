import { FC } from "react";

const CustomTitle: FC = ({ children }) => {
  return (
    <>
      <div className="title">{children}</div>
      <style jsx>{`
        .title {
          padding: 0 10px;
          font-size: 2rem;
          color: orange;
        }
      `}</style>
    </>
  );
};

export default CustomTitle;
