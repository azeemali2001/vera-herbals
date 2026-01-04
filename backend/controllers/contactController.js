const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

const submitContact = async (req, res) => {
  try {
    const { fullName, companyName, email, phone, requirement, message } = req.body;

    // Validation (additional to schema validation)
    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: 'Full name and email are required',
      });
    }

    // Create new contact enquiry
    const newContact = new Contact({
      fullName,
      companyName,
      email,
      phone,
      requirement,
      message,
    });

    // Save to database
    await newContact.save();

    // Send email notification
    await sendEmail(newContact);

    // Success response
    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
    });
  } catch (error) {
    console.error('Contact submission error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', '),
      });
    }

    // Handle email errors
    if (error.message === 'Failed to send email') {
      return res.status(500).json({
        success: false,
        message: 'Enquiry saved but failed to send email notification',
      });
    }

    // General error
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

module.exports = {
  submitContact,
};