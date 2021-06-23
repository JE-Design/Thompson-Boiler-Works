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
import { sendEmail, sendFile } from "Utils/Requests";
import { DropzoneArea } from "material-ui-dropzone";
import { CustomSnackbar } from "Components";

import "./CareersForm.scss";

const MAX_FILE_SIZE = 3000000;

const CareersForm = () => {
  const { t } = useTranslation();
  const styled = "blackUnderline";
  //form validation
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
          .max(1000, t("formValidation.length.resumeText")),
      }),
    }),
  });
  const [radioValue, setRadioValue] = useState("upload");
  const [refreshValue, setRefreshValue] = useState(0);
  const [snackbar, setSnackbar] = useState({
    severity: "error",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [ apiCommunication, setApiCommunication ] = useState(false)
  const updateRadio = (e) => {
    setRadioValue(e.target.value);
  };

  //called when a file is dropped
  const onDrop = (file) => {
    sendFile(file)
      .then((response) => {
        if (response.status === 200) {
          setOpenSnackbar(true);
          setSnackbar({
            severity: "success",
            message: t("careers.form.success"),
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 500) {
          setOpenSnackbar(true);
          setSnackbar({
            severity: "error",
            message: t("careers.form.errorFile"),
          });
        }
      });
  };

  //called when a file is rejected
  const onRejected = (files) => {
    let rejectMessage =
      files[0].size > MAX_FILE_SIZE
        ? t("careers.form.largeFile")
        : files[0].type !== "application/pdf"
        ? t("careers.form.incorrectFile")
        : t("careers.form.invalidFile");
    setOpenSnackbar(true);
    setSnackbar({
      severity: "error",
      message: rejectMessage,
    });
  };

  //if form passes validation, send email
  const onSubmit = (data) => {
    const emailParameters = {
      pageOrigin: "CAREERS",
      name: data.name,
      from: data.email,
      subject: data.subject,
      body: data.body,
      resumeFormat: data.resumeFormat,
      resumeText: data.resumeText,
    };
    setApiCommunication(true);
    sendEmail(emailParameters)
      .then((response) => {
        if (response.status === 200) {
          reset({ name: "", email: "", subject: "", body: "" });
          setRefreshValue(refreshValue + 1);
          setOpenSnackbar(true);
          setSnackbar({
            severity: "success",
            message: t("careers.form.success"),
          })
        }
      })
      .catch((error) => {
        setOpenSnackbar(true);
        setSnackbar({
          severity: "error",
          message: t("careers.form.fail"),
        });
      })
      .finally(()=> {
        setApiCommunication(false);
      })
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
            error={errors.email ? true : false}
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
            error={errors.body ? true : false}
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
            {(radioValue === "upload") ? 
                <Typography className="info-text" variant="body1">{t("careers.form.dropzoneLabel")}</Typography>
              :
              <></>
            }
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
                error={errors.resumeText ? true : false}
                helperText={errors.resumeText ? errors.resumeText.message : ""}
              />
            ) : (
              <DropzoneArea
                key={refreshValue}
                dropzoneClass="resume-upload"
                onDrop={onDrop}
                maxFileSize={MAX_FILE_SIZE}
                onDropRejected={onRejected}
                showPreviewsInDropzone={false}
                acceptedFiles={["application/pdf"]}
                filesLimit={1}
                showPreviews={true}
                useChipsForPreview={true}
                showAlerts={false}
              ></DropzoneArea>
            )}
          </div>
        </div>
        <Button className="submit" type="submit" variant="contained" disabled={apiCommunication}>
          {!apiCommunication && t("contact.form.button")}
          {apiCommunication && <CircularProgress/>}
        </Button>
      </form>
      <CustomSnackbar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
      ></CustomSnackbar>
    </>
  );
};

export default CareersForm;
