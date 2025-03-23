import React from 'react';
import ServiceCard from '../components/ServiceCard';

function Services({ onBookService }) {
  const services = [
    {
      id: 1,
      name: 'Basic Grooming',
      description: 'Basic grooming service including bath, brush, and nail trim. Perfect for regular maintenance.',
      price: 50,
      image: 'https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Full Grooming',
      description: 'Complete grooming service including bath, haircut, brush, and nail trim. Best for a fresh new look.',
      price: 80,
      image: 'https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Spa Package',
      description: 'Luxury spa treatment including massage, special shampoo, and conditioning. The ultimate pet pampering.',
      price: 100,
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.pexels.com/photos/6816851/pexels-photo-6816851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Happy pets"
          />
          <div className="absolute inset-0 bg-[#2A3342] bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto text-center">
            Professional pet grooming services tailored to your pet's needs. Book your appointment today!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onBookService={onBookService}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;