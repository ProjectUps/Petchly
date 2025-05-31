import React from 'react';

const team = [
  {
    name: "Danial Khoo",
    role: "Founder & Head Groomer",
    image: "https://scontent.fsin17-1.fna.fbcdn.net/v/t39.30808-6/502708336_10231843551645676_7156562243199796943_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=S0Q2JEoDJUYQ7kNvwGCMIdg&_nc_oc=Adm8uUwa28WurivKV3THV2Ldcu-IrRBC1JATVuq0asx8oW1x9VMH5xsOknqas0LGNQc&_nc_zt=23&_nc_ht=scontent.fsin17-1.fna&_nc_gid=IRzFYSqrdGEyxX3QSjLaWA&oh=00_AfKHPrMdhBu0xznVEYbAGhE2q_PhMJWxfv_0kP6Q70HAew&oe=68406981",
    bio: "With over 10 years of experience, Danial leads our team with a passion for animal welfare and grooming excellence."
  },
  {
    name: "Sarah Tan",
    role: "Veterinary Consultant",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Sarah is a certified vet who ensures every pet receives the best medical attention and advice, both in-person and virtually."
  },
  {
    name: "Mike Chen",
    role: "Pet Hotel Manager",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Mike makes sure your pets feel at home, providing a safe, fun, and loving environment while you're away."
  }
];

function About() {
  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      {/* Hero Section */}
      <section className="bg-[#2A3342] text-white py-20">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-4">
          {/* Text */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">About Petchly</h1>
            <p className="text-xl mb-6 max-w-xl">
              Your trusted partner in pet care, grooming, and wellness.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=800&q=80"
              alt="Happy pets"
              className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-md object-cover"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2A3342] mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Petchly, our mission is to provide exceptional, holistic care for your pets—ensuring their happiness, health, and comfort at every stage of life.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex-1">
              <h3 className="text-xl font-semibold text-[#2A3342] mb-2">Compassion</h3>
              <p className="text-gray-600">We treat every pet as our own, with love, patience, and respect.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex-1">
              <h3 className="text-xl font-semibold text-[#2A3342] mb-2">Expertise</h3>
              <p className="text-gray-600">Our certified team brings years of experience in grooming, veterinary care, and pet hospitality.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex-1">
              <h3 className="text-xl font-semibold text-[#2A3342] mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace technology to make pet care more accessible, including virtual vet consultations and online booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2A3342] text-center mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-[#FDF8F4] rounded-xl shadow-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-[#2A3342]">{member.name}</h3>
                <p className="text-[#2A3342] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2A3342] text-center mb-10">Why Choose Petchly?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
              <span className="text-3xl text-[#2A3342]">🏆</span>
              <div>
                <h4 className="font-semibold text-lg text-[#2A3342]">Award-Winning Service</h4>
                <p className="text-gray-600">Recognized for excellence in pet care and customer satisfaction.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
              <span className="text-3xl text-[#2A3342]">🩺</span>
              <div>
                <h4 className="font-semibold text-lg text-[#2A3342]">Comprehensive Wellness</h4>
                <p className="text-gray-600">From grooming to veterinary care, we cover all your pet's needs under one roof.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
              <span className="text-3xl text-[#2A3342]">💬</span>
              <div>
                <h4 className="font-semibold text-lg text-[#2A3342]">Personalized Support</h4>
                <p className="text-gray-600">We listen to your concerns and tailor our services for every pet and owner.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
              <span className="text-3xl text-[#2A3342]">🌐</span>
              <div>
                <h4 className="font-semibold text-lg text-[#2A3342]">Modern & Convenient</h4>
                <p className="text-gray-600">Book appointments, consult vets, and manage your pet's care online, anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#2A3342] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Petchly Difference?</h2>
        <p className="text-lg mb-8">Book a service or reach out to our team today. Your pet's happiness starts here!</p>
        <a
          href="/services"
          className="inline-block px-8 py-3 bg-white text-[#2A3342] font-semibold rounded-full shadow hover:bg-gray-200 transition"
        >
          Book Now
        </a>
      </section>
    </div>
  );
}

export default About; 