import React from 'react';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to know more about PraniPremi services.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fas fa-paw"></i>
                <span>PraniPremi</span>
              </div>
              <p>Your trusted partner for all pet care needs. We provide grooming, boarding, pet buying/selling, and quality pet products.</p>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#youtube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home" onClick={() => setCurrentPage('home')}>Home</a></li>
                <li><a href="#services" onClick={() => setCurrentPage('services')}>Our Services</a></li>
                <li><a href="#pets" onClick={() => setCurrentPage('pets')}>Buy/Sell Pets</a></li>
                <li><a href="#products" onClick={() => setCurrentPage('products')}>Pet Products</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Mumbai, India</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>hello@pranipremi.com</span>
                </li>
              </ul>
              <button className="btn btn-whatsapp" onClick={openWhatsApp}>
                <i className="fab fa-whatsapp"></i>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} PraniPremi. All rights reserved. Made with ❤️ for pets.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;