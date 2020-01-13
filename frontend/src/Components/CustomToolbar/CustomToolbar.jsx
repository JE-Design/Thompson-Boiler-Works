import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Menu, MenuItem, Toolbar, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { returnFlagByLanguage, RouterPaths } from "Utils/";
import "./CustomToolbar.scss";
import logo from "Assets/images/tbw-logo.png";

const CustomToolbar = props => {
  const [toolbarColor, setToolbarColor] = useState("#0b121000");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { notLanding } = props;
  const { t, i18n } = useTranslation();
  const title = t("title");
  const options = [
    t("nav.about"),
    t("nav.services"),
    t("nav.projects"),
    t("nav.careers"),
    t("nav.contact")
  ];
  // set toolbar to gray if not on landing
  useEffect(() => {
    if (notLanding) setToolbarColor("#0b1210");
    else setToolbarColor("transparent");
  }, [notLanding]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = lang => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  // update toolbar color on scroll
  window.addEventListener("scroll", () => {
    // if on landing, else set toolbar to non transparent gray
    if (!notLanding) {
      // if scroll is not at 0
      if (window.scrollY > 0) setToolbarColor(`#0b1210`);
      // if scroll is at zero, make toolbar transparent
      else setToolbarColor("transparent");
    } else setToolbarColor("#0b1210");
  });
  return (
    <AppBar
      className="toolbar"
      style={{ backgroundColor: toolbarColor, transition: "background-color 0.5s" }}
    >
      <Toolbar>
        <Link className="toolbar-logo" to={RouterPaths.LANDING}>
          <div className="toolbar-logo-image">
            <img src={logo} alt={title} />
          </div>
        </Link>
        {options.map(value => {
          return (
            <Link key={value} to={`/${value.toLowerCase()}`}>
              <Button>{value}</Button>
            </Link>
          );
        })}
        <Button
          className="language-button"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {returnFlagByLanguage(i18n.language)}
          {i18n.language}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleClose("en")}>
            {returnFlagByLanguage("en")}
            en
          </MenuItem>
          <MenuItem onClick={() => handleClose("fr")}>
            {returnFlagByLanguage("fr")}
            fr
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default CustomToolbar;
