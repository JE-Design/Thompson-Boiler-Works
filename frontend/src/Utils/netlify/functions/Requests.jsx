import emailjs from "@emailjs/browser"

const sendEmail = async emailParameters => {
  const { pageOrigin, name, from, subject, body, resumeFormat, resumeText } = emailParameters;
  const templateId = pageOrigin === "CONTACT" ? process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID : 
                                                process.env.REACT_APP_EMAILJS_CAREERS_TEMPLATE_ID;
  const templateParams = {
    name,
    from,
    subject,
    body,
    ...(resumeFormat && {resumeFormat}),
    ...(resumeText && {resumeText})
  };
  return await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                            templateId,
                            templateParams,
                            process.env.REACT_APP_EMAILJS_USER_ID)
};

// const sendFile = file => {
//   let formData = new FormData();
//   formData.append("resume", file, file.name);
//   return axios
//     .post(`${process.env.REACT_APP_API_URL}/api/resume`, formData, {
//       headers: {
//         "Content-Type": `multipart/form-data;`
//       }
//     });
// };

// const deleteFile = () => {
//   return axios.delete(`${process.env.REACT_APP_API_URL}/api/resume`);
// }

export { sendEmail }; //sendFile, deleteFile };
