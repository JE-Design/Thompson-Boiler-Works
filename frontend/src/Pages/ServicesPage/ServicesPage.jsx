import React, { useLayoutEffect, useRef } from "react";
import { PageHeader, ServiceCard,CustomServicesNav } from "Components/";
import { Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import servicesImage from "Assets/images/contact-page-header.jpg";
import "./ServicesPage.scss";

const ServicesPage = props => {
  const { t } = useTranslation();
  useLayoutEffect(() => {
    props.setNotLanding(true);
  });
  const servicesObject = t("services.service", { returnObjects: true });
  const serviceRefs = useRef(
    Array.from({ length: Object.keys(servicesObject).length }, () => React.createRef())
  );
  return (
    <>
      <PageHeader imagePath={servicesImage} pageTitle={t("services.title")} />
      <Container className="services-page">
        <div className="sticky-nav">
          <CustomServicesNav
            className="services-nav"
            servicesObject={servicesObject}
            serviceRefs={serviceRefs}
          />
        </div>
        <div className="services-content">
          {servicesObject != null &&
            Object.keys(servicesObject).map((key, index) => (
              <ServiceCard
                id={`service-${index}`}
                reference={serviceRefs.current[index]}
                key={key}
                title={t(`services.service.${key}.title`)}
                content={t(`services.service.${key}.body`)}
                image={servicesImage}
                imageAlt={t(`services.service.${key}.imageAlt`)}
                imageCaption={t(`services.service.${key}.imageCaption`)}
              />
            ))}
        </div>
      </Container>
    </>
  );
};

export default ServicesPage;
