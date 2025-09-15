const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const complaintRoutes = require('./routes/complaintRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Define PORT first
const PORT = process.env.PORT || 5000;

// Root route (browser message)
app.get('/', (req, res) => {
  res.send(`🚀 Server is running on port ${PORT}`);
});

// Routes
app.use('/api/complaints', complaintRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err.message);
  });

// Server listen
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
