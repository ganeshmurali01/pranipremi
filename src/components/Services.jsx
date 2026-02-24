import React, { useMemo } from 'react';

/**
 * Toggle how the cards look:
 * - "image": big background image cards (hero-like)
 * - "icon": small image/icon left, text-focused
 */
const CARD_STYLE = 'image'; // change to 'icon' to try the other style

const SERVICES = [
  {
    id: 'grooming',
    title: 'Premium Pet Grooming',
    blurb: 'Bath, brush, nail trim, and a fresh look—handled by gentle, trained groomers.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200',
    icon: 'fas fa-scissors',
    featured: true, // Feature card 1
  },
  {
    id: 'boarding',
    title: 'Luxury Pet Boarding',
    blurb: 'Clean, safe, and cozy stays with playtime and regular updates to pet parents.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200',
    icon: 'fas fa-hotel',
    featured: true, // Feature card 2
  },
  {
    id: 'training',
    title: 'Obedience & Behavior Training',
    blurb: 'Positive reinforcement-based sessions for well-mannered, confident pets.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200',
    icon: 'fas fa-dog',
    featured: false,
  },
];

export default function Services({ fullPage = false }) {
  // Stable, de-duped list (future proof if you fetch later)
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
    <section className={`services-section ${fullPage ? 'full' : ''}`}>
      <header className="services-header">
        <span className="badge">Services</span>
        <h2 className="title">Pamper • Board • Train</h2>
        {!fullPage && (
          <p className="subtitle">
            Playful care with a premium touch—tailored for your furry family.
          </p>
        )}
      </header>

      <div className={`services-grid ${CARD_STYLE === 'icon' ? 'icon-grid' : ''}`}>
        {items.map((s) => (
          <article
            key={s.id}
            className={`service-card ${s.featured ? 'featured' : ''} ${CARD_STYLE}`}
          >
            {/* IMAGE STYLE */}
            {CARD_STYLE === 'image' && (
              <>
                <div
                  className="service-media"
                  style={{ backgroundImage: `url(${s.image})` }}
                  aria-hidden="true"
                />
                <div className="service-layer" />
                <div className="service-body">
                  <div className="chip">
                    <i className={s.icon} aria-hidden="true" />
                    <span>{s.title.split(' ')[0]}</span>
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-blurb">{s.blurb}</p>
                  <button
                    className="btn-whatsapp"
                    onClick={() => openWhatsApp(s.title)}
                    aria-label={`Book ${s.title} on WhatsApp`}
                  >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Book on WhatsApp
                  </button>
                </div>
              </>
            )}

            {/* ICON STYLE */}
            {CARD_STYLE === 'icon' && (
              <div className="service-body compact">
                <div className="compact-header">
                  <div className="mini-thumb" style={{ backgroundImage: `url(${s.image})` }} />
                  <div className="compact-titles">
                    <h3 className="service-title">{s.title}</h3>
                    <div className="mini-chip">
                      <i className={s.icon} aria-hidden="true" />
                      <span>Popular</span>
                    </div>
                  </div>
                </div>
                <p className="service-blurb">{s.blurb}</p>
                <button
                  className="btn-whatsapp line"
                  onClick={() => openWhatsApp(s.title)}
                  aria-label={`Book ${s.title} on WhatsApp`}
                >
                  <i className="fab fa-whatsapp" aria-hidden="true" />
                  Book on WhatsApp
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}