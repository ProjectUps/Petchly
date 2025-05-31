import React, { useState } from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Premium Dog Food',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&w=400',
    description: 'Nutritious and delicious food for your dog.',
    category: 'Food',
    featured: true,
  },
  {
    id: 2,
    name: 'Cat Scratching Post',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&w=400',
    description: 'Keep your cat entertained and your furniture safe.',
    category: 'Toys',
    featured: false,
  },
  {
    id: 3,
    name: 'Pet Shampoo',
    price: 9.99,
    image: 'https://images.pexels.com/photos/4588000/pexels-photo-4588000.jpeg?auto=compress&w=400',
    description: 'Gentle shampoo for a shiny, healthy coat.',
    category: 'Care',
    featured: false,
  },
  {
    id: 4,
    name: 'Chew Toy',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=400',
    description: 'Durable chew toy for hours of fun.',
    category: 'Toys',
    featured: true,
  },
  {
    id: 5,
    name: 'Cat Food Bowl',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&w=400',
    description: 'Stainless steel bowl for easy cleaning.',
    category: 'Food',
    featured: false,
  },
  // Add more products as needed
];

const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

function Shop() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const { cart, addToCart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const filteredProducts = products.filter(
    (product) =>
      (category === 'All' || product.category === category) &&
      (product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()))
  );

  const handleAddToCart = (product) => addToCart(product);

  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.pexels.com/photos/4587996/pexels-photo-4587996.jpeg?auto=compress&w=1200"
          alt="Pet Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2A3342] bg-opacity-60 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Pet Essentials Shop</h1>
          <p className="text-lg text-white max-w-xl">
            Find everything your pet needs, from food to toys and more!
          </p>
        </div>
        {/* Cart Icon */}
        <div className="absolute top-6 right-8 z-20 flex items-center">
          <FaShoppingCart className="text-white text-2xl" />
          <span className="ml-1 bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
            {cartCount}
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4">
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                category === cat
                  ? 'bg-[#2A3342] text-white'
                  : 'bg-white text-[#2A3342] border border-[#2A3342] hover:bg-[#2A3342] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 w-full md:w-64"
        />
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#2A3342] mb-8 text-center">Shop Our Bestsellers</h2>
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-16">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow p-6 flex flex-col items-center relative group transition hover:shadow-lg"
              >
                {product.featured && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <FaStar className="text-white" /> Featured
                  </span>
                )}
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded mb-4 group-hover:scale-105 transition" />
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{product.description}</p>
                <div className="font-bold text-[#2A3342] mb-4">${product.price.toFixed(2)}</div>
                <button
                  className="px-4 py-2 bg-[#2A3342] text-white rounded-full hover:bg-[#1a202c] transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Testimonial/Guarantee Section */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-semibold text-[#2A3342] mb-4">
            <span className="text-pink-500">100% Satisfaction Guarantee</span>
          </p>
          <p className="text-gray-600 mb-6">
            "I always find the best products for my pets at Petchly Shop. Fast delivery and great quality!"<br />
            <span className="italic text-gray-500">- Happy Customer</span>
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-[#2A3342] text-white rounded-full font-medium hover:bg-[#1a202c] transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Shop; 