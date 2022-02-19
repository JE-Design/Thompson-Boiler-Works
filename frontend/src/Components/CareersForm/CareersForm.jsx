import React, { useState, useRef } from "react";
import {
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  CircularProgress
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { string as yupstring, object as yupobject } from "yup";
import { useForm } from "react-hook-form";
import { sendEmail } from "Utils/";
import { CustomSnackbar } from "Components";

import "./CareersForm.scss";

// eslint-disable-next-line no-unused-vars
const MAX_FILE_SIZE = 500000;

const CareersForm = () => {
  const { t } = useTranslation();
  const styled = "blackUnderline";
  const formRef = useRef();
  // form validation
  const { handleSubmit, reset, register, errors } = useForm({
    validationSchema: yupobject().shape({
      resumeFormat: yupstring(),
      name: yupstring()
        .required(t("formValidation.required.name"))
        .max(50, t("formValidation.length.name")),
      email: yupstring()
        .required(t("formValidation.required.email"))
        .email(t("formValidation.invalid.email")),
      body: yupstring()
        .required(t("formValidation.required.body"))
        .max(500, t("formValidation.length.body")),
      resumeText: yupstring().when("resumeFormat", {
        is: "paste",
        then: yupstring()
          .required(t("formValidation.required.resumeText"))
          .max(1000, t("formValidation.length.resumeText"))
      })
    })
  });
  const [radioValue, setRadioValue] = useState("upload");
  const [refreshValue, setRefreshValue] = useState(0);
  const [snackbar, setSnackbar] = useState({
    severity: "error",
    message: ""
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [apiCommunication, setApiCommunication] = useState(false);
  const updateRadio = e => {
    setRadioValue(e.target.value);
  };

  // if form passes validation, send email
  const onSubmit = async data => {
    const emailParameters = {
      pageOrigin: "CAREERS",
      name: data.name,
      from: data.email,
      subject: data.subject,
      body: data.body,
      ...(radioValue && { submissionType: radioValue }),
      ...(data.attachment[0] && { attachment: data.attachment[0] }),
      ...(data.resumeText && { resumeText: data.resumeText })
    };
    setApiCommunication(true);
    sendEmail({ emailParameters, formRef: formRef.current })
      .then(response => {
        if (response.status === 200) {
          reset({ name: "", email: "", subject: "", body: "" });
          setRefreshValue(refreshValue + 1);
          setOpenSnackbar(true);
          setSnackbar({
            severity: "success",
            message: t("careers.form.success")
          });
        }
      })
      .catch(error => {
        console.log(error);
        setOpenSnackbar(true);
        setSnackbar({
          severity: "error",
          message: t("careers.form.fail")
        });
      })
      .finally(() => {
        setApiCommunication(false);
      });
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <div className="careers-form">
          <TextField
            id="name"
            label={t("careers.form.name")}
            name="name"
            inputRef={register}
            className={errors.name ? {} : styled}
            variant="filled"
            error={errors.name}
            helperText={errors.name ? errors.name.message : ""}
          />
          <TextField
            id="email"
            label={t("careers.form.email")}
            name="email"
            inputRef={register}
            className={errors.email ? {} : styled}
            variant="filled"
            color="primary"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
          <TextField
            id="body"
            label={t("careers.form.body")}
            name="body"
            inputRef={register}
            className={errors.body ? {} : styled}
            variant="filled"
            color="primary"
            multiline
            rows="5"
            error={!!errors.body}
            helperText={errors.body ? errors.body.message : ""}
          />
          <RadioGroup
            aria-label="upload format"
            id="resumeFormat"
            name="resumeFormat"
            className="careers-form-radios"
            value={radioValue}
            onChange={updateRadio}
          >
            <FormControlLabel
              value="upload"
              name="resumeFormat"
              inputRef={register}
              control={<Radio disableRipple />}
              label={t("careers.form.upload")}
            />
            {radioValue === "upload" && (
              <div className="careers-form-resume">
                <Typography className="info-text" variant="body1">
                  {t("careers.form.dropzoneLabel")}
                </Typography>
                <input id="file-attachment" type="file" name="attachment" ref={register} />
              </div>
            )}
            <FormControlLabel
              value="paste"
              name="resumeFormat"
              inputRef={register}
              control={<Radio control={<Radio disableRipple />} />}
              label={t("careers.form.paste")}
            />
          </RadioGroup>
          <div className="careers-form-resume">
            {radioValue === "paste" && (
              <TextField
                id="resumeText"
                label={t("careers.form.resumeText")}
                name="resumeText"
                inputRef={register}
                variant="filled"
                className={errors.resumeText ? {} : styled}
                multiline
                color="primary"
                rows="5"
                error={!!errors.resumeText}
                helperText={errors.resumeText ? errors.resumeText.message : ""}
              />
            )}
          </div>
        </div>
        <Button className="submit" type="submit" variant="contained" disabled={apiCommunication}>
          {!apiCommunication && t("contact.form.button")}
          {apiCommunication && <CircularProgress />}
        </Button>
      </form>
      <CustomSnackbar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
      />
    </>
  );
};

export default CareersForm;
