import React, { useEffect } from "react";
import CustomDivider from "Components/CustomDivider/CustomDivider";
import { Typography, Container, Button, Box } from "@material-ui/core/";
import { Link } from "react-router-dom";
import routerPaths from "Utils/RouterPaths";
import { useTranslation } from "react-i18next";
import landing from "Assets/images/landing/landing.png";
import projectOne from "Assets/images/landing/landing-projects-1.JPG";
import projectTwo from "Assets/images/landing/landing-projects-2.JPG";
import projectThree from "Assets/images/landing/landing-projects-3.JPG";
import projectFour from "Assets/images/landing/landing-projects-4.JPG";
import servicesBackground from "Assets/images/landing/divider.png";
import RenderInBrowser from "react-render-in-browser";

import "./LandingPage.scss";

const landingSectionServices = {
  backgroundImage: `url(${{ servicesBackground }})`
};

const LandingPage = props => {
  const { t } = useTranslation();
  useEffect(() => {
    props.setNotLanding(false);
  });
  return (
    <div className="landing">
      <div className="landing-title">
        <div className="landing-title-text">
          <Typography variant="h1">{t("title")}</Typography>
          <Typography variant="h3">{t("landing.subtitle")}</Typography>
        </div>
      </div>
      <CustomDivider copy={t("landing.divider")}/>
      <div id="top-section" className="landing-section">
        <Container>
          <Typography variant="h2" align="center">
            {t("landing.about.title")}
          </Typography>
          <Typography className="landing-section-body" variant="body1">
            {t("landing.about.body")}
          </Typography>
          <RenderInBrowser except ie>
            <Link to={routerPaths.ABOUT}>
              <Button variant="contained">{t("landing.about.button")}</Button>
            </Link>
          </RenderInBrowser>
        </Container>
      </div>
      <div id="services-section" style={landingSectionServices} className="landing-section">
        <Box className="landing-section-flex" sx={{ display: 'flex', flexDirection: 'column'  }}>
          <Typography variant="h2" align="center">
            {t("landing.services.title")}
          </Typography>
          <div className="landing-services-body">
            <Typography className="landing-section-body" variant="body1">
              {t("landing.services.body")}
            </Typography>
            <div className="landing-services-image">
              <img src={landing} alt={t("landing.services.imageAlt")} />
              <Typography variant="h6">{t("landing.services.imageCaption")}</Typography>
            </div>
          </div>
          <RenderInBrowser except ie>
            <Link className="services-button" to={routerPaths.SERVICES}>
              <Button variant="contained">{t("landing.services.button")}</Button>
            </Link>
          </RenderInBrowser>
        </Box>
      </div>
      <div className="landing-section">
        <Container>
          <Typography variant="h2" align="center">
            {t("landing.projects.title")}
          </Typography>
          <Typography className="landing-section-body landing-section-body--projects" variant="body1">
            {t("landing.projects.body")}
          </Typography>
          <div className="landing-projects-image">
            <img src={projectOne} className="object-cover" alt={t("landing.projects.imageAlt.one")} />
            <img src={projectTwo} className="object-cover" alt={t("landing.projects.imageAlt.two")} />
            <img src={projectThree} className="object-cover" alt={t("landing.projects.imageAlt.three")} />
            <img src={projectFour} className="object-cover" alt={t("landing.projects.imageAlt.four")} />
          </div>
          <RenderInBrowser except ie>
            <Link to={routerPaths.PROJECTS}>
              <Button variant="contained">{t("landing.projects.button")}</Button>
            </Link>
          </RenderInBrowser>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
