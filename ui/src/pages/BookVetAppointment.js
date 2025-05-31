import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function BookVetAppointment() {
  const [form, setForm] = useState({
    ownerName: '', petName: '', email: '', phone: '', date: '', time: ''
  });
  const [appointment, setAppointment] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const user = auth.currentUser;
    const res = await fetch('/api/bookings/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, userId: user.uid, userEmail: user.email })
    });
    if (res.ok) {
      const data = await res.json();
      setAppointment(data.appointment);
      alert('Appointment booked!');
    } else {
      alert('Failed to book appointment');
    }
  };

  return (
    <div>
      {!appointment ? (
        <form onSubmit={handleSubmit}>
          <input name="ownerName" placeholder="Owner Name" onChange={handleChange} required />
          <input name="petName" placeholder="Pet Name" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} required />
          <input name="date" type="date" onChange={handleChange} required />
          <input name="time" type="time" onChange={handleChange} required />
          <button type="submit">Book Appointment</button>
        </form>
      ) : (
        <div>
          <h2>Appointment Confirmed!</h2>
          <p>
            Date: {new Date(appointment.date).toLocaleDateString()}<br />
            Time: {appointment.time}
          </p>
          <button onClick={() => navigate('/videoconference1')}>
            Join Virtual Vet Call
          </button>
        </div>
      )}
    </div>
  );
} 