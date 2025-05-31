import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/shop" className="text-[#2A3342] underline">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16">
      <h2 className="text-2xl font-bold mb-8">Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <span className="font-semibold">{item.name}</span> x {item.qty}
            </div>
            <div>
              ${(item.price * item.qty).toFixed(2)}
              <button
                className="ml-4 text-red-500"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="font-bold text-lg mt-6">Total: ${total.toFixed(2)}</div>
      <div className="mt-8 flex gap-4">
        <button
          className="px-6 py-2 bg-[#2A3342] text-white rounded-full"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <Link
          to="/checkout"
          className="px-6 py-2 bg-pink-500 text-white rounded-full"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart; 