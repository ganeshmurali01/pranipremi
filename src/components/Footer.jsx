import React from 'react';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to know more about PraniPremi services.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

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

            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#grooming">Pet Grooming</a></li>
                <li><a href="#boarding">Pet Boarding</a></li>
                <li><a href="#training">Pet Training</a></li>
                <li><a href="#vet">Veterinary Care</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Pet Street, Mumbai, India</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>hello@pranipremi.com</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>Mon - Sat: 9AM - 8PM</span>
                </li>
              </ul>
              <button className="btn btn-whatsapp" onClick={openWhatsApp}>
                <i className="fab fa-whatsapp"></i>
                Chat on WhatsApp
              </button>
            </div>
          </div>

          <div className="footer-newsletter">
            <div className="newsletter-content">
              <h4>Subscribe to our Newsletter</h4>
              <p>Get updates on pet care tips and exclusive offers!</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} PraniPremi. All rights reserved. Made with ❤️ for pets.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#refund">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;