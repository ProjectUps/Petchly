import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<div className="p-4">Test Route</div>} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<div className="p-4">Shop Page</div>} />
          <Route path="/virtual-vet" element={<div className="p-4">Virtual Vet Page</div>} />
          <Route path="/login" element={<div className="p-4">Login Page</div>} />
          <Route path="/register" element={<div className="p-4">Register Page</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
