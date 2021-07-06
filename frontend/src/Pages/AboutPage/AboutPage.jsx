import React, { useLayoutEffect } from "react";
import { PageHeader } from "Components/";
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import aboutImage from "Assets/images/contact-page-header.jpg";
import "./AboutPage.scss";

const AboutPage = props => {
  const { t } = useTranslation();
  const aboutObject = t("about.section", { returnObjects: true });
  useLayoutEffect(() => {
    props.setNotLanding(true);
  });
  return (
    <>
      <PageHeader imagePath={aboutImage} pageTitle={t("about.title")} />
      <Container className="about-page">
        {aboutObject != null &&
          Object.keys(aboutObject).map(key => (
            <div className="about-section" key={key}>
              <Typography className="about-section-text" variant="body1">
                {t(`about.section.${key}.body`)}
              </Typography>
              <div className="about-section-image">
                <img src={aboutImage} alt={t(`about.section.${key}.imageAlt`)} />
                <p>{t(`about.section.${key}.imageCaption`)}</p>
              </div>
            </div>
          ))}
      </Container>
    </>
  );
};

export default AboutPage;
