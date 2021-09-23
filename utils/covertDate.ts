import dayjs from "dayjs";
import { DateTimeFormatOptions } from "./../types/DateTimeFormatOptions";

interface IOptions {
  type: "day-only" | "full-date"|"hour-only";
}
export default function convertDate(date: Date, options: IOptions):string {
  switch (options.type) {
    case "day-only":
      return dayjs(date).format("MMM D");
    case "hour-only":
      return dayjs(date).format("h:mm");
  }
  return ""
}
