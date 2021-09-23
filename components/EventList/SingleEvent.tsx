import React, { FC } from "react";
import { IEvent } from "../../types/event";
import Image from "next/image";
import CustomTitle from "../CustomTitle/CustomTitle";
import { Button, Card, CardActions } from "@material-ui/core";
import Router from "next/dist/client/router";
import useStyles from "../../styles/materialStyles";
import convertDate from "../../utils/covertDate";
import Day from "../Day/Day";

interface SingleEventProps {
  event: IEvent;
}

//todo image adaptive
const SingleEvent: FC<SingleEventProps> = ({ event }) => {
  const buttonClickHandler = (id: number) => {
    Router.push(`/events/list/${id}`);
  };
  const pathOnServer = event.preview?.path;

  const previewSrc = `/static${pathOnServer || "/events/default.png"}`;
  const categorySrc = `/static/categories/${event.category?.name}.svg`;
  const styles = useStyles();
  return (
    <>
      <Card className={styles.card}>
        <div className={"image-container"}>
          <Image
            alt="image-preview"
            src={previewSrc}
            layout="fill"
            className="image"
            objectFit="cover"
          />
        </div>
        <CustomTitle>{event.name}</CustomTitle>

        <div className="wrapper">
          <CardActions>
            <Button
              onClick={() => buttonClickHandler(event.id)}
              size="small"
              color="primary"
            >
              more info
            </Button>
          </CardActions>
          <div className="category-wrapper">
            <Image
              alt="image-category"
              src={categorySrc}
              width={50}
              height={50}
            />
          </div>
        </div>
        <Day>{convertDate(event.date, { type: "day-only" })}</Day>
      </Card>
      <style jsx>{`
        .image-container {
          min-height: 200px;
          position: relative;
        }
        .wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default SingleEvent;
