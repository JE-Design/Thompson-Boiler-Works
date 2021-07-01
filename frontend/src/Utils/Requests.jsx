import axios from "axios";

const sendEmail = emailParameters => {
  const emailObject = {
    pageOrigin: emailParameters.pageOrigin,
    name: emailParameters.name,
    from: emailParameters.from,
    subject: emailParameters.subject,
    body: emailParameters.body,
    resumeFormat: emailParameters.resumeFormat,
    resumeText: emailParameters.resumeText
  };
  return axios
    .post("/api/email", emailObject, {
      headers: {
        "Content-Type": "application/json"
      }
    });
};

const sendFile = file => {
  let formData = new FormData();
  formData.append("resume", file, file.name);
  return axios
    .post("/api/resume", formData, {
      headers: {
        "Content-Type": `multipart/form-data;`
      }
    });
};

const deleteFile = () => {
  return axios.delete("/api/resume");
}

export { sendEmail, sendFile, deleteFile };
