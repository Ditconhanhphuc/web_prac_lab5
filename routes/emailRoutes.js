const express = require('express');
const sendEmail = require('../controllers/emailController');  // Import sendEmail controller

const router = express.Router();

// POST route to send email
router.post('/send-email', async (req, res) => {
  const { email, subject, content } = req.body;

  if (!email || !subject || !content) {
    return res.status(400).json({ error: 'Email, subject, and content are required.' });
  }

  try {
    // Send the email using the controller function
    await sendEmail(email, subject, content);

    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

module.exports = router;
