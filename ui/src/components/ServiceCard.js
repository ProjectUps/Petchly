import React from 'react';

function ServiceCard({ service, onBookService }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
      <div className="relative">
        <img
          className="h-64 w-full object-cover"
          src={service.image}
          alt={service.name}
        />
        <div className="absolute top-0 right-0 m-4">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-[#2A3342] text-white">
            ${service.price}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#2A3342] mb-3">{service.name}</h3>
        <p className="text-gray-600 mb-6 min-h-[80px]">{service.description}</p>
        <button
          onClick={() => onBookService(service)}
          className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2A3342] hover:bg-[#1F2937] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A3342] transition-colors duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default ServiceCard; 