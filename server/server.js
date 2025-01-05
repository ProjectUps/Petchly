const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection with detailed logging
mongoose.connect('mongodb://localhost:27017/petchly')
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
    // Log database details
    const db = mongoose.connection;
    console.log('📚 Database Name:', db.name);
    console.log('🔌 Host:', db.host);
    console.log('🚪 Port:', db.port);
  })
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });

// Add this to log all incoming requests
app.use((req, res, next) => {
  console.log(`📝 ${req.method} Request to ${req.url}`);
  next();
});

// Routes
const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);

// Add error handling
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Add this to handle database connection errors
mongoose.connection.on('error', err => {
  console.error('❌ MongoDB Error:', err);
});

// Add this to log successful saves
mongoose.connection.on('collection.save', () => {
  console.log('✅ Document saved to database');
});
