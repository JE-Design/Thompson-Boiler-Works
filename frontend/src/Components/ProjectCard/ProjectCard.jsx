import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import "./ProjectCard.scss";

const Project = ({ title, body, image, imageAlt }) => {
  return (
    <Card className="project-card">
      <CardMedia image={image} title={imageAlt} />
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

export default Project;
