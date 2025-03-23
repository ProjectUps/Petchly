const mongoose = require('mongoose');

// Function to generate unique reference number
function generateReference() {
  return 'BK' + Date.now().toString().slice(-6) + Math.random().toString(36).slice(-4).toUpperCase();
}

const bookingSchema = new mongoose.Schema({
  referenceNumber: {
    type: String,
    unique: true,
    default: generateReference
  },
  petName: {
    type: String,
    required: [true, 'Pet name is required'],
    trim: true,
    minlength: [2, 'Pet name must be at least 2 characters'],
    maxlength: [50, 'Pet name cannot exceed 50 characters']
  },
  petType: {
    type: String,
    required: [true, 'Pet type is required'],
    enum: {
      values: ['dog', 'cat', 'other'],
      message: '{VALUE} is not a valid pet type'
    }
  },
  ownerName: {
    type: String,
    required: [true, 'Owner name is required'],
    trim: true,
    minlength: [2, 'Owner name must be at least 2 characters'],
    maxlength: [100, 'Owner name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d{8}$/, 'Please enter a valid 8-digit phone number'],
    validate: {
      validator: function(v) {
        return /^[89]\d{7}$/.test(v);
      },
      message: 'Phone number must be 8 digits and start with 8 or 9'
    }
  },
  serviceId: {
    type: String,
    required: [true, 'Service ID is required']
  },
  serviceName: {
    type: String,
    required: [true, 'Service name is required']
  },
  date: {
    type: Date,
    required: [true, 'Booking date is required'],
    validate: {
      validator: function(v) {
        return v >= new Date(new Date().setHours(0, 0, 0, 0));
      },
      message: 'Booking date cannot be in the past'
    }
  },
  time: {
    type: String,
    required: [true, 'Booking time is required'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter a valid time in HH:MM format']
  },
  notes: {
    type: String,
    maxlength: [500, 'Notes cannot exceed 500 characters']
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'confirmed', 'completed', 'cancelled'],
      message: '{VALUE} is not a valid status'
    },
    default: 'pending'
  },
  price: {
    type: String,
    required: [true, 'Price is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add a pre-save hook to validate the booking time
bookingSchema.pre('save', function(next) {
  if (this.date) {
    const bookingDate = new Date(this.date);
    const [hours, minutes] = this.time.split(':');
    bookingDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    if (bookingDate < new Date()) {
      next(new Error('Booking time cannot be in the past'));
    }
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
