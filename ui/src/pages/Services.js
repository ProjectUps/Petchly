import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { FaPaw, FaSpa, FaBath, FaHeart, FaUserShield, FaSmile } from 'react-icons/fa';

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
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/6816851/pexels-photo-6816851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Happy pets"
          />
          <div className="absolute inset-0 bg-[#2A3342] bg-opacity-50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Professional pet grooming services tailored to your pet's needs. Book your appointment today!
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-[#2A3342] text-center mb-8">Why Choose Petchly?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <FaHeart className="text-pink-500 text-3xl mb-2" />
            <h3 className="font-semibold text-lg mb-1">Pet-Loving Team</h3>
            <p className="text-gray-600 text-sm text-center">Our staff are passionate animal lovers, ensuring your pet is always in caring hands.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <FaUserShield className="text-blue-500 text-3xl mb-2" />
            <h3 className="font-semibold text-lg mb-1">Trusted & Safe</h3>
            <p className="text-gray-600 text-sm text-center">We use only safe, high-quality products and maintain the highest hygiene standards.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <FaSmile className="text-yellow-500 text-3xl mb-2" />
            <h3 className="font-semibold text-lg mb-1">Happy Pets, Happy Owners</h3>
            <p className="text-gray-600 text-sm text-center">Our services are designed to make both pets and their owners smile!</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#2A3342] mb-8 text-center">Our Popular Packages</h2>
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

      {/* Call to Action */}
      <section className="bg-[#2A3342] py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Pamper Your Pet?</h2>
        <p className="text-lg text-white mb-8">Book a service with us today and let your pet experience the Petchly difference!</p>
        <a
          href="/book"
          className="inline-block px-8 py-3 bg-white text-[#2A3342] font-semibold rounded-full shadow hover:bg-gray-200 transition"
        >
          Book Now
        </a>
      </section>
    </div>
  );
}

export default Services;