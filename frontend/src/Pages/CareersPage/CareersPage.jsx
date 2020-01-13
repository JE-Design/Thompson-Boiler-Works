import React, { useState, useEffect } from "react";
import { PageHeader } from "Components/";
import {
  Container,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import { useTranslation } from "react-i18next";
import aboutImage from "Assets/images/contact-page-header.jpg";
import "./CareersPage.scss";

const AboutPage = props => {
  const { t } = useTranslation();
  const [radioValue, setRadioValue] = useState("upload");
  useEffect(() => {
    props.setNotLanding(true);
  });
  const updateRadio = e => {
    setRadioValue(e.target.value);
  };
  return (
    <>
      <PageHeader imagePath={aboutImage} pageTitle={t("careers.title")} />
      <Container className="careers-page">
        <div className="flavor">
          <Typography align="center" className="flavor-text" variant="h5">
            {t("careers.flavorText")}
          </Typography>
        </div>
        <form>
          <div className="careers-form">
            <TextField label={t("careers.labels.name")} variant="filled" />
            <TextField label={t("careers.labels.email")} variant="filled" />
            <TextField label={t("careers.labels.body")} multiline rows="5" variant="filled" />
            <RadioGroup
              aria-label="upload format"
              name="format"
              className="careers-form-radios"
              value={radioValue}
              onChange={updateRadio}
            >
              <FormControlLabel
                value="upload"
                control={<Radio disableRipple />}
                label={t("careers.labels.upload")}
              />
              <FormControlLabel
                value="paste"
                control={<Radio control={<Radio disableRipple />} />}
                label={t("careers.labels.paste")}
              />
            </RadioGroup>
            <div className="careers-form-resume">
              {radioValue === "paste" ? (
                <TextField
                  label={t("careers.labels.resume")}
                  multiline
                  rows="10"
                  variant="filled"
                />
              ) : (
                <DropzoneArea
                  dropzoneClass="dropzone"
                  filesLimit={1}
                  dropzoneText={t("careers.dropzoneText")}
                />
              )}
            </div>
          </div>
          <Button className="submit" variant="contained">
            {t("contact.form.button")}
          </Button>
        </form>
      </Container>
    </>
  );
};

export default AboutPage;
