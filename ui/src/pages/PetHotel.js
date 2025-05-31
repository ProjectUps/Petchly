import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaHotel, FaWifi, FaUtensils, FaVideo, FaHeart, FaBone, FaBath, FaTemperatureLow, FaTimes } from 'react-icons/fa';
import BookingModal from '../components/BookingModal';

function PetHotel() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState('nightly');

  // Add state for booking form fields
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  // Optionally, set serviceId/serviceName based on selectedRoom
  const serviceId = selectedRoom ? selectedRoom.id : '';
  const serviceName = selectedRoom ? selectedRoom.name : '';

  // Ref for the room types section
  const roomTypesRef = useRef(null);

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
      image: "https://images.pexels.com/photos/4587996/pexels-photo-4587996.jpeg", // Cozy pet room
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
      image: "https://images.pexels.com/photos/4587985/pexels-photo-4587985.jpeg", // Deluxe pet suite
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
      image: "https://images.pexels.com/photos/4587990/pexels-photo-4587990.jpeg", // Luxury pet suite
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

  // Open modal with selected room
  const openBookingModal = (room = null) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Scroll to room types section
  const scrollToRoomTypes = () => {
    if (roomTypesRef.current) {
      roomTypesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
    document.body.style.overflow = 'unset';
    // Reset form fields
    setPetName('');
    setPetType('');
    setOwnerName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setNotes('');
  };

  // Map selectedRoom to the service prop expected by BookingModal
  const mappedService = selectedRoom
    ? {
        id: selectedRoom.id,
        name: selectedRoom.name,
        price: bookingType === 'hourly' ? selectedRoom.hourlyPrice : selectedRoom.nightPrice,
      }
    : null;

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
              <button
                onClick={scrollToRoomTypes}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2A3342] hover:bg-[#1F2937] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Book Now
              </button>
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
                <div className="flex items-center justify-center text-[#2A3342] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2A3342] mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Room Types Section */}
      <div className="py-24 bg-white" ref={roomTypesRef}>
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
                    onClick={() => openBookingModal(room)}
                    className="w-full bg-[#2A3342] text-white py-3 rounded-full hover:bg-[#1F2937] transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={closeBookingModal}
        service={mappedService}
        hotelMode={true}
      />
    </div>
  );
}

// Add these styles to your CSS
const styles = `
@keyframes modalAppear {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-modal-appear {
  animation: modalAppear 0.3s ease-out forwards;
}
`;

export default PetHotel; 