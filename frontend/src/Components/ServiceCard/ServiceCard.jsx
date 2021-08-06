import React from "react";
import { Container, Typography } from "@material-ui/core";
import "./ServiceCard.scss";

const ServiceCard = props => {
  const { id, reference, title, content, image, imageAlt, imageCaption } = props;
  return (
    <div id={id} ref={reference} className="service">
      <Container className="service-container">
        <div className="service-body">
          <Typography variant="h2">{title}</Typography>
          <Typography variant="body1" className="service-body-text">
            {content}
          </Typography>
        </div>
        <figure className="service-image">
          <img src={image} alt={imageAlt} />
          <figcaption>{imageCaption}</figcaption>
        </figure>
      </Container>
    </div>
  );
};

export default ServiceCard;
