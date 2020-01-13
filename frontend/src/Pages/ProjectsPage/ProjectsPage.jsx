import React, { useEffect } from "react";
import { Typography, Container } from "@material-ui/core/";
import { useTranslation } from "react-i18next";
import { PageHeader, Project } from "Components/";
import projectsImage from "Assets/images/contact-page-header.jpg";
import "./ProjectsPage.scss";

const ProjectsPage = props => {
  const { t } = useTranslation();
  useEffect(() => {
    props.setNotLanding(true);
  });

  const projectsObject = t("projects.project", { returnObjects: true });

  return (
    <>
      <PageHeader imagePath={projectsImage} pageTitle="Projects" />
      <Container className="projects-page">
        <div className="flavor">
          <Typography align="center" variant="h6" className="flavor-text">
            {t("services.flavorText")}
          </Typography>
        </div>
        <div className="projects">
          {projectsObject != null &&
            Object.keys(projectsObject).map(key => (
              <Project
                key={key}
                title={t(`projects.project.${key}.title`)}
                body={t(`projects.project.${key}.body`)}
                imageLink={t(`projects.project.${key}.imageLink`)}
                imageAlt={t(`projects.project.${key}.imageAlt`)}
              />
            ))}
        </div>
      </Container>
    </>
  );
};

export default ProjectsPage;
