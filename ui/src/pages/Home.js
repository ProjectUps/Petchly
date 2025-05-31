import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaHotel, FaHeart, FaClock, FaCheckCircle, FaPhone, FaStethoscope } from 'react-icons/fa';
import Footer from '../components/layout/Footer';
import Testimonials from '../components/sections/Testimonials';

function Home() {
  const features = [
    {
      title: "Professional Grooming",
      description: "Expert grooming services tailored to your pet's needs",
      image: "https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/services",
      icon: <FaPaw className="text-white" />
    },
    {
      title: "Luxury Pet Hotel",
      description: "Comfortable stays with 24/7 care and premium amenities",
      image: "https://www.k9resorts.com/images/portfolio/39214/CherryHill-Interior.jpg",
      link: "/hotel",
      icon: <FaHotel className="text-white" />
    },
    {
      title: "Spa Treatments",
      description: "Relaxing spa treatments for the ultimate pet pampering",
      image: "https://images.pexels.com/photos/3299908/pexels-photo-3299908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/services",
      icon: <FaHeart className="text-white" />
    },
    {
      title: "Virtual Vet",
      description: "24/7 online veterinary consultations for your pet's health needs",
      image: "https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/virtual-vet",
      icon: <FaStethoscope className="text-white" />
    }
  ];

  const benefits = [
    {
      icon: <FaCheckCircle className="h-6 w-6 text-[#2A3342]" />,
      title: "Certified Professionals",
      description: "Our team consists of professionally trained and certified pet care experts"
    },
    {
      icon: <FaClock className="h-6 w-6 text-[#2A3342]" />,
      title: "Flexible Hours",
      description: "Open 7 days a week with convenient morning and evening slots"
    },
    {
      icon: <FaHeart className="h-6 w-6 text-[#2A3342]" />,
      title: "Pet-First Approach",
      description: "We prioritize your pet's comfort and well-being above all"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/6131004/pexels-photo-6131004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Pet Grooming"
          />
          <div className="absolute inset-0 bg-[#2A3342]/60" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Welcome to Petchly
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-10">
              Professional pet grooming and luxury hotel services for your beloved companions
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2A3342] hover:bg-[#1F2937] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Book Grooming
              </Link>
              <Link
                to="/hotel"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-[#2A3342] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Book Hotel
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-[#FDF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A3342] mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the best care for your pets with our professional services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2A3342] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A3342] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our comprehensive range of pet care services</p>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="relative h-64">
                    <img
                      className="h-full w-full object-cover"
                      src={feature.image}
                      alt={feature.title}
                    />
                    <div className="absolute inset-0 bg-[#2A3342]/50" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{feature.icon}</span>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <div className="bg-[#FDF8F4] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2A3342] mb-6">Ready to Book?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Give your pet the care they deserve. Book an appointment today!
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-[#2A3342] text-base font-medium rounded-full text-white hover:bg-[#1F2937] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book Now
          </Link>
        </div>
      </div>
     
    </div>
  );
}

export default Home;
