import React from 'react';

function ExportBookings({ bookings }) {
  const exportToCSV = () => {
    const headers = ['Reference', 'Pet Name', 'Service', 'Date', 'Time', 'Status', 'Owner', 'Email', 'Phone'];
    const data = bookings.map(booking => [
      booking.referenceNumber,
      booking.petName,
      booking.serviceName,
      new Date(booking.date).toLocaleDateString(),
      booking.time,
      booking.status,
      booking.ownerName,
      booking.email,
      booking.phone
    ]);

    const csvContent = [
      headers.join(','),
      ...data.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'bookings.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={exportToCSV}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
    >
      Export CSV
    </button>
  );
}

export default ExportBookings;
