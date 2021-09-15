import { FC } from "react";

const CustomTitle: FC = ({ children }) => {
  return (
    <>
      <div className="title">{children}</div>
      <style jsx>{`
        .title {
          font-size: 2rem;
          color: orange;
        }
      `}</style>
    </>
  );
};

export default CustomTitle;
