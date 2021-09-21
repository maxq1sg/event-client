import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  "correct-input": {
    borderBottom: "0.7px solid green",
  },
  "incorrect-input": {
    borderBottom: "0.7px solid red",
  },

  "flex-container": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
