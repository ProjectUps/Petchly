import React from 'react';

function BookingConfirmation({ booking, onClose }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h2>
        <div className="text-3xl">✅</div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800">Your booking has been successfully scheduled.</p>
          <p className="text-sm text-green-600 mt-1">Booking Reference: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        </div>

        <div className="border-t border-b border-gray-200 py-4">
          <h3 className="font-semibold mb-2">Booking Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Service</p>
              <p className="font-medium">{booking.serviceOption}</p>
            </div>
            <div>
              <p className="text-gray-600">Pet Name</p>
              <p className="font-medium">{booking.petName}</p>
            </div>
            <div>
              <p className="text-gray-600">Date</p>
              <p className="font-medium">{booking.date}</p>
            </div>
            <div>
              <p className="text-gray-600">Time</p>
              <p className="font-medium">{booking.time}</p>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p>We've sent a confirmation email with these details.</p>
          <p className="mt-1">Please arrive 10 minutes before your appointment.</p>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default BookingConfirmation; 