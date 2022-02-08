import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Menu, MenuItem, Toolbar, Button, Tabs, Tab } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import RenderInBrowser from "react-render-in-browser";
import { RouterPaths } from "Utils/";
import MenuIcon from "@material-ui/icons/Menu";
import MediaQuery from "react-responsive";
import logo from "Assets/images/tbw-logo.png";

import "./CustomToolbar.scss";

const CustomToolbar = props => {
  const location = useLocation();
  const { t } = useTranslation();
  const [toolbarColor, setToolbarColor] = useState("#0b121000");
  const [anchorMn, setAnchorMn] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(location.pathname.replace("/", ""));
  const { notLanding } = props;
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
    setCurrentPage(location.pathname.replace("/", ""));
  }, [notLanding, location.pathname]);

  const handleChange = (event, newValue) => {
    setCurrentPage(newValue);
  };

  const handleMnClick = event => {
    setAnchorMn(event.currentTarget);
  };

  const handleMnClose = event => {
    var currPage = event.currentTarget.childNodes[0];
    setCurrentPage(currPage === undefined ? "" : currPage.data.toLowerCase());
    setAnchorMn(null);
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
    <RenderInBrowser except ie>
      <AppBar
        className="toolbar"
        style={{
          backgroundColor: toolbarColor,
          transition: !notLanding ? "background-color 0.5s" : ""
        }}
      >
        <Toolbar>
          <Link
            className="toolbar-logo"
            to={RouterPaths.LANDING}
            onClick={() => setCurrentPage("")}
          >
            <div className="toolbar-logo-image">
              <img src={logo} alt={title} />
            </div>
          </Link>
          <MediaQuery query="(min-width: 1024px)">
            <Tabs value={currentPage} onChange={handleChange} TabIndicatorProps={{style: {background: "#a31621"}}}>
              {options.map(value => {
                return (
                  <Tab
                    key={value}
                    value={value.toLowerCase()}
                    label={value}
                    to={`/${value.toLowerCase()}`}
                    component={Link}
                  ></Tab>
                );
              })}
            </Tabs>
          </MediaQuery>
          <MediaQuery query="(max-width: 1023px)">
            <Button
              className="menu-button"
              aria-controls="nav-menu"
              aria-haspopup="true"
              onClick={handleMnClick}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="nav-menu"
              anchorEl={anchorMn}
              keepMounted
              open={Boolean(anchorMn)}
              onClose={handleMnClose}
            >
              {options.map(value => {
                return (
                  <MenuItem
                    key={value}
                    component={Link}
                    to={`/${value.toLowerCase()}`}
                    onClick={handleMnClose}
                  >
                    {value}
                  </MenuItem>
                );
              })}
            </Menu>
          </MediaQuery>
        </Toolbar>
      </AppBar>
    </RenderInBrowser>
  );
};

export default CustomToolbar;
