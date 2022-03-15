import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import "./ProjectCard.scss";

const ProjectCard = ({ title, body, images, imageAlt }) => {
  return (
    <Card className="project-card">
      <div className="project-card__images">
        {images.map((image) => <CardMedia image={image} title={imageAlt} height="240px" />)}
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
