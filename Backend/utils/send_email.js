import nodemailer from "nodemailer";



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
        to: recipient,
        subject: title,
        html: content,
      };
      transporter.sendMail(message, () => {
        console.log("email sent");
      });
    }
  });
}


//sendMail(["oluwaferanmialausa2001@gmail.com"], "Forgot password", "<p>New password: 123133</p>");

export default sendMail;