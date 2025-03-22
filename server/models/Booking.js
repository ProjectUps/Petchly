const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  petType: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: String, required: true },
  serviceName: { type: String, required: true },
  serviceId: { type: String, required: true },
  serviceOption: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  ownerName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  notes: String,
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  price: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
