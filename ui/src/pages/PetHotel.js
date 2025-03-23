import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaHotel, FaWifi, FaUtensils, FaVideo, FaHeart, FaBone, FaBath, FaTemperatureLow } from 'react-icons/fa';

function PetHotel() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingType, setBookingType] = useState('nightly');

  const hotelFeatures = [
    {
      icon: <FaHotel className="w-6 h-6" />,
      title: "Luxury Suites",
      description: "Spacious, climate-controlled rooms for maximum comfort"
    },
    {
      icon: <FaUtensils className="w-6 h-6" />,
      title: "Gourmet Meals",
      description: "Premium pet food and treats served daily"
    },
    {
      icon: <FaPaw className="w-6 h-6" />,
      title: "Playtime",
      description: "Supervised play sessions in our dedicated play areas"
    },
    {
      icon: <FaVideo className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock care and video surveillance"
    },
    {
      icon: <FaWifi className="w-6 h-6" />,
      title: "Pet Webcam",
      description: "Check on your pet anytime through our webcam service"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Special Care",
      description: "Personalized attention and medical care if needed"
    }
  ];

  const roomTypes = [
    {
      id: 1,
      name: "Cozy Den",
      nightPrice: "49",
      hourlyPrice: "8",
      image: "https://images.pexels.com/photos/7489793/pexels-photo-7489793.jpeg",
      features: [
        "Comfortable pet bed",
        "Climate controlled",
        "Basic toys",
        "2 meals/day",
        "Daily cleaning"
      ],
      petSize: "Small pets (up to 20 lbs)",
      description: "A snug, comfortable space perfect for small pets who enjoy cozy environments"
    },
    {
      id: 2,
      name: "Deluxe Suite",
      nightPrice: "79",
      hourlyPrice: "12",
      image: "https://images.pexels.com/photos/6131007/pexels-photo-6131007.jpeg",
      features: [
        "Spacious play area",
        "Premium pet bed",
        "Toy selection",
        "3 meals/day",
        "Window view",
        "Daily grooming"
      ],
      petSize: "Medium pets (20-50 lbs)",
      description: "A roomy suite with dedicated play space and premium amenities"
    },
    {
      id: 3,
      name: "Royal Palace",
      nightPrice: "129",
      hourlyPrice: "20",
      image: "https://images.pexels.com/photos/7489831/pexels-photo-7489831.jpeg",
      features: [
        "Extra large suite",
        "Luxury orthopedic bed",
        "Premium toys",
        "4 meals/day",
        "24/7 Webcam",
        "Private play area",
        "Spa services"
      ],
      petSize: "Large pets (50+ lbs)",
      description: "The ultimate in pet luxury with maximum space and premium services"
    }
  ];

  const amenities = [
    {
      icon: <FaBone className="w-8 h-8" />,
      title: "Play Areas",
      description: "Indoor and outdoor play zones"
    },
    {
      icon: <FaBath className="w-8 h-8" />,
      title: "Grooming",
      description: "Spa and grooming services"
    },
    {
      icon: <FaTemperatureLow className="w-8 h-8" />,
      title: "Climate Control",
      description: "Perfect temperature year-round"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg"
            alt="Pet Hotel"
          />
          <div className="absolute inset-0 bg-[#2A3342]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Luxury Pet Hotel
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              A 5-star resort experience for your furry family members
            </p>
            <div className="mt-10">
              <a
                href="#booking"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2A3342] hover:bg-[#1F2937] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Stay
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-[#FDF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2A3342]">Premium Pet Care Features</h2>
            <p className="mt-4 text-xl text-gray-600">Everything your pet needs for a comfortable stay</p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hotelFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105"
              >
                <div className="text-[#2A3342] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2A3342] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Room Types Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2A3342]">Luxury Accommodations</h2>
            <p className="mt-4 text-xl text-gray-600">Choose the perfect room for your pet</p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col h-full"
              >
                <div className="relative h-64">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#2A3342] mb-2">{room.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-2xl font-bold text-[#2A3342]">
                        ${room.nightPrice}<span className="text-sm text-gray-600">/night</span>
                      </p>
                      <p className="text-lg text-[#2A3342]">
                        ${room.hourlyPrice}<span className="text-sm text-gray-600">/hour</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <p className="text-[#2A3342] font-medium mb-4">{room.petSize}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <FaPaw className="w-4 h-4 mr-2 text-[#2A3342]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="w-full bg-[#2A3342] text-white py-3 rounded-full hover:bg-[#1F2937] transition-colors duration-300 mt-auto"
                  >
                    Select Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div id="booking" className="py-24 bg-[#FDF8F4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-[#2A3342] text-center mb-8">Book a Stay</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Booking Type</label>
                  <select 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]"
                    value={bookingType}
                    onChange={(e) => setBookingType(e.target.value)}
                  >
                    <option value="nightly">Nightly Stay</option>
                    <option value="hourly">Hourly Care</option>
                  </select>
                </div>
                
                {bookingType === 'nightly' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Date</label>
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Start Time</label>
                      <input
                        type="time"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Duration (hours)</label>
                      <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]">
                        {[1,2,3,4,5,6,7,8].map(hours => (
                          <option key={hours} value={hours}>{hours} hour{hours > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pet Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pet Type</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]">
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pet Size</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]">
                    <option>Small (up to 20 lbs)</option>
                    <option>Medium (20-50 lbs)</option>
                    <option>Large (50+ lbs)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Room Type</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]">
                    {roomTypes.map(room => (
                      <option key={room.id} value={room.id}>{room.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Special Requirements</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2A3342] focus:ring-[#2A3342]"
                  placeholder="Any special needs, dietary requirements, or medical conditions..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2A3342] text-white py-3 rounded-full hover:bg-[#1F2937] transition-colors duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetHotel; 