import React, { useState } from 'react';

const Services = ({ fullPage }) => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Pet Grooming",
      icon: "fa-scissors",
      color: "#FF6B9D",
      description: "Professional grooming services including bathing, haircuts, nail trimming, and more.",
      features: ["Full Body Bath & Dry", "Hair Cutting & Styling", "Nail Trimming & Filing", "Ear Cleaning", "Teeth Brushing", "Flea Treatment"],
      price: "Starting ₹499",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800"
    },
    {
      id: 2,
      title: "Pet Boarding",
      icon: "fa-house",
      color: "#6B5BFF",
      description: "Safe and comfortable boarding facilities with 24/7 care for your beloved pets.",
      features: ["24/7 Supervision", "Spacious Kennels", "Regular Exercise", "Nutritious Meals", "Medical Care", "Play Sessions"],
      price: "Starting ₹799/day",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800"
    },
    {
      id: 3,
      title: "Pet Training",
      icon: "fa-graduation-cap",
      color: "#FFB84D",
      description: "Expert training programs to help your pet learn obedience and good behavior.",
      features: ["Basic Obedience", "Potty Training", "Leash Training", "Socialization", "Behavioral Correction", "Trick Training"],
      price: "Starting ₹1499",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    },
    {
      id: 4,
      title: "Veterinary Care",
      icon: "fa-stethoscope",
      color: "#4ECDC4",
      description: "Complete veterinary services including checkups, vaccinations, and treatments.",
      features: ["Health Checkups", "Vaccinations", "Deworming", "Surgery", "Emergency Care", "Health Certificates"],
      price: "Starting ₹299",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800"
    },
    {
      id: 5,
      title: "Pet Taxi",
      icon: "fa-car",
      color: "#96CEB4",
      description: "Safe and comfortable transportation for your pets to and from our facility.",
      features: ["AC Vehicles", "Trained Handlers", "GPS Tracking", "Pet-Friendly Crates", "Door-to-Door Service", "Insurance Covered"],
      price: "Starting ₹199",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800"
    },
    {
      id: 6,
      title: "Pet Photography",
      icon: "fa-camera",
      color: "#DDA0DD",
      description: "Professional pet photography sessions to capture precious moments.",
      features: ["Studio Sessions", "Outdoor Shoots", "Digital Photos", "Print Options", "Props & Costumes", "Video Recording"],
      price: "Starting ₹999",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800"
    }
  ];

  const openWhatsApp = (service) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${service} service at PraniPremi. Please provide more details and help me book an appointment.`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section className={`services-section ${fullPage ? 'full-page' : ''}`} id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <i className="fas fa-concierge-bell"></i>
            Our Services
          </span>
          <h2 className="section-title">
            Premium Care for Your <span className="highlight">Beloved Pets</span>
          </h2>
          <p className="section-subtitle">
            We offer comprehensive pet care services with love and expertise
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${activeService === service.id ? 'active' : ''}`}
              style={{ '--service-color': service.color, '--delay': `${index * 0.1}s` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <button 
                    className="book-btn"
                    onClick={() => openWhatsApp(service.title)}
                  >
                    <i className="fab fa-whatsapp"></i>
                    Book Now
                  </button>
                </div>
              </div>
              
              <div className="service-content">
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <span key={i} className="feature-tag">
                      <i className="fas fa-check"></i>
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="service-footer">
                  <span className="service-price">{service.price}</span>
                  <button 
                    className="service-btn"
                    onClick={() => openWhatsApp(service.title)}
                  >
                    Book <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Need a Custom Package?</h3>
            <p>Contact us for personalized pet care solutions tailored to your needs</p>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => openWhatsApp('custom package')}
          >
            <i className="fab fa-whatsapp"></i>
            Chat With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;