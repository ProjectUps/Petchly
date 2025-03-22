import * as React from 'react';

function ServiceCard({ service, onBookNow }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <img 
        src={service.image} 
        alt={service.name}
        className="w-full h-48 object-cover"
      />
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
            onClick={() => onBookNow(service)}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard; 