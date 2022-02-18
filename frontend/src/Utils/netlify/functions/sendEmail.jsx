import emailjs from "@emailjs/browser";

const sendEmail = async emailParameters => {
  const { pageOrigin, name, from, subject, body, attachment, resumeText } = emailParameters;
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
  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId,
    templateParams,
    process.env.REACT_APP_EMAILJS_USER_ID
  );
};

export default sendEmail;
