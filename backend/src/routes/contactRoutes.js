const express = require('express');
const { submitContact } = require('../controllers/contactController');

const router = express.Router();

// POST /api/contact
router.post('/contact', submitContact);

module.exports = router;