// complaintRoutes.js
const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint.js');

// Create new complaint
router.post('/', async (req, res) => {
  try {
    const { title, description, submittedBy } = req.body;
    const newComplaint = new Complaint({ title, description, submittedBy });
    await newComplaint.save();
    res.status(201).json({ message: 'Complaint submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit complaint', error });
  }
});

// Fetch all complaints
router.get('/', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch complaints', error });
  }
});

module.exports = router;
