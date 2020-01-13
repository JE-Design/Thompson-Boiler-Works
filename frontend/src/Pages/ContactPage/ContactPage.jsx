import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PageHeader } from "Components/";
import { Button, Container, TextField } from "@material-ui/core";
import contactImage from "Assets/images/contact-page-header.jpg";
import "./ContactPage.scss";

const ContactPage = props => {
  const { t } = useTranslation();
  useEffect(() => {
    props.setNotLanding(true);
  });
  return (
    <>
      <PageHeader imagePath={contactImage} pageTitle="Contact" />
      <Container className="contact-page">
        <div className="contact-form">
          <p className="contact-form-title">{t("contact.form.tagline")}</p>
          <TextField label={t("contact.form.name")} variant="filled" />
          <TextField label={t("contact.form.email")} variant="filled" />
          <TextField label={t("contact.form.subject")} variant="filled" />
          <TextField label={t("contact.form.body")} multiline rows="5" variant="filled" />
          <Button variant="contained">{t("contact.form.button")}</Button>
        </div>
        <div className="contact-info">
          {/*
            The google maps embed that needs an api key

            <iframe
              title="map"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZy1pVWMKzkwRzSNkeLZIx5s&key=..."
              allowFullScreen
            />
          */}
          <h1 className="google emebed">GOOGLE EMBED HERE</h1>
          <div className="contact-info-div">
            <h2 className="contact-info-title">{t("contact.info.company")}</h2>
            <p className="contact-info-text">
              {`${t("contact.info.address")}
              ${t("contact.info.city-province")}
              ${t("contact.info.country")}
              ${t("contact.info.postal-code")}
            `}
            </p>

            <p className="contact-info-text">
              {`${t("contact.info.email")}
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
