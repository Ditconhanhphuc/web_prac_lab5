const nodemailer = require('nodemailer');

// Create a transporter using your email service provider (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail', // For Gmail, or you can use other services
  auth: {
    user: process.env.EMAIL_USER, // Your email address (stored in .env file for security)
    pass: process.env.EMAIL_PASS, // Your email password (stored in .env file for security)
  },
  tls: {
    rejectUnauthorized: false,  // Cài đặt này cho phép sử dụng chứng chỉ tự ký (thỉnh thoảng cần thiết)
  },
});

// Function to send email
const sendEmail = (to, subject, content) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: to, // Receiver address
    subject: subject, // Email subject
    text: content, // Email content
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
