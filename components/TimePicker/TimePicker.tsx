import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import generateTime from "../../utils/generateTime";

const TimePicker = () => {
  const [time, settime] = React.useState("");

  const handleChange = (event:any) => {
    settime(event.target.value);
  };
  console.log(generateTime())
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={time}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText>select time</FormHelperText>
    </FormControl>
  );
};

export default TimePicker;
