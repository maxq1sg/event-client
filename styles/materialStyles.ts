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
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "5px",
    position: "relative",
  },
  "base-input": {
    border: "1px solid black",
    borderRadius: "2px",
    width: "100%",
  },
}));

export default useStyles;
