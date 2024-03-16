

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'tonysproject12@gmail.com',
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

module.exports = transporter