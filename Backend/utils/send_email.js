import nodemailer from "nodemailer";

/*
EMAIL_HOST=mail.codinmage.org
EMAIL_PORT=465
EMAIL_USERNAME=developer@codinmage.org
EMAIL_PASSWORD=CodinMageDeveloper
EMAIL_FROM=developer@codinmage.org
*/



const sendMail = async (recipient, title, content) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ecommerceapp123123@gmail.com",
      pass: "nrvdlrmubqwutanr",
    }
  });
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Here")
      const message = {
        from: "ecommerceapp123123@gmail.com",
        to: "oluwaferanmialausa2001@gmail.com",
        subject: "Forgot password",
        html: "<p>New password: 123133</p>",
      };
      transporter.sendMail(message, () => {
        console.log("email sent");
      });
    }
  });
}


//sendMail(["oluwaferanmialausa2001@gmail.com"], "Forgot password", "<p>New password: 123133</p>");

export default sendMail;