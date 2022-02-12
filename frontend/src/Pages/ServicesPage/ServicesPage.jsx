import React, { useRef } from "react";
import { PageHeader, ServiceCard, CustomServicesNav } from "Components/";
import { Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import servicesHeader from "Assets/images/services/services-header.webp";
import serviceOne from "Assets/images/services/services-rental-boilers.webp";
import serviceTwo from "Assets/images/services/services-industrial-maintenance.webp";
import serviceThree from "Assets/images/services/services-fabrication.webp";
import serviceFour from "Assets/images/services/services-high-pressure.webp";
import "./ServicesPage.scss";

const ServicesPage = props => {
  const { t } = useTranslation();
  const servicesObject = t("services.service", { returnObjects: true });
  const serviceRefs = useRef(
    Array.from({ length: Object.keys(servicesObject).length }, () => React.createRef())
  );
  const serviceImages = [serviceOne, serviceTwo, serviceThree, serviceFour];
  return (
    <>
      <PageHeader
        imagePath={servicesHeader}
        pageTitle={t("services.title")}
        backgroundPosition="center"
      />
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
                image={serviceImages[index]}
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
