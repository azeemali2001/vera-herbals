const nodemailer = require('nodemailer');

const sendEmail = async (contactData) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // Office365/GoDaddy uses STARTTLS on port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    // Email content
    const mailOptions = {
      from: `"Vera Herbals Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Enquiry – Vera Herbals',
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Full Name:</strong> ${contactData.fullName}</p>
        <p><strong>Company Name:</strong> ${contactData.companyName}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Phone:</strong> ${contactData.phone}</p>
        <p><strong>Business Requirement:</strong> ${contactData.requirement}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message}</p>
        <hr>
        <p><em>This enquiry was submitted via the Vera Herbals website contact form.</em></p>
      `,
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      return true;
    } catch (smtpError) {
      console.error('SMTP send error:', smtpError);
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email send error:', error);
    throw new Error('Failed to send email');
  }
};

module.exports = sendEmail;