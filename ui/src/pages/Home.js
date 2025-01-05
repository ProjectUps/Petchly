import { Link } from 'react-router-dom';
import Testimonials from '../components/sections/Testimonials';

function Home() {
  const services = [
    {
      id: 1,
      title: "Pet Grooming",
      description: "Professional grooming services for your furry friends",
      icon: "🐾",
    },
    {
      id: 2,
      title: "Virtual Vet",
      description: "24/7 online veterinary consultations",
      icon: "👨‍⚕️",
    },
    {
      id: 3,
      title: "Pet Hotel",
      description: "Comfortable boarding for your pets",
      icon: "🏠",
    },
    {
      id: 4,
      title: "Pet Shop",
      description: "Quality pet supplies and accessories",
      icon: "🛍️",
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Petchly
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your one-stop solution for all pet care needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition duration-300"
              >
                Book a Service
              </Link>
              <Link
                to="/virtual-vet"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
              >
                Virtual Vet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of happy pet parents using Petchly</p>
          <Link
            to="/register"
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition duration-300"
          >
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
