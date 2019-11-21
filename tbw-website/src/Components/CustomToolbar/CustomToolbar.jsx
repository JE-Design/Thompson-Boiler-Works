import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import "./CustomToolbar.scss";
import logo from "Assets/images/tbw-logo.png";

const CustomToolbar = ({ title, options }) => (
  <AppBar className="toolbar">
    <Toolbar>
      <a className="toolbar-logo" href="/">
        <div className="toolbar-logo-image">
          <img src={logo} alt={title} />
        </div>
      </a>
      {options.map((value, index) => {
        return (
          <Button href={`/${value}`} key={index}>
            {value}
          </Button>
        );
      })}
    </Toolbar>
  </AppBar>
);

export default CustomToolbar;
