import React from 'react';

const hotelRoomNames = ["Cozy Den", "Deluxe Suite", "Royal Palace"];
const isHotelBooking = (booking) =>
  booking.numberOfNights || hotelRoomNames.includes(booking.serviceName);

function BookingList({ bookings, onSelectBooking, loading }) {
  if (loading) {
    return <div className="animate-pulse">Loading bookings...</div>;
  }

  const hotelBookings = bookings.filter(isHotelBooking);
  const serviceBookings = bookings.filter(b => !isHotelBooking(b));

  const renderBooking = (booking) => (
    <li
      key={booking._id}
      className="px-4 py-4 hover:bg-gray-50 cursor-pointer"
      onClick={() => onSelectBooking(booking)}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-indigo-600">
            {booking.referenceNumber}
          </p>
          <p className="text-sm text-gray-900">{booking.petName}</p>
          <p className="text-sm text-gray-500">{booking.serviceName}</p>
          {isHotelBooking(booking)
            ? <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full ml-2">Hotel</span>
            : <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">Service</span>
          }
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-900">
            {new Date(booking.date).toLocaleDateString()}
          </p>
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
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </span>
        </div>
      </div>
    </li>
  );

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">Bookings</h3>
      </div>
      {hotelBookings.length > 0 && (
        <>
          <div className="px-4 py-2 font-bold text-blue-700">Hotel Bookings</div>
          <ul className="divide-y divide-gray-200">
            {hotelBookings.map(renderBooking)}
          </ul>
        </>
      )}
      {serviceBookings.length > 0 && (
        <>
          <div className="px-4 py-2 font-bold text-green-700">Service Bookings</div>
          <ul className="divide-y divide-gray-200">
            {serviceBookings.map(renderBooking)}
          </ul>
        </>
      )}
    </div>
  );
}

export default BookingList;
