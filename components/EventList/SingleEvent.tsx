import React, { FC } from "react";
import { IEvent } from "../../types/event";
import Image from "next/image";
import CustomTitle from "../CustomTitle/CustomTitle";
import styled from "styled-components";
import DateSection from "../DateSection/DateSection";
import convertDate from "../../utils/covertDate";
interface SingleEventProps {
  event: IEvent;
}

//todo image adaptive
const SingleEvent: FC<SingleEventProps> = ({ event }) => {
  return (
    <>
      <div className="event-wrapper">
        <Image
          src="/preview/test.jpg"
          alt="event-preview"
          width="200"
          height="200"
        />
        {/* <DateSection>
      </DateSection> */}
        <CustomTitle>{event.name}</CustomTitle>
      </div>
      <style jsx>{`
        .event-wrapper {
          background: white;
        }
      `}</style>
    </>
  );
};

export default SingleEvent;
