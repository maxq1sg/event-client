import React, { FC } from "react";
import { IEvent } from "../../types/event";
import Image from "next/image";
import CustomTitle from "../CustomTitle/CustomTitle";
import { Button, Card, CardActions } from "@material-ui/core";
import Router from "next/dist/client/router";

interface SingleEventProps {
  event: IEvent;
}

//todo image adaptive
const SingleEvent: FC<SingleEventProps> = ({ event }) => {
  const buttonClickHandler = (id: number) => {
    Router.push(`/events/list/${id}`);
  };

  const src = `http://localhost:4000/static/${event.preview?.path}`;

  return (
    <>
      <Card>
        <Image
          loader={() => src}
          src={src}
          width={100}
          height={100}
          alt="event-preview"
        />
        {/* <DateSection>
      </DateSection> */}
        <CustomTitle>{event.name}</CustomTitle>

        <CardActions>
          <Button
            onClick={() => buttonClickHandler(event.id)}
            size="small"
            color="primary"
          >
            more info
          </Button>
        </CardActions>
      </Card>
      <style jsx>{`
        .event-wrapper {
          background: white;
          color: red;
        }
        .image-wrapper {
          max-height: 130px;
        }
      `}</style>
    </>
  );
};

export default SingleEvent;
