const express = require("express");
const nodemailer = require("nodemailer");

const email = "tbw@thompsonboilerworks.ca";

const port = 5000;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {}
});

const app = express();

app.post("/email", (req,res) => {
  const options = {
    from: req.body.from,
    to: email,
    subject: req.body.subject,
    body: req.body.body
  };

  transporter.sendMail(options, (error, info) => {});
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Server running on port 5000");
});
