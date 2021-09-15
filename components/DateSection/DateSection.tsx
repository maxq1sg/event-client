import { FC } from "react";
import convertDate from "../../utils/covertDate";

const DateSection: FC = ({ children }) => {
  return <div>{convertDate(children as Date)}</div>;
};

export default DateSection;
