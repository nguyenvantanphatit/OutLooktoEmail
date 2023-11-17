import nodemailer from "nodemailer";

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp-mail.outlook.com",
    // port: 587,
    // secure: false,
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
      console.log("Thanh Cong");
    }
  });
};

const EmailSender = ({ email, subject, message }) => {
  const options = {
    from: `Tan Phat`,
    to: email,
    subject: subject,
    html: ` 
    <html>
    <body>
            <div>
                <p>${message}</p>
            </div>
            </body>
            </html>
        `,
  };
  Email(options);
};

export default EmailSender;
