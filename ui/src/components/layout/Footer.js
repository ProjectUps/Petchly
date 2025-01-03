import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Petchly</h3>
          <p>Your all-in-one pet care platform</p>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Pet Grooming</li>
            <li>Virtual Vet Care</li>
            <li>Pet Hotel</li>
            <li>Pet Shop</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@petchly.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
