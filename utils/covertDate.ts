import { DateTimeFormatOptions } from './../types/DateTimeFormatOptions';
export default function convertDate(date: Date) {
  const dateOptions:DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour:"numeric",
    minute:"numeric"
  };
  return new Intl.DateTimeFormat('en-US', dateOptions).format()
}
