import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PageHeader, ContactForm } from "Components/";
import { Container } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import contactImage from "Assets/images/contact/contact-page-header.jpg";
import "./ContactPage.scss";

const ContactPage = props => {
  const { t } = useTranslation();
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <PageHeader imagePath={contactImage} pageTitle="Contact" backgroundPosition="bottom" />
      <Container className="contact-page">
        <ContactForm />
        <div className="contact-info">
          <Skeleton variant="rect" className={`skeleton ${!hidden ? "hidden" : ""}`} />
          <iframe
            title="map"
            className={`${hidden ? "hidden" : ""}`}
            width="100%"
            height="50%"
            frameBorder="0"
            onLoad={() => setHidden(false)}
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZy1pVWMKzkwRzSNkeLZIx5s&key=${process.env.REACT_APP_GMAPS_API_KEY}`}
            allowFullScreen
          />
          <div className="contact-info-div">
            <h2 className="contact-info-title">{t("contact.info.company")}</h2>
            <p className="contact-info-text">
              {`${t("contact.info.address")}
              ${t("contact.info.city-province")}, ${t("contact.info.country")}
              ${t("contact.info.phone")}
            `}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
