import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">

        {/* Pre-footer CTA */}
        <div style={styles.preFooter}>
          <h2 style={styles.preFooterTitle}>Experience liftoff</h2>
          <button className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.25rem' }}>
            Download
          </button>
        </div>

        {/* Main Footer Links */}
        <div style={styles.footerGrid}>
          <div style={styles.linkGroup}>
            <a href="#" style={styles.link}>Product</a>
            <a href="#" style={styles.link}>Use Cases</a>
            <a href="#" style={styles.link}>Pricing</a>
            <a href="#" style={styles.link}>Blog</a>
          </div>
          <div style={styles.linkGroup}>
            <a href="#" style={styles.link}>Documentation</a>
            <a href="#" style={styles.link}>Changelog</a>
            <a href="#" style={styles.link}>Releases</a>
            <a href="#" style={styles.link}>Support</a>
            <a href="#" style={styles.link}>Press</a>
          </div>
        </div>

        {/* Massive Wordmark */}
        <div style={styles.wordmarkContainer}>
          <svg viewBox="0 0 1000 200" style={styles.wordmark}>
            <text x="50%" y="80%" textAnchor="middle" style={{ fontSize: '180px', fontWeight: 'bold', fontFamily: 'var(--font-family)', fill: 'var(--text-primary)', letterSpacing: '-0.05em' }}>
              antigravity
            </text>
          </svg>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
            <span className="google-symbols" style={{ fontSize: '24px' }}>explore</span>
            <span style={{ fontWeight: '500' }}>Google</span>
          </div>
          <div style={styles.legalLinks}>
            <a href="#" style={styles.legalLink}>About Google</a>
            <a href="#" style={styles.legalLink}>Google Products</a>
            <a href="#" style={styles.legalLink}>Privacy</a>
            <a href="#" style={styles.legalLink}>Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#fff',
    paddingTop: '80px',
    borderTop: '1px solid var(--border-color)'
  },
  preFooter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    marginBottom: '100px'
  },
  preFooterTitle: {
    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
    fontWeight: '500',
    color: 'var(--text-primary)',
    textAlign: 'center'
  },
  footerGrid: {
    display: 'flex',
    gap: '120px',
    marginBottom: '80px',
    flexWrap: 'wrap'
  },
  linkGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  link: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    fontWeight: '500',
    transition: 'color var(--transition-fast)'
  },
  wordmarkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '40px 0'
  },
  wordmark: {
    width: '100%',
    height: 'auto',
    maxHeight: '200px'
  },
  bottomBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '32px 0',
    borderTop: '1px solid var(--border-color)',
    flexWrap: 'wrap',
    gap: '24px'
  },
  legalLinks: {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap'
  },
  legalLink: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)'
  }
};

export default Footer;