const sendEmail = require('../services/sendEmail');

const submitContact = async (req, res) => {
  try {
    const { fullName, companyName, email, phone, requirement, message } = req.body;

    // Validation: Check required fields
    // Validate all required fields
    if (!fullName || !companyName || !email || !phone || !requirement || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (Full Name, Company Name, Email, Phone, Requirement, Message) are required.',
      });
    }

    // Prepare contact data
    const contactData = {
      fullName,
      companyName: companyName || 'N/A',
      email,
      phone: phone || 'N/A',
      requirement: requirement || 'other',
      message: message || 'N/A',
    };

    // Send email
    await sendEmail(contactData);

    // Success response
    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully',
    });
  } catch (error) {
    console.error('Contact submission error:', error);

    // Failure response
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

module.exports = {
  submitContact,
};