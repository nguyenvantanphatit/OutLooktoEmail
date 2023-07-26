import nodemailer from "nodemailer";
const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Send success");
    }
  });
};

const EmailSender = ({ email, subject, message }) => {
  const options = {
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    text: message,
  };

  Email(options);
};

export default EmailSender;
