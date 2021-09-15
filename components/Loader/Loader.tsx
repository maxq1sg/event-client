import { CircularProgress } from "@material-ui/core";
import React from "react";

//todo make loader
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
