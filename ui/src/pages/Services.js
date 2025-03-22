import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: "Pet Grooming",
      description: "Professional grooming services for your pet",
      price: "$50",
      image: "https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg",
      options: ["Bath & Brush", "Full Grooming", "Nail Trim", "Ear Cleaning"]
    },
    {
      id: 2,
      name: "Pet Boarding",
      description: "Safe and comfortable boarding facilities",
      price: "$40/night",
      image: "https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg",
      options: ["Day Care", "Overnight Stay", "Extended Stay", "VIP Suite"]
    },
    {
      id: 3,
      name: "Veterinary Care",
      description: "Regular check-ups and medical care",
      price: "From $75",
      image: "https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg",
      options: ["Check-up", "Vaccination", "Dental Care", "Minor Treatment"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div 
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-48">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg';
                }}
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Services Include:</h3>
                <ul className="space-y-1">
                  {service.options.map((option, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="mr-2">•</span>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center mt-6">
                <span className="text-2xl font-bold text-teal-600">{service.price}</span>
                <button
                  onClick={() => setSelectedService(service)}
                  className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <BookingModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}

export default Services; 