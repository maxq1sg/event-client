import { FC } from "react";

const Day: FC<{ children: string }> = ({ children }) => {
  const [number, month] = children.split(/\s/gi);
  return (
    <>
      <div className="day">
        <div>{number}</div>
        <div>{month}</div>
      </div>
      <style jsx>{`
        .day {
          width: 70px;
          background: orange;
          font-weight: bold;
          font-size: 2rem;
          padding: 3px;
          border-radius: 4px;
          text-align: center;
          position: absolute;
        }
      `}</style>
    </>
  );
};

export default Day;
