import React from "react";
import { PageHeader, CareersForm } from "Components/";
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import headerImage from "Assets/images/careers/careers-header.webp";
import "./CareersPage.scss";

const CareersPage = props => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader
        imagePath={headerImage}
        pageTitle={t("careers.title")}
        backgroundPosition="center"
      />
      <Container className="careers-page">
        <div className="flavor">
          <Typography align="center" className="flavor-text" variant="h5">
            {t("careers.flavorText")}
          </Typography>
        </div>
        <CareersForm />
      </Container>
    </>
  );
};

export default CareersPage;
