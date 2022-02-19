import emailjs from "@emailjs/browser";

const sendEmail = async ({ emailParameters, formRef }) => {
  const {
    pageOrigin,
    name,
    from,
    subject,
    body,
    submissionType,
    attachment,
    resumeText
  } = emailParameters;
  const templateId =
    pageOrigin === "CONTACT"
      ? process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID
      : process.env.REACT_APP_EMAILJS_CAREERS_TEMPLATE_ID;
  const templateParams = {
    name,
    from,
    subject,
    body,
    ...(attachment && { attachment }),
    ...(resumeText && { resumeText })
  };
  if (pageOrigin === "CAREERS" && submissionType === "upload") {
    return emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      templateId,
      formRef,
      process.env.REACT_APP_EMAILJS_USER_ID
    );
  }
  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId,
    templateParams,
    process.env.REACT_APP_EMAILJS_USER_ID
  );
};

export default sendEmail;
