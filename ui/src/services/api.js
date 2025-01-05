const API_BASE_URL = 'http://localhost:5000/api';

export const bookingService = {
  createBooking: async (bookingData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          petName: bookingData.petName,
          petType: bookingData.petType,
          serviceOption: bookingData.serviceOption,
          date: bookingData.date,
          time: bookingData.time,
          notes: bookingData.notes,
          serviceId: bookingData.serviceId
        })
      });
      
      if (!response.ok) {
        throw new Error('Booking failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  },

  getBookings: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings`);
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
  }
}; 