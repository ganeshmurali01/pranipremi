import React, { useState } from 'react';

const PetStore = ({ fullPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Pets', icon: 'fa-paw' },
    { id: 'dogs', label: 'Dogs', icon: 'fa-dog' },
    { id: 'cats', label: 'Cats', icon: 'fa-cat' },
    { id: 'birds', label: 'Birds', icon: 'fa-dove' },
  ];

  const pets = [
    {
      id: 1,
      name: "Golden Retriever Puppy",
      category: "dogs",
      breed: "Golden Retriever",
      age: "3 months",
      gender: "Male",
      price: 25000,
      image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800",
      vaccinated: true,
      trained: false,
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Persian Cat",
      category: "cats",
      breed: "Persian",
      age: "1 year",
      gender: "Female",
      price: 15000,
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800",
      vaccinated: true,
      trained: true,
      location: "Delhi"
    },
    {
      id: 3,
      name: "Labrador Puppy",
      category: "dogs",
      breed: "Labrador",
      age: "2 months",
      gender: "Female",
      price: 18000,
      image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800",
      vaccinated: true,
      trained: false,
      location: "Bangalore"
    },
    {
      id: 4,
      name: "Cockatiel",
      category: "birds",
      breed: "Cockatiel",
      age: "6 months",
      gender: "Male",
      price: 3500,
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800",
      vaccinated: false,
      trained: true,
      location: "Chennai"
    }
  ];

  const filteredPets = activeCategory === 'all' 
    ? pets 
    : pets.filter(pet => pet.category === activeCategory);

  const openWhatsApp = (pet) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${pet.name} (${pet.breed}) listed at ₹${pet.price.toLocaleString()}. Please provide more details.`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section className={`pet-store-section ${fullPage ? 'full-page' : ''}`} id="pets">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <i className="fas fa-paw"></i>
            Pet Store
          </span>
          <h2 className="section-title">
            Find Your <span className="highlight">Perfect Companion</span>
          </h2>
          <p className="section-subtitle">
            Adopt, buy or sell pets from verified and trusted sources
          </p>
        </div>

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <i className={`fas ${cat.icon}`}></i>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="pets-grid">
          {filteredPets.map((pet, index) => (
            <div
              key={pet.id}
              className="pet-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="pet-image">
                <img src={pet.image} alt={pet.name} />
                <div className="pet-badges">
                  {pet.vaccinated && (
                    <span className="badge vaccinated">
                      <i className="fas fa-syringe"></i> Vaccinated
                    </span>
                  )}
                  {pet.trained && (
                    <span className="badge trained">
                      <i className="fas fa-graduation-cap"></i> Trained
                    </span>
                  )}
                </div>
              </div>
              
              <div className="pet-content">
                <div className="pet-header">
                  <h3 className="pet-name">{pet.name}</h3>
                  <span className="pet-price">₹{pet.price.toLocaleString()}</span>
                </div>
                
                <div className="pet-details">
                  <span><i className="fas fa-dna"></i> {pet.breed}</span>
                  <span><i className="fas fa-birthday-cake"></i> {pet.age}</span>
                  <span><i className="fas fa-venus-mars"></i> {pet.gender}</span>
                </div>
                
                <div className="pet-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {pet.location}
                </div>
                
                <button 
                  className="btn btn-contact"
                  onClick={() => openWhatsApp(pet)}
                >
                  <i className="fab fa-whatsapp"></i>
                  Contact Seller
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetStore;