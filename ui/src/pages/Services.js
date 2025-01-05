import React, { useState } from 'react';
import BookingForm from '../components/forms/BookingForm';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  
  const services = [
    {
      id: 1,
      name: "Pet Grooming",
      description: "Professional grooming services for your pets",
      price: "From $50",
      duration: "1-2 hours",
      icon: "🐾",
      options: ["Bath & Brush", "Full Grooming", "Nail Trimming", "Ear Cleaning"]
    },
    {
      id: 2,
      name: "Pet Hotel",
      description: "Comfortable boarding for your pets",
      price: "From $40/night",
      duration: "24 hours",
      icon: "🏠",
      options: ["Standard Room", "Luxury Suite", "Day Care", "Extended Stay"]
    },
    {
      id: 3,
      name: "Veterinary Care",
      description: "Regular check-ups and medical care",
      price: "From $75",
      duration: "30-60 mins",
      icon: "⚕️",
      options: ["Check-up", "Vaccination", "Dental Care", "Minor Treatment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">Choose from our range of professional pet care services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-teal-600 font-semibold">{service.price}</span>
                  <span className="text-gray-500 ml-2">• {service.duration}</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {service.options.map((option, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {option}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Book {selectedService.name}</h2>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <BookingForm 
              service={selectedService} 
              onClose={() => setSelectedService(null)} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Services; 