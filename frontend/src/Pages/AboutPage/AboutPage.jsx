import React from "react";
import { PageHeader } from "Components/";
import { Typography, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import headerImage from "Assets/images/about/about-us-header.webp";
import aboutImageOne from "Assets/images/about/about-us-cooling-towers.webp";
import aboutImageTwo from "Assets/images/about/about-us-installation.webp";
import claude from "Assets/images/about/team/claude-turpin.png";
import dave from "Assets/images/about/team/dave-kollesh.png";
import eric from "Assets/images/about/team/eric-thompson.png";
import jason from "Assets/images/about/team/jason-thompson.png";
import martin from "Assets/images/about/team/martin-vinette.png";
import maud from "Assets/images/about/team/maud-simoneau.png";
import "./AboutPage.scss";
import TeamCard from "Components/TeamCard/TeamCard";

const AboutPage = () => {
  const { t } = useTranslation();
  const sectionImages = [aboutImageOne, aboutImageTwo];
  const teamImages = [eric, jason, martin, dave, claude, maud];
  const aboutObject = t("about.section", { returnObjects: true });
  const teamMembers = t("about.members", { returnObjects: true });
  return (
    <>
      <PageHeader
        imagePath={headerImage}
        pageTitle={t("about.title")}
        backgroundPosition="center"
      />
      <Box className="about-page" sx={{ display: "flex", flexDirection: "column" }}>
        {aboutObject != null &&
          Object.keys(aboutObject).map((key, index) => (
            <div
              className={`about-section ${
                index === Object.keys(aboutObject).length - 1 ? "about-section--last" : ""
              }`}
              key={key}
            >
              <Typography className="about-section-text" variant="body1">
                {t(`about.section.${key}.body`)}
              </Typography>
              <figure className="about-section-image">
                <img src={sectionImages[index]} alt={t(`about.section.${key}.imageAlt`)} />
                <figcaption>
                  <i>{t(`about.section.${key}.imageCaption`)}</i>
                </figcaption>
              </figure>
            </div>
          ))}
        <Box className="about-team" sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h2">{t("about.ourTeam")}</Typography>
          <Box className="about-team-cards" sx={{ display: "flex" }}>
            {teamMembers !== null &&
              Object.keys(teamMembers).map((key, index) => (
                <TeamCard
                  name={t(`about.members.${key}.name`)}
                  subtitle={t(`about.members.${key}.subtitle`)}
                  image={teamImages[index]}
                  body={t(`about.members.${key}.body`)}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
