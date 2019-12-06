import React from "react";
import CustomDivider from "Components/CustomDivider/CustomDivider";
import { Typography, Container, Button } from "@material-ui/core/";
import { useTranslation } from "react-i18next";
import landing from "Assets/images/landing.png";
import servicesBackground from "Assets/images/divider.png";

import "./LandingPage.scss";

const landingSectionServices = {
  backgroundImage: `url(${{ servicesBackground }})`
};

function LandingPage() {
  const { t } = useTranslation();
  return (
    <div className="landing">
      <div className="landing-title">
        <div className="landing-title-text">
          <Typography variant="h1">Thompson Boiler Works</Typography>
          <Typography variant="h3">{t("landing.subtitle")}</Typography>
        </div>
      </div>
      <CustomDivider />
      <div className="landing-section">
        <Container>
          <Typography variant="h2" align="center">
            {t("landing.about.title")}
          </Typography>
          <Typography className="landing-section-body" variant="h6" />
          <Button variant="contained">{t("landing.about.button")}</Button>
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
              <img src={landing} alt="services" />
              <Typography variant="h6">{t("landing.services.imageCaption")}</Typography>
            </div>
          </div>
          <Button variant="contained">{t("landing.services.button")}</Button>
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
            <img src={landing} alt="projects" />
            <img src={landing} alt="projects" />
            <img src={landing} alt="projects" />
            <img src={landing} alt="projects" />
          </div>
          <Button variant="contained">{t("landing.projects.button")}</Button>
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
