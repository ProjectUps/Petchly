import React from 'react';
import { toast } from 'react-toastify';

function PetHotel() {
  const hotelServices = [
    {
      id: 1,
      name: 'Standard Room',
      description: 'Comfortable space with basic amenities, perfect for short stays.',
      price: 50,
      priceUnit: 'per night',
      image: 'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Deluxe Suite',
      description: 'Spacious room with premium bedding and extra play area.',
      price: 80,
      priceUnit: 'per night',
      image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'VIP Suite',
      description: 'Luxury suite with webcam monitoring, premium meals, and grooming service.',
      price: 120,
      priceUnit: 'per night',
      image: 'https://images.pexels.com/photos/7788006/pexels-photo-7788006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.pexels.com/photos/7788239/pexels-photo-7788239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Pet Hotel"
          />
          <div className="absolute inset-0 bg-[#2A3342] bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
            Pet Hotel
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto text-center">
            Luxury accommodation for your beloved pets. Book a comfortable stay with 24/7 care.
          </p>
        </div>
      </div>

      {/* Hotel Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {hotelServices.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  className="h-64 w-full object-cover"
                  src={room.image}
                  alt={room.name}
                />
                <div className="absolute top-0 right-0 m-4">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-[#2A3342] text-white">
                    ${room.price} {room.priceUnit}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2A3342] mb-3">{room.name}</h3>
                <p className="text-gray-600 mb-6">{room.description}</p>
                <button
                  onClick={() => toast.info("Hotel booking coming soon!")}
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2A3342] hover:bg-[#1F2937] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A3342] transition-colors duration-200"
                >
                  Book Stay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PetHotel; 