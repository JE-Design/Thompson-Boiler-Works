import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import "./CustomFooter.scss";

const CustomFooter = ({ title }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography class="title">{title}</Typography>
      <Button>About</Button>
      <Button>Services</Button>
      <Button>Projects</Button>
      <Button>Careers</Button>
      <Button>Contact</Button>
    </Toolbar>
  </AppBar>
);

export default CustomFooter;
