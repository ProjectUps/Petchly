const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create booking
router.post('/', async (req, res) => {
  try {
    console.log('📝 Received booking data:', req.body);
    
    const booking = new Booking({
      ...req.body,
      referenceNumber: 'BK-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    });
    
    const savedBooking = await booking.save();
    console.log('✅ Booking saved:', savedBooking);
    
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('❌ Error saving booking:', error);
    res.status(400).json({ message: error.message });
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
