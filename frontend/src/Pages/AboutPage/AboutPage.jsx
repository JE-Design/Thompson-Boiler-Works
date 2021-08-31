import React, { useLayoutEffect } from "react";
import { PageHeader } from "Components/";
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import headerImage from "Assets/images/contact-page-header.jpg";
import aboutImageOne from "Assets/images/about-us-cooling-towers.jpg"
import aboutImageTwo from "Assets/images/about-us-installation.jpg"
import "./AboutPage.scss";

const AboutPage = props => {
  const { t } = useTranslation();
  const sectionImages = [aboutImageOne,aboutImageTwo];
  const aboutObject = t("about.section", { returnObjects: true });
  useLayoutEffect(() => {
    props.setNotLanding(true);
  });
  return (
    <>
      <PageHeader imagePath={headerImage} pageTitle={t("about.title")} />
      <Container className="about-page">
        {aboutObject != null &&
          Object.keys(aboutObject).map((key,index) => (
            <div className="about-section" key={key}>
              <Typography className="about-section-text" variant="body1">
                {t(`about.section.${key}.body`)}
              </Typography>
              <figure className="about-section-image">
                <img src={sectionImages[index]} alt={t(`about.section.${key}.imageAlt`)} />
                <figcaption><i>{t(`about.section.${key}.imageCaption`)}</i></figcaption>
              </figure>
            </div>
          ))}
      </Container>
    </>
  );
};

export default AboutPage;
