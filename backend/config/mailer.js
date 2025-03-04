const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, htmlContent) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail", // You can use other providers like SMTP, Outlook, etc.
      auth: {
        user: "walzonowithus@gmail.com",
        pass: "syoz kqvw eczw tvci",
      },
    });

    let mailOptions = {
      from: 'walzonowithus@gmail.com',
      to,
      subject,
      html: htmlContent, // Custom HTML template
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
