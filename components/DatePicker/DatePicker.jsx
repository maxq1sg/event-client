import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";

export default function DatePick() {
  const [selectedDate, handleDateChange] = useState(new Date());
  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);
  return (
    <>
      <KeyboardDateTimePicker
        variant="inline"
        label="With keyboard"
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
      />
    </>
  );
}
