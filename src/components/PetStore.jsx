import React, { useState } from 'react';

const PetStore = ({ fullPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const categories = [
    { id: 'all', label: 'All Pets', icon: 'fa-paw' },
    { id: 'dogs', label: 'Dogs', icon: 'fa-dog' },
    { id: 'cats', label: 'Cats', icon: 'fa-cat' },
    { id: 'birds', label: 'Birds', icon: 'fa-dove' },
    { id: 'fish', label: 'Fish', icon: 'fa-fish' },
    { id: 'others', label: 'Others', icon: 'fa-hippo' },
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
      description: "Friendly and playful golden retriever puppy looking for a loving home.",
      seller: "Happy Paws Kennel",
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
      description: "Beautiful white Persian cat with blue eyes. Very calm and affectionate.",
      seller: "Meow Haven",
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
      description: "Adorable chocolate labrador puppy. Perfect for families with kids.",
      seller: "Pet Paradise",
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
      description: "Talkative and friendly cockatiel. Can whistle tunes!",
      seller: "Bird World",
      location: "Chennai"
    },
    {
      id: 5,
      name: "Beagle Puppy",
      category: "dogs",
      breed: "Beagle",
      age: "4 months",
      gender: "Male",
      price: 22000,
      image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800",
      vaccinated: true,
      trained: false,
      description: "Energetic beagle puppy with excellent pedigree.",
      seller: "Royal Pets",
      location: "Hyderabad"
    },
    {
      id: 6,
      name: "Siamese Cat",
      category: "cats",
      breed: "Siamese",
      age: "8 months",
      gender: "Female",
      price: 12000,
      image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800",
      vaccinated: true,
      trained: true,
      description: "Elegant Siamese cat with striking blue eyes.",
      seller: "Feline Friends",
      location: "Pune"
    },
    {
      id: 7,
      name: "Goldfish Pair",
      category: "fish",
      breed: "Fantail Goldfish",
      age: "4 months",
      gender: "Pair",
      price: 500,
      image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800",
      vaccinated: false,
      trained: false,
      description: "Beautiful pair of fantail goldfish. Tank not included.",
      seller: "Aqua World",
      location: "Kolkata"
    },
    {
      id: 8,
      name: "German Shepherd",
      category: "dogs",
      breed: "German Shepherd",
      age: "5 months",
      gender: "Male",
      price: 35000,
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800",
      vaccinated: true,
      trained: true,
      description: "Purebred German Shepherd with excellent lineage. Guard dog trained.",
      seller: "Elite K9",
      location: "Ahmedabad"
    }
  ];

  const filteredPets = activeCategory === 'all' 
    ? pets 
    : pets.filter(pet => pet.category === activeCategory);

  const openWhatsApp = (pet) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${pet.name} (${pet.breed}) listed at ₹${pet.price.toLocaleString()}. Please provide more details.`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const openSellModal = () => {
    const message = encodeURIComponent(`Hi! I want to list my pet for sale on PraniPremi. Please guide me through the process.`);
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

        <div className="pet-store-actions">
          <button className="btn btn-sell" onClick={openSellModal}>
            <i className="fas fa-plus-circle"></i>
            Sell Your Pet
          </button>
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
                <button 
                  className="quick-view"
                  onClick={() => {
                    setSelectedPet(pet);
                    setShowModal(true);
                  }}
                >
                  <i className="fas fa-eye"></i>
                </button>
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
                  {pet.location} • {pet.seller}
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

        {/* Pet Detail Modal */}
        {showModal && selectedPet && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content pet-modal" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <i className="fas fa-times"></i>
              </button>
              
              <div className="pet-modal-grid">
                <div className="pet-modal-image">
                  <img src={selectedPet.image} alt={selectedPet.name} />
                </div>
                
                <div className="pet-modal-info">
                  <h2>{selectedPet.name}</h2>
                  <p className="pet-modal-price">₹{selectedPet.price.toLocaleString()}</p>
                  
                  <div className="pet-modal-details">
                    <div className="detail-item">
                      <span className="label">Breed</span>
                      <span className="value">{selectedPet.breed}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Age</span>
                      <span className="value">{selectedPet.age}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Gender</span>
                      <span className="value">{selectedPet.gender}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Location</span>
                      <span className="value">{selectedPet.location}</span>
                    </div>
                  </div>
                  
                  <p className="pet-modal-description">{selectedPet.description}</p>
                  
                  <div className="pet-modal-seller">
                    <i className="fas fa-store"></i>
                    <span>Sold by: {selectedPet.seller}</span>
                  </div>
                  
                  <button 
                    className="btn btn-primary btn-full"
                    onClick={() => openWhatsApp(selectedPet)}
                  >
                    <i className="fab fa-whatsapp"></i>
                    Contact Seller on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PetStore;