const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const secrets = require("../secret/back-secret.json");

const sender = "contact.thompsonboilerworks@gmail.com";
const receiver = "contact.thompsonboilerworks@gmail.com";

const sendEmail = (form, resume, cb) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: sender,
      pass: `${secrets.GOOGLE_APP_PASSWORD}`
      
    },
  });

  // if not resume is provided, don't send an email and throw an error
  if ((form.pageOrigin === "CAREERS") && (form.resumeFormat === "upload")) {
    if (resume === undefined) { 
      transporter.close()
      cb(400, "No resume was uploaded");
      return;
    }
  }

  //format subject of email
  const subject = `TBW-WEBSITE - ${form.pageOrigin} - FROM: ${form.name} ${
    form.pageOrigin === "CONTACT" ? `REGARDING: ${form.subject}` : ""
  }`;
  //format email
  const options = {
    from: sender,
    to: receiver,
    subject: subject,
    attachments:
      form.pageOrigin === "CAREERS" && form.resumeFormat === "upload"
        ? [
            {
              filename: resume.filename,
              path: resume.path,
            },
          ]
        : [],
    html: `<h1>${form.pageOrigin === "CONTACT" ? form.subject : "Careers Application"}</h1>
            <p>From: ${form.name} (${form.from})</p>
            <p>${form.body}</p>
            <p>${
              form.resumeFormat === "paste" && form.pageOrigin === "CAREERS" ? form.resumeText : ""
            }</p>`,
  };
  //send email
  transporter.sendMail(options, (error, info) => {
    if (error) cb(500, error.message);
    transporter.close();
    cb(200, info);
  });
};
module.exports = sendEmail;
