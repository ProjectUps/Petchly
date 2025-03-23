const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create booking
router.post('/', async (req, res) => {
  try {
    console.log('📝 Received booking data:', req.body);

    // Validate required fields
    const requiredFields = ['petName', 'petType', 'ownerName', 'email', 'phone', 'serviceId', 'serviceName', 'date', 'time'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      console.log('❌ Missing fields:', missingFields);
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Create booking
    const booking = new Booking(req.body);
    console.log('📋 Attempting to save booking:', booking);

    // Save booking
    const savedBooking = await booking.save();
    console.log('✅ Booking saved successfully:', savedBooking);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking: savedBooking
    });

  } catch (error) {
    console.error('❌ Server Error:', error);
    
    if (error.name === 'ValidationError') {
      console.log('❌ Validation Error:', error.errors);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: Object.values(error.errors).map(err => err.message)
      });
    }

    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the booking',
      error: error.message
    });
  }
});

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    console.log('📚 Retrieved bookings:', bookings.length);
    res.json(bookings);
  } catch (error) {
    console.error('❌ Error fetching bookings:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
