const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sendEmail = require('./utils/sendEmail');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins (adjust for production)
app.use(express.json()); // Parse JSON bodies

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, companyName, email, phone, requirement, message } = req.body;

    // Validation: Check required fields
    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: 'Full name and email are required',
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
});

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Vera Herbals Backend API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});