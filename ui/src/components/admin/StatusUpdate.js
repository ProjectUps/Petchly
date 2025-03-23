import React from 'react';

function StatusUpdate({ currentStatus, onStatusUpdate }) {
  const statuses = ['pending', 'confirmed', 'completed', 'cancelled'];

  return (
    <select
      value={currentStatus}
      onChange={(e) => onStatusUpdate(e.target.value)}
      className={`rounded-full text-sm font-medium px-3 py-1 ${
        currentStatus === 'pending'
          ? 'bg-yellow-100 text-yellow-800'
          : currentStatus === 'confirmed'
          ? 'bg-green-100 text-green-800'
          : currentStatus === 'completed'
          ? 'bg-blue-100 text-blue-800'
          : 'bg-red-100 text-red-800'
      }`}
    >
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </option>
      ))}
    </select>
  );
}

export default StatusUpdate;
