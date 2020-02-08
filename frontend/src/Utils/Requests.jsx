import axios from "axios";

const sendEmail = emailParameters => {
  const emailObject = {
    origin: emailParameters.origin,
    name: emailParameters.name,
    from: emailParameters.from,
    subject: emailParameters.subject,
    body: emailParameters.body,
    resumeText: emailParameters.resumeText
  };
  axios
    .post(
      "/api/email",
      { emailObject },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

const sendFile = file => {
  console.log(file);
  let formData = new FormData();
  formData.append("resume", file);
  axios
    .post(
      "/api/file",
      { formData },
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export { sendEmail, sendFile };
