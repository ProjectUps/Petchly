import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/shop" element={<div>Shop Page</div>} />
            <Route path="/virtual-vet" element={<div>Virtual Vet Page</div>} />
            <Route path="/bookings" element={<div>Bookings Page</div>} />
            <Route path="/login" element={<div>Login Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
