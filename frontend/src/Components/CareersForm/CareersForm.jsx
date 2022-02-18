import React, { useState } from "react";
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
import { DropzoneAreaBase } from "material-ui-dropzone";
import { CustomSnackbar } from "Components";

import "./CareersForm.scss";

const MAX_FILE_SIZE = 500000;

const CareersForm = () => {
  const { t } = useTranslation();
  const styled = "blackUnderline";
  const [acceptedFiles, setAcceptedFiles] = useState([]);
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

  // called when a file is dropped
  const onDrop = files => {
    const file = files[0];
    setAcceptedFiles([].concat(file));
    setOpenSnackbar(true);
    setSnackbar({
      severity: "success",
      message: t("careers.form.successUpload")
    });
  };

  const onRejected = files => {
    const file = files[0];
    const rejectMessage =
      // eslint-disable-next-line no-nested-ternary
      file.size > MAX_FILE_SIZE
        ? t("careers.form.largeFile")
        : file.type !== "application/pdf"
        ? t("careers.form.incorrectFile")
        : t("careers.form.invalidFile");
    setOpenSnackbar(true);
    setSnackbar({
      severity: "error",
      message: rejectMessage
    });
  };

  const onDelete = () => {
    setAcceptedFiles([]);
  };

  // if form passes validation, send email
  const onSubmit = data => {
    const emailParameters = {
      pageOrigin: "CAREERS",
      name: data.name,
      from: data.email,
      subject: data.subject,
      body: data.body,
      ...(acceptedFiles[0] && { attachment: acceptedFiles[0] }),
      ...(data.resumeText && { resumeText: data.resumeText })
    };
    setApiCommunication(true);
    sendEmail(emailParameters)
      .then(response => {
        if (response.status === 200) {
          reset({ name: "", email: "", subject: "", body: "" });
          setRefreshValue(refreshValue + 1);
          setOpenSnackbar(true);
          setSnackbar({
            severity: "success",
            message: t("careers.form.success")
          });
          setAcceptedFiles([]);
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {radioValue === "upload" ? (
              <Typography className="info-text" variant="body1">
                {t("careers.form.dropzoneLabel")}
              </Typography>
            ) : (
              <></>
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
            {radioValue === "paste" ? (
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
            ) : (
              <DropzoneAreaBase
                key={refreshValue}
                fileObjects={acceptedFiles}
                dropzoneClass="resume-upload"
                onAdd={onDrop}
                onDelete={onDelete}
                maxFileSize={MAX_FILE_SIZE}
                showPreviewsInDropzone={false}
                onDropRejected={onRejected}
                acceptedFiles={["application/pdf"]}
                filesLimit={1}
                showPreviews
                useChipsForPreview
                showAlerts={false}
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
