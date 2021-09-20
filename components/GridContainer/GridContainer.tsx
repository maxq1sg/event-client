import { FC } from "react";

const GridContainer: FC = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>{" "}
      <style jsx>{`
        .container {
          background: #ede7e6;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 12px;
        }
      `}</style>
    </>
  );
};

export default GridContainer;
