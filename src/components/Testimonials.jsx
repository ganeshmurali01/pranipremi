import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      pet: "Golden Retriever - Max",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      text: "PraniPremi has been amazing! Their grooming services are top-notch. Max always comes back looking and smelling great. The staff is so caring and professional."
    },
    {
      id: 2,
      name: "Rahul Verma",
      pet: "Persian Cat - Whiskers",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      text: "Found my beautiful Persian cat through PraniPremi. The whole process was smooth and they helped with all the documentation. Highly recommended!"
    },
    {
      id: 3,
      name: "Anita Desai",
      pet: "Labrador - Bruno",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      text: "The boarding facility is excellent. Left Bruno there for 2 weeks and he was so happy! The daily updates and photos gave me peace of mind."
    },
    {
      id: 4,
      name: "Vikram Singh",
      pet: "German Shepherd - Rex",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      text: "Best pet products at great prices! Fast delivery and genuine products. Their WhatsApp support is very responsive."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <i className="fas fa-quote-left"></i>
            Testimonials
          </span>
          <h2 className="section-title">
            What Pet Parents <span className="highlight">Say About Us</span>
          </h2>
        </div>

        <div className="testimonials-slider">
          <div 
            className="testimonials-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;