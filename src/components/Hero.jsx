import React, { useState, useEffect } from 'react';

const Hero = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Pet Grooming",
      subtitle: "Give your furry friend the spa treatment they deserve",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1920",
      cta: "Book Grooming"
    },
    {
      title: "Luxury Pet Boarding",
      subtitle: "A home away from home for your beloved pets",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920",
      cta: "Book Boarding"
    },
    {
      title: "Find Your Perfect Pet",
      subtitle: "Adopt, buy or sell pets with trusted families",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920",
      cta: "Explore Pets"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const openWhatsApp = (service) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${service} at PraniPremi. Please help me book an appointment.`);
    window.open(`https://wa.me/919741226158?text=${message}`, '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-badge">
                <i className="fas fa-paw"></i>
                <span>Welcome to PraniPremi</span>
              </div>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => openWhatsApp(slide.title)}
                >
                  <i className="fab fa-whatsapp"></i>
                  {slide.cta}
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setCurrentPage('services')}
                >
                  <i className="fas fa-arrow-right"></i>
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-heart"></i>
          </div>
          <div className="stat-info">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Happy Pets</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="stat-info">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-info">
            <span className="stat-number">3000+</span>
            <span className="stat-label">Pet Parents</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-award"></i>
          </div>
          <div className="stat-info">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;