import React, { useState } from 'react';
import Modal from './Modal';
import { toast } from 'react-toastify';

function HotelBookingModal({ isOpen, onClose, room }) {
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    ownerName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    notes: '',
    mealPreference: 'standard',
    additionalServices: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5001/api/hotel-bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          roomId: room.id,
          roomName: room.name,
          pricePerNight: room.price,
          status: 'pending'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`Hotel booking created successfully! Reference: ${data.referenceNumber}`);
        onClose();
        setFormData({
          petName: '',
          petType: '',
          ownerName: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          notes: '',
          mealPreference: 'standard',
          additionalServices: []
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to create booking');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to create booking. Please try again.');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-[#2A3342] mb-6">
          Book {room?.name}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pet Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#2A3342]">Pet Information</h4>
            {/* Similar fields as BookingModal but with additional hotel-specific fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-in Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.checkIn}
                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-out Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.checkOut}
                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                min={formData.checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meal Preference
              </label>
              <select
                value={formData.mealPreference}
                onChange={(e) => setFormData({ ...formData, mealPreference: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="standard">Standard Meals</option>
                <option value="premium">Premium Meals (+$10/day)</option>
                <option value="special">Special Diet (+$15/day)</option>
              </select>
            </div>
          </div>

          {/* Additional Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#2A3342]">Additional Services</h4>
            <div className="space-y-2">
              {['Daily Grooming', 'Playtime Sessions', 'Webcam Access'].map((service) => (
                <label key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.additionalServices.includes(service)}
                    onChange={(e) => {
                      const services = e.target.checked
                        ? [...formData.additionalServices, service]
                        : formData.additionalServices.filter(s => s !== service);
                      setFormData({ ...formData, additionalServices: services });
                    }}
                    className="h-4 w-4 text-[#2A3342] focus:ring-[#2A3342] border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 border border-transparent rounded-full text-white bg-[#2A3342] hover:bg-[#1F2937]"
            >
              Book Stay
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default HotelBookingModal; 