import React, { useEffect, useRef, useState } from 'react';

function Hero({ setCurrentPage }) {
  // Helpful debug counters (valid only inside the component)
  console.count('Hero render');

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalInitialized = useRef(false); // guard so we don't create multiple intervals

  const slides = [
    {
      title: 'Premium Pet Grooming',
      subtitle: 'Give your furry friend the spa treatment they deserve',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1920',
      cta: 'Book Grooming',
    },
    {
      title: 'Luxury Pet Boarding',
      subtitle: 'A home away from home for your beloved pets',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920',
      cta: 'Book Boarding',
    },
    {
      title: 'Find Your Perfect Pet',
      subtitle: 'Adopt, buy or sell pets with trusted families',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920',
      cta: 'Explore Pets',
    },
  ];

  useEffect(() => {
    console.count('Hero useEffect (interval setup)');

    // Prevent duplicate intervals if the component re-mounts in dev or hot reload
    if (intervalInitialized.current) return;
    intervalInitialized.current = true;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      intervalInitialized.current = false;
    };
    // `slides.length` is constant here; if you later make slides dynamic,
    // move slides outside the component or ensure a stable dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openWhatsApp(service) {
    const message = encodeURIComponent(
      'Hi! I am interested in ' + service + ' at PraniPremi. Please help me book an appointment.'
    );
    window.open('https://wa.me/919876543210?text=' + message, '_blank');
  }

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={'hero-slide ' + (index === currentSlide ? 'active' : '')}
            style={{ backgroundImage: 'url(' + slide.image + ')' }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <div className="hero-badge">
                <i className="fas fa-paw" />
                <span>Welcome to PraniPremi</span>
              </div>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => openWhatsApp(slide.title)}
                >
                  <i className="fab fa-whatsapp" />
                  {slide.cta}
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setCurrentPage('services')}
                >
                  <i className="fas fa-arrow-right" />
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-indicators">
        <button
          className={'indicator ' + (currentSlide === 0 ? 'active' : '')}
          onClick={() => setCurrentSlide(0)}
        />
        <button
          className={'indicator ' + (currentSlide === 1 ? 'active' : '')}
          onClick={() => setCurrentSlide(1)}
        />
        <button
          className={'indicator ' + (currentSlide === 2 ? 'active' : '')}
          onClick={() => setCurrentSlide(2)}
        />
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-heart" />
          </div>
          <div className="stat-info">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Happy Pets</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-star" />
          </div>
          <div className="stat-info">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-users" />
          </div>
          <div className="stat-info">
            <span className="stat-number">3000+</span>
            <span className="stat-label">Pet Parents</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-award" />
          </div>
          <div className="stat-info">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;