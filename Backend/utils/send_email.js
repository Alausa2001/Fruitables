import nodemailer from "nodemailer";



const sendMail = async (recipient, title, content) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "deborahonaojosule@gmail.com",
      pass: "mxrhjsbxnghpwtaw",
    }
  });
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      const message = {
        from: "deborahonaojosule@gmail.com",
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


export default sendMail;