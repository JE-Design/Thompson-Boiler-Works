const express = require("express");
const { check, body, validationResult } = require("express-validator");
const uploadResume = require("../api/upload-resume");
const sendEmail = require("../api/send-email");
const router = express.Router();

var resume;

router.post(
  "/api/email",
  [
    check('pageOrigin').custom((value, {req}) => {
	console.log(`Attempt validate: ${value}`);
	return ['CONTACT', 'CAREERS'].includes(value); 
    }),
    check("name")
      .isLength({ min: 2 })
      .withMessage("Must be longer than 2")
      .isAlpha()
      .withMessage("Must only consist of letters")
      .escape(),
    check("from")
      .isEmail()
      .withMessage("Invalid email")
      .normalizeEmail(),
    check("subject")
      .if(
        body("pageOrigin")
          .not()
          .contains("CAREERS")
      )
      .isLength({ min: 2 })
      .withMessage("Must be longer than 2")
      .isAlphanumeric()
      .withMessage("Must be alphanumeric")
      .escape(),
    check("body")
      .isLength({ min: 2 })
      .withMessage("Must be longer than 2")
      .escape(),
    check("resumeText")
      .if(body("pageOrigin").contains("CAREERS"))
      .if(body("resumeFormat").not().contains("upload"))
      .isLength({ min: 2 })
      .withMessage("Must be longer than 2")
      .escape()
  ],
  (req, res) => {
    console.log(req.body);
    //calls form validation and returns error if there is one
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //call send email api and return status response
    sendEmail(req.body, resume, (status, data) => {
      res.status(status).send(data);
    });
  }
);

router.post("/api/resume", (req, res) => {
  //upload resume
  uploadResume(req, (upload, data) => {
    //checks if there was an error uploading file
    if (upload === null)
      res
        .send()
        .status(500)
        .send(data);
    //update resume
    resume = upload;
    //send response
    res.send(upload);
  });
});

module.exports = router;
