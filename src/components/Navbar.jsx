import React, { useState, useEffect } from 'react';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'products', label: 'Product' },
    { id: 'services', label: 'Use Cases' },
    { id: 'cart', label: 'Pricing' },
    { id: 'testimonials', label: 'Blog' },
    { id: 'pets', label: 'Resources' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={styles.navbar(isScrolled)}>
      <div className="navbar-container" style={styles.container}>
        <div className="logo" onClick={() => setCurrentPage('home')} style={styles.logo}>
          <span className="google-symbols" style={{ color: 'var(--google-blue)', fontSize: '28px' }}>explore</span>
          <span style={styles.logoText}>Google Antigravity</span>
        </div>

        <ul style={styles.navLinks}>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                style={styles.navLink(currentPage === item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {item.label}
                {item.id === 'pets' && <span className="google-symbols" style={{ fontSize: '18px', marginLeft: '4px' }}>keyboard_arrow_down</span>}
              </a>
            </li>
          ))}
        </ul>

        <div style={styles.navActions}>
          <button className="btn btn-primary" style={styles.downloadBtn}>
            Download <span className="google-symbols" style={{ fontSize: '20px' }}>download</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: (isScrolled) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    padding: isScrolled ? '12px 0' : '20px 0',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
    transition: 'all var(--transition-normal)'
  }),
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 32px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer'
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em'
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: 0,
    padding: 0
  },
  navLink: (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
    fontWeight: isActive ? '500' : '400',
    fontSize: '0.95rem',
    transition: 'color var(--transition-fast)'
  }),
  navActions: {
    display: 'flex',
    alignItems: 'center'
  },
  downloadBtn: {
    padding: '10px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500'
  }
};

export default Navbar;