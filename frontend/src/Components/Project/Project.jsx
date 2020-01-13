import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import "./Project.scss";

const Project = ({ title, body, imageLink, imageAlt }) => {
  return (
    <Card className="project-card">
      <CardMedia image={`${process.env.PUBLIC_URL}${imageLink}`} title={imageAlt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
