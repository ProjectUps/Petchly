import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Petchly</Link>
      </div>
      <div className="nav-links">
        <Link to="/services">Pet Services</Link>
        <Link to="/shop">Pet Shop</Link>
        <Link to="/virtual-vet">Virtual Vet</Link>
        <Link to="/bookings">My Bookings</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
