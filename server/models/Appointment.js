import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  petName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, default: 'scheduled' }, // scheduled, completed, cancelled
  notes: { type: String },
  userId: { type: String },
  userEmail: { type: String }
}, { timestamps: true });

export default mongoose.model('Appointment', appointmentSchema); 