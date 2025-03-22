import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-teal-600">Petchly</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-teal-600 px-3 py-2"
            >
              Home
            </Link>
            <Link 
              to="/book" 
              className="text-gray-700 hover:text-teal-600 px-3 py-2"
            >
              Services
            </Link>
            <Link 
              to="/virtual-vet" 
              className="text-gray-700 hover:text-teal-600 px-3 py-2"
            >
              Virtual Vet
            </Link>
            <Link 
              to="/register" 
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 