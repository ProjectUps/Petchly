import React from 'react';

function BookingCalendar({ bookings, onSelectBooking }) {
  // Group bookings by date
  const bookingsByDate = bookings.reduce((acc, booking) => {
    const date = new Date(booking.date).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(booking);
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Booking Calendar</h2>
        {Object.entries(bookingsByDate).map(([date, dayBookings]) => (
          <div key={date} className="mb-6">
            <h3 className="text-md font-medium text-gray-700 mb-2">{date}</h3>
            <div className="space-y-2">
              {dayBookings.map(booking => (
                <div
                  key={booking._id}
                  onClick={() => onSelectBooking(booking)}
                  className="cursor-pointer p-3 rounded-md border border-gray-200 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{booking.time} - {booking.petName}</p>
                      <p className="text-sm text-gray-500">{booking.serviceName}</p>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : booking.status === 'confirmed'
                          ? 'bg-green-100 text-green-800'
                          : booking.status === 'completed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingCalendar;
