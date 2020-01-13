import React, { useEffect } from "react";
import { PageHeader } from "Components/";
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import aboutImage from "Assets/images/contact-page-header.jpg";
import "./AboutPage.scss";

const AboutPage = props => {
  const { t } = useTranslation();
  const aboutObject = t("about.section", { returnObjects: true });
  useEffect(() => {
    props.setNotLanding(true);
  });
  return (
    <>
      <PageHeader imagePath={aboutImage} pageTitle={t("about.title")} />
      <Container className="about-page">
        {aboutObject != null &&
          Object.keys(aboutObject).map(key => (
            <div className="about-section">
              <Typography className="about-section-text" variant="h6">
                {t(`about.section.${key}.body`)}
              </Typography>
              <div className="about-section-image">
                <img src={aboutImage} alt={t(`about.section.${key}.imageAlt`)} />
              </div>
            </div>
          ))}
      </Container>
    </>
  );
};

export default AboutPage;
