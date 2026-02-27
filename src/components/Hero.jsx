import React from 'react';

function Hero({ setCurrentPage }) {
  return (
    <section style={styles.heroSection}>
      <div style={styles.backgroundEffects}>
        <div style={styles.blurBlob({ top: '10%', left: '15%', background: 'rgba(66, 133, 244, 0.15)' })}></div>
        <div style={styles.blurBlob({ top: '20%', right: '15%', background: 'rgba(234, 67, 53, 0.1)' })}></div>
        <div style={styles.blurBlob({ bottom: '20%', left: '40%', background: 'rgba(251, 188, 5, 0.1)' })}></div>
      </div>

      <div style={styles.content}>
        <div style={styles.badge}>
          <span className="google-symbols" style={{ fontSize: '18px', color: 'var(--google-blue)' }}>auto_awesome</span>
          <span>Introducing Gemini 3.1 Pro in Google Antigravity</span>
          <span className="google-symbols" style={{ fontSize: '18px' }}>arrow_forward</span>
        </div>

        <h1 style={styles.title}>
          Experience liftoff with<br />the next-generation IDE
        </h1>

        <div style={styles.buttonGroup}>
          <button className="btn btn-primary" style={styles.primaryBtn} onClick={() => alert('Download initiated!')}>
            <span className="google-symbols" style={{ fontSize: '20px' }}>window</span>
            Download for Windows
          </button>

          <button className="btn btn-secondary" style={styles.secondaryBtn} onClick={() => setCurrentPage('services')}>
            Explore use cases
          </button>
        </div>

        <p style={styles.subtext}>
          Available for macOS, Windows, and Linux. <a href="#" style={{ textDecoration: 'underline' }}>View all downloads</a>
        </p>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 24px 80px',
    overflow: 'hidden',
    textAlign: 'center'
  },
  backgroundEffects: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
    pointerEvents: 'none'
  },
  blurBlob: (props) => ({
    position: 'absolute',
    width: '40vi',
    height: '40vi',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.8,
    ...props
  }),
  content: {
    maxWidth: '900px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    backgroundColor: 'var(--bg-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '50px',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    marginBottom: '32px',
    cursor: 'pointer',
    transition: 'background var(--transition-fast)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  },
  title: {
    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
    fontWeight: '500',
    lineHeight: '1.1',
    letterSpacing: '-0.03em',
    color: 'var(--text-primary)',
    marginBottom: '40px'
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '24px'
  },
  primaryBtn: {
    padding: '16px 32px',
    fontSize: '1.1rem',
    gap: '12px'
  },
  secondaryBtn: {
    padding: '16px 32px',
    fontSize: '1.1rem',
    backgroundColor: '#fff',
    border: '1px solid var(--border-color)'
  },
  subtext: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)'
  }
};

export default Hero;