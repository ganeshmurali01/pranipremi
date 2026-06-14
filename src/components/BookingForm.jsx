import React, { useState } from 'react';

const BookingForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentPhone: '',
    petType: 'Dog',
    petName: '',
    petBreed: '',
    petAge: '',
    service: 'Grooming',
    groomingType: 'Full Service',
    bookingDate: '',
    bookingTime: '',
    specialNotes: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const selectPetType = (type) => {
    setFormData(prev => ({
      ...prev,
      petType: type
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const {
      parentName,
      parentPhone,
      petType,
      petName,
      petBreed,
      petAge,
      service,
      groomingType,
      bookingDate,
      bookingTime,
      specialNotes
    } = formData;

    let message = `*PraniPremi Booking Request*\n\n`;
    message += `👤 *Pet Parent Details:*\n`;
    message += `- Name: ${parentName}\n`;
    message += `- Phone: ${parentPhone}\n\n`;
    message += `🐾 *Pet Details:*\n`;
    message += `- Type: ${petType}\n`;
    message += `- Name: ${petName}\n`;
    message += `- Breed: ${petBreed || 'N/A'}\n`;
    message += `- Age: ${petAge || 'N/A'}\n\n`;
    message += `📅 *Booking Details:*\n`;
    message += `- Service: ${service}\n`;
    
    if (service === 'Grooming') {
      message += `- Grooming Style: ${groomingType}\n`;
    }
    
    message += `- Date: ${bookingDate}\n`;
    message += `- Time: ${bookingTime}\n`;
    
    if (specialNotes.trim()) {
      message += `\n📝 *Notes/Requests:*\n${specialNotes}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    // Open WhatsApp Click-to-Chat with the customer care number
    const targetNumber = '919741226158'; // Standardized support number from Cart
    window.open(`https://wa.me/${targetNumber}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close booking form">
          <span className="google-symbols" style={{ fontSize: '24px' }}>close</span>
        </button>

        <div style={styles.header}>
          <div style={styles.iconWrapper}>
            <span className="google-symbols" style={{ color: 'var(--google-blue)', fontSize: '32px' }}>pets</span>
          </div>
          <h2 style={styles.title}>Book a Service</h2>
          <p style={styles.subtitle}>Fill in details to request an appointment via WhatsApp</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.sectionTitle}>Parent Info</div>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Your Name *</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.sectionTitle}>Pet Info</div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Pet Type *</label>
            <div style={styles.petTypeRow}>
              {['Dog', 'Cat', 'Bird', 'Other'].map(type => (
                <button
                  type="button"
                  key={type}
                  onClick={() => selectPetType(type)}
                  style={formData.petType === type ? styles.petTypeBtnActive : styles.petTypeBtn}
                >
                  {type === 'Dog' && <span className="google-symbols" style={{ fontSize: '20px' }}>pets</span>}
                  {type === 'Cat' && <span className="google-symbols" style={{ fontSize: '20px' }}>chat_bubble</span>}
                  {type === 'Bird' && <span className="google-symbols" style={{ fontSize: '20px' }}>flutter_dash</span>}
                  {type === 'Other' && <span className="google-symbols" style={{ fontSize: '20px' }}>category</span>}
                  <span>{type}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Pet Name *</label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                placeholder="Buddy"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Breed</label>
              <input
                type="text"
                name="petBreed"
                value={formData.petBreed}
                onChange={handleChange}
                placeholder="e.g. Golden Retriever"
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Age</label>
              <input
                type="text"
                name="petAge"
                value={formData.petAge}
                onChange={handleChange}
                placeholder="e.g. 2 years"
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.sectionTitle}>Booking Details</div>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Select Service *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                style={styles.select}
              >
                <option value="Grooming">Grooming Service</option>
                <option value="Boarding">Boarding Service</option>
                <option value="Training">Training Service</option>
                <option value="Vet Consultation">Vet Consultation</option>
              </select>
            </div>

            {formData.service === 'Grooming' && (
              <div style={styles.inputGroup}>
                <label style={styles.label}>Type of Grooming *</label>
                <select
                  name="groomingType"
                  value={formData.groomingType}
                  onChange={handleChange}
                  required
                  style={styles.select}
                >
                  <option value="Full Service">Full Service (Bath, Haircut, Nails)</option>
                  <option value="Bath & Brush">Bath & Brush</option>
                  <option value="Hair Cut only">Hair Cut only</option>
                  <option value="Nail Trimming only">Nail Trimming only</option>
                  <option value="Not Sure">Not Sure / Consultation needed</option>
                </select>
              </div>
            )}
          </div>

          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Preferred Date *</label>
              <input
                type="date"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Preferred Time *</label>
              <input
                type="time"
                name="bookingTime"
                value={formData.bookingTime}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Special Notes / Medical History</label>
            <textarea
              name="specialNotes"
              value={formData.specialNotes}
              onChange={handleChange}
              placeholder="Any medical issues, aggression notes, or special requests..."
              rows="3"
              style={styles.textarea}
            />
          </div>

          <button type="submit" style={styles.submitBtn}>
            <span className="google-symbols">chat</span>
            Send Details via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(32, 33, 36, 0.6)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
    animation: 'fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    width: '90%',
    maxWidth: '680px',
    maxHeight: '90vh',
    overflowY: 'auto',
    padding: '36px',
    position: 'relative',
    boxShadow: '0 24px 48px rgba(0, 0, 0, 0.16)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  },
  closeBtn: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    color: 'var(--text-secondary)',
    padding: '8px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F3F4',
    transition: 'background-color 0.2s',
    cursor: 'pointer',
    border: 'none',
  },
  header: {
    textAlign: 'center',
    marginBottom: '28px'
  },
  iconWrapper: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    backgroundColor: 'rgba(66, 133, 244, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px'
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    marginBottom: '8px'
  },
  subtitle: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  sectionTitle: {
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--google-blue)',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '6px',
    marginTop: '10px'
  },
  row: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  },
  inputGroup: {
    flex: 1,
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'var(--text-primary)'
  },
  input: {
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
    width: '100%'
  },
  select: {
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    fontSize: '0.95rem',
    outline: 'none',
    backgroundColor: '#FFFFFF',
    fontFamily: 'inherit',
    width: '100%'
  },
  textarea: {
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    fontSize: '0.95rem',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
    width: '100%'
  },
  petTypeRow: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  petTypeBtn: {
    flex: 1,
    minWidth: '90px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '10px 16px',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    backgroundColor: '#FFFFFF',
    color: 'var(--text-secondary)',
    fontWeight: '500',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  petTypeBtnActive: {
    flex: 1,
    minWidth: '90px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '10px 16px',
    borderRadius: '12px',
    border: '2px solid var(--google-blue)',
    backgroundColor: 'rgba(66, 133, 244, 0.05)',
    color: 'var(--google-blue)',
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  submitBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#25D366', // WhatsApp Brand Green
    color: '#FFFFFF',
    padding: '16px 32px',
    borderRadius: '50px',
    fontSize: '1.05rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '12px',
    border: 'none',
    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
  }
};

export default BookingForm;
