import React, { useEffect } from "react";
import CustomDivider from "Components/CustomDivider/CustomDivider";
import { Typography, Container, Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
import routerPaths from "Utils/RouterPaths";
import { useTranslation } from "react-i18next";
import landing from "Assets/images/landing.png";
import servicesBackground from "Assets/images/divider.png";

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
      <CustomDivider />
      <div className="landing-section">
        <Container>
          <Typography variant="h2" align="center">
            {t("landing.about.title")}
          </Typography>
          <Typography className="landing-section-body" variant="h6">
            {t("landing.about.body")}
          </Typography>
          <Link to={routerPaths.ABOUT}>
            <Button variant="contained">{t("landing.about.button")}</Button>
          </Link>
        </Container>
      </div>
      <div style={landingSectionServices} className="landing-section">
        <Container>
          <Typography variant="h2" align="center">
            {t("landing.services.title")}
          </Typography>
          <div className="landing-services-body">
            <Typography className="landing-section-body" variant="h6">
              {t("landing.services.body")}
            </Typography>
            <div className="landing-services-image">
              <img src={landing} alt={t("landing.services.imageAlt")} />
              <Typography variant="h6">{t("landing.services.imageCaption")}</Typography>
            </div>
          </div>
          <Link to={routerPaths.SERVICES}>
            <Button variant="contained">{t("landing.services.button")}</Button>
          </Link>
        </Container>
      </div>
      <div className="landing-section">
        <Container>
          <Typography variant="h2" align="center">
            {t("landing.projects.title")}
          </Typography>
          <Typography className="landing-section-body" variant="h6">
            {t("landing.projects.body")}
          </Typography>
          <div className="landing-projects-image">
            <img src={landing} alt={t("landing.projects.imageAlt.one")} />
            <img src={landing} alt={t("landing.projects.imageAlt.two")} />
            <img src={landing} alt={t("landing.projects.imageAlt.three")} />
            <img src={landing} alt={t("landing.projects.imageAlt.four")} />
          </div>
          <Link to={routerPaths.PROJECTS}>
            <Button variant="contained">{t("landing.projects.button")}</Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
