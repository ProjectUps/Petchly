import React from 'react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_...'); // Replace with your Stripe public key

function Checkout() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = async () => {
    // In production, you should create a Checkout Session on your backend!
    // For demo, just alert:
    alert('This would redirect to Stripe Checkout. (Backend required for real payment)');
    clearCart();
  };

  return (
    <div className="max-w-2xl mx-auto py-16">
      <h2 className="text-2xl font-bold mb-8">Checkout</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <span className="font-semibold">{item.name}</span> x {item.qty}
            </div>
            <div>${(item.price * item.qty).toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <div className="font-bold text-lg mt-6">Total: ${total.toFixed(2)}</div>
      <button
        className="mt-8 px-8 py-3 bg-[#2A3342] text-white rounded-full"
        onClick={handleCheckout}
      >
        Pay with Stripe
      </button>
    </div>
  );
}

export default Checkout; 