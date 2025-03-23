const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB with improved error handling
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/petchly')
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
    console.log(`📚 Database Name: ${mongoose.connection.name}`);
    console.log(`🔌 Host: ${mongoose.connection.host}`);
    console.log(`🚪 Port: ${mongoose.connection.port}`);
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  });

// Routes
const bookingRoutes = require('./routes/bookings');
const adminRoutes = require('./routes/admin');
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 5001; // Changed default to 5001
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Handle server errors
process.on('unhandledRejection', (err) => {
  console.log('❌ UNHANDLED REJECTION! Shutting down...');
  console.error('Error:', err);
  server.close(() => {
    process.exit(1);
  });
});
