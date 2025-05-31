import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginModal({ isOpen, onClose, onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onSuccess();
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-xs relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>✕</button>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <h2 className="text-lg font-bold mb-2">{isRegister ? "Register" : "Login"}</h2>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
          <button type="submit" className="bg-blue-600 text-white py-1 rounded">{isRegister ? "Register" : "Login"}</button>
          <button type="button" className="text-blue-600 underline" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Have an account? Login" : "No account? Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
