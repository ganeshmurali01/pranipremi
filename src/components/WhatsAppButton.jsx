import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickMessages = [
    { label: "Book Grooming", message: "Hi! I want to book a grooming appointment for my pet." },
    { label: "Book Boarding", message: "Hi! I need to book pet boarding services." },
    { label: "Product Inquiry", message: "Hi! I have questions about your pet products." },
    { label: "General Query", message: "Hi! I have a question about PraniPremi services." }
  ];

  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
    setIsExpanded(false);
  };

  return (
    <div className={`whatsapp-widget ${isExpanded ? 'expanded' : ''}`}>
      {isExpanded && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <div className="header-info">
              <div className="avatar">
                <i className="fas fa-paw"></i>
              </div>
              <div className="text">
                <h4>PraniPremi Support</h4>
                <p>Typically replies within minutes</p>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsExpanded(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="popup-body">
            <div className="chat-bubble">
              <p>Hello! 👋 How can we help you today?</p>
              <span className="time">Just now</span>
            </div>

            <div className="quick-actions">
              <p>Quick Actions:</p>
              {quickMessages.map((item, index) => (
                <button
                  key={index}
                  className="quick-btn"
                  onClick={() => openWhatsApp(item.message)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="popup-footer">
            <button 
              className="start-chat-btn"
              onClick={() => openWhatsApp("Hi! I need assistance.")}
            >
              <i className="fab fa-whatsapp"></i>
              Start Chat
            </button>
          </div>
        </div>
      )}

      <button 
        className="whatsapp-fab"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="WhatsApp Chat"
      >
        <i className={`fab ${isExpanded ? 'fa-times' : 'fa-whatsapp'}`}></i>
        <span className="pulse"></span>
      </button>
    </div>
  );
};

export default WhatsAppButton;