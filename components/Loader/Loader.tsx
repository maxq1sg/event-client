import { CircularProgress } from "@material-ui/core";
import React from "react";

const Loader = () => {
  return (
    <>
      <div className="progress-container">
        <CircularProgress size={100} color="secondary" />
      </div>
      <style jsx>{`
        .progress-container {
          display: flex;
          justify-content: center;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default Loader;
