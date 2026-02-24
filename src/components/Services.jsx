import React, { useMemo } from 'react';

const SERVICES = [
  {
    id: 'grooming',
    title: 'Premium Pet Grooming',
    blurb: 'Bath, brush, nail trim, and a fresh look—handled by gentle, trained groomers.',
    icon: 'fas fa-scissors',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200',
  },
  {
    id: 'boarding',
    title: 'Luxury Pet Boarding',
    blurb: 'Clean, safe, and cozy stays with playtime and regular updates to pet parents.',
    icon: 'fas fa-hotel',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200',
  },
  {
    id: 'training',
    title: 'Obedience & Behavior Training',
    blurb: 'Positive reinforcement-based sessions for well-mannered, confident pets.',
    icon: 'fas fa-dog',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200',
  },
];

export default function Services({ fullPage = false }) {
  // Defensive de-duplication (not strictly needed here, but future-proof)
  const items = useMemo(() => {
    const seen = new Set();
    return SERVICES.filter(s => {
      if (seen.has(s.id)) return false;
      seen.add(s.id);
      return true;
    });
  }, []);

  const openWhatsApp = (service) => {
    const msg = encodeURIComponent(
      `Hi! I'm interested in ${service} at PraniPremi. Please help me book an appointment.`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <section className={`services ${fullPage ? 'full' : ''}`}>
      <header className="section-header">
        <h2 className="section-title">Our Services</h2>
        {!fullPage && (
          <p className="section-subtitle">
            From spa days to safe stays—your pet is in good hands.
          </p>
        )}
      </header>

      <div className="services-grid">
        {items.map((s) => (
          <article className="service-card" key={s.id}>
            {s.image && (
              <div
                className="service-media"
                style={{ backgroundImage: `url(${s.image})` }}
                aria-hidden="true"
              />
            )}

            <div className="service-body">
              <div className="service-icon">
                <i className={s.icon} aria-hidden="true" />
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-blurb">{s.blurb}</p>

              <div className="service-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => openWhatsApp(s.title)}
                >
                  <i className="fab fa-whatsapp" aria-hidden="true" /> Book {s.title}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {fullPage && (
        <footer className="section-footer">
          <p>
            Have questions? Chat with us on WhatsApp—we’ll help you pick the right service.
          </p>
        </footer>
      )}
    </section>
  );
}