import React, { useLayoutEffect } from "react";
import { Typography, Container } from "@material-ui/core/";
import { useTranslation } from "react-i18next";
import { PageHeader, ProjectCard } from "Components/";
import projectsHeader from "Assets/images/projects/projects-header.webp";
import projectOne from "Assets/images/projects/projects-zibi.webp";
import projectTwo from "Assets/images/projects/projects-strathcona.webp";
import projectThree from "Assets/images/projects/projects-kirkland.webp";
import projectFour from "Assets/images/projects/projects-hospital-steam-boiler.webp";
import projectFive from "Assets/images/projects/projects-chiller-installation.webp";
import "./ProjectsPage.scss";

const ProjectsPage = props => {
  const { t } = useTranslation();
  useLayoutEffect(() => {
    props.setNotLanding(true);
  });

  const projectsObject = t("projects.project", { returnObjects: true });
  const projectImages = [projectOne, projectTwo, projectThree, projectFour, projectFive];
  return (
    <>
      <PageHeader imagePath={projectsHeader} pageTitle="Projects" backgroundPosition="center" />
      <Container className="projects-page">
        <div className="flavor">
          <Typography align="center" variant="h6" className="flavor-text">
            <i>{t("projects.flavorText")}</i>
          </Typography>
        </div>
        <div className="projects">
          {projectsObject != null &&
            Object.keys(projectsObject).map((key, index) => (
              <ProjectCard
                key={key}
                title={t(`projects.project.${key}.title`)}
                body={t(`projects.project.${key}.body`)}
                image={projectImages[index]}
                imageAlt={t(`projects.project.${key}.imageAlt`)}
              />
            ))}
        </div>
      </Container>
    </>
  );
};

export default ProjectsPage;
