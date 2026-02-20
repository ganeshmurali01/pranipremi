import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Navbar = ({ setCurrentPage, currentPage, setShowCart, setShowProfile }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, user } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'services', label: 'Our Services', icon: 'fa-concierge-bell' },
    { id: 'pets', label: 'Buy/Sell Pets', icon: 'fa-paw' },
    { id: 'products', label: 'Products', icon: 'fa-box' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => setCurrentPage('home')}>
          <div className="logo-icon">
            <i className="fas fa-paw"></i>
          </div>
          <span className="logo-text">PraniPremi</span>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={currentPage === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button 
            className="nav-btn cart-btn" 
            onClick={() => setShowCart(true)}
            aria-label="Shopping Cart"
          >
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          
          <button 
            className="nav-btn profile-btn" 
            onClick={() => setShowProfile(true)}
            aria-label="User Profile"
          >
            {user ? (
              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
            ) : (
              <i className="fas fa-user"></i>
            )}
          </button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;