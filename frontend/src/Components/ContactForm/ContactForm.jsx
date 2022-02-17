import React, { useState } from "react";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { string as yupstring, object as yupobject } from "yup";
import { useForm } from "react-hook-form";
import { sendEmail } from "Utils/netlify/functions/Requests";
import { CustomSnackbar } from "Components";

import "./ContactForm.scss";

const ContactForm = () => {
  const { t } = useTranslation();
  const styled = "blackUnderline";
  const [snackbar, setSnackbar] = useState({
    severity: "error",
    message: ""
  });
  const [apiCommunication, setApiCommunication] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false);
  //form validation
  const { handleSubmit, reset, register, errors } = useForm({
    validationSchema: yupobject().shape({
      name: yupstring()
        .required(t("formValidation.required.name"))
        .max(50, t("formValidation.length.name")),
      email: yupstring()
        .required(t("formValidation.required.email"))
        .email(t("formValidation.invalid.email")),
      subject: yupstring()
        .required(t("formValidation.required.subject"))
        .max(80, t("formValidation.length.subject")),
      body: yupstring()
        .required(t("formValidation.required.body"))
        .max(1000, t("formValidation.length.resumeText"))
    })
  });
  //handles email submission
  const onSubmit = data => {
    const emailParameters = {
      pageOrigin: "CONTACT",
      name: data.name,
      from: data.email,
      subject: data.subject,
      body: data.body
    };
    setApiCommunication(true);
    sendEmail(emailParameters)
      .then(response => {
        if (response.status === 200) {
          reset({ name: "", email: "", subject: "", body: "" });
          setOpenSnackbar(true);
          setSnackbar({
            severity: "success",
            message: t("contact.form.success")
          });
        }
      })
      .catch(error => {
        if (error.response.status === 422) {
          setOpenSnackbar(true);
          setSnackbar({
            severity: "error",
            message: t("contact.form.badInput")
          });
        } else {
          setOpenSnackbar(true);
          setSnackbar({
            severity: "error",
            message: t("contact.form.fail")
          });
        }
      })
      .finally(() => {
        setApiCommunication(false);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <p className="contact-form-title">{t("contact.form.tagline")}</p>
        <TextField
          id="name"
          label={t("contact.form.name")}
          name="name"
          inputRef={register}
          className={errors.name ? {} : styled}
          variant="filled"
          color="primary"
          error={errors.name ? true : false}
          helperText={errors.name ? errors.name.message : ""}
        />
        <TextField
          id="email"
          label={t("contact.form.email")}
          name="email"
          inputRef={register}
          className={errors.email ? {} : styled}
          variant="filled"
          color="primary"
          error={errors.email ? true : false}
          helperText={errors.email ? errors.email.message : ""}
        />
        <TextField
          id="subject"
          label={t("contact.form.subject")}
          name="subject"
          inputRef={register}
          className={errors.subject ? {} : styled}
          variant="filled"
          color="primary"
          error={errors.subject ? true : false}
          helperText={errors.subject ? errors.subject.message : ""}
        />
        <TextField
          id="body"
          label={t("contact.form.body")}
          name="body"
          multiline
          rows="5"
          inputRef={register}
          className={errors.body ? {} : styled}
          variant="filled"
          color="primary"
          error={errors.body ? true : false}
          helperText={errors.body ? errors.body.message : ""}
        />
        <Button variant="contained" type="submit" disabled={apiCommunication}>
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

export default ContactForm;
