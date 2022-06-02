import React from "react";
import { Typography, Container } from "@material-ui/core/";
import { useTranslation } from "react-i18next";
import { PageHeader, ProjectCard } from "Components/";
import projectsHeader from "Assets/images/projects/projects-header.webp";
import kirklandOne from "Assets/images/projects/kirkland/kirkland-1.webp"
import kirklandTwo from "Assets/images/projects/kirkland/kirkland-2.webp"
import kirklandThree from "Assets/images/projects/kirkland/kirkland-3.webp"
import kirklandFour from "Assets/images/projects/kirkland/kirkland-4.webp"
import strathconaOne from "Assets/images/projects/strathcona/strathcona-1.webp"
import strathconaTwo from "Assets/images/projects/strathcona/strathcona-2.webp"
import strathconaThree from "Assets/images/projects/strathcona/strathcona-3.webp"
import strathconaFour from "Assets/images/projects/strathcona/strathcona-4.webp"
import zibiOne from "Assets/images/projects/zibi/zibi-1.webp"
import zibiTwo from "Assets/images/projects/zibi/zibi-2.webp"
import zibiThree from "Assets/images/projects/zibi/zibi-3.webp"
import zibiFour from "Assets/images/projects/zibi/zibi-4.webp"
import gorewayOne from "Assets/images/projects/goreway/goreway-1.webp"
import gorewayTwo from "Assets/images/projects/goreway/goreway-2.webp"
import gorewayThree from "Assets/images/projects/goreway/goreway-3.webp"
import gorewayFour from "Assets/images/projects/goreway/goreway-4.webp"
import projectFive from "Assets/images/projects/projects-chiller-installation.webp";
import "./ProjectsPage.scss";

const ProjectsPage = props => {
  const { t } = useTranslation();

  const projectsObject = t("projects.project", { returnObjects: true });
  const projectImages = [[zibiOne,zibiTwo,zibiThree,zibiFour], 
                         [strathconaOne,strathconaTwo,strathconaThree,strathconaFour], 
                         [kirklandOne,kirklandTwo,kirklandThree,kirklandFour], 
                         [gorewayOne,gorewayTwo,gorewayThree,gorewayFour], 
                         projectFive];
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
                images={projectImages[index]}
                imageAlt={t(`projects.project.${key}.imageAlt`)}
              />
            ))}
        </div>
      </Container>
    </>
  );
};

export default ProjectsPage;
