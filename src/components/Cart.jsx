import React from 'react';

const Cart = () => {
  return (
    <section id="cart" className="section" style={styles.section}>
      <div className="container" style={styles.container}>

        {/* Pricing Layout */}
        <div style={styles.flexRow}>
          <div style={styles.pricingCard}>
            <h3 style={styles.pricingTitle}>For developers</h3>
            <p style={styles.pricingDesc}>Available at no charge.<br />Achieve new heights.</p>
            <button className="btn btn-primary" style={styles.pricingBtn}>Download</button>
          </div>

          <div style={{ ...styles.pricingCard, backgroundColor: '#E8EAED' }}>
            <h3 style={styles.pricingTitle}>For organizations</h3>
            <p style={styles.pricingDesc}>Level up your entire team.<br />Coming soon.</p>
            <button className="btn btn-secondary" style={styles.pricingBtnLight} disabled>Join waitlist</button>
          </div>
        </div>

        {/* News Layout */}
        <div style={styles.newsSection}>
          <h2 style={styles.newsHeader}>Latest News</h2>
          <div style={styles.flexRow}>
            <a href="#" style={styles.newsCard}>
              <div style={styles.newsDate}>Feb 2026</div>
              <h3 style={styles.newsTitle}>Introducing Gemini 3.1 Pro in Google Antigravity</h3>
              <p style={styles.newsLink}>Read more <span className="google-symbols" style={{ fontSize: '16px' }}>arrow_forward</span></p>
            </a>
            <a href="#" style={styles.newsCard}>
              <div style={styles.newsDate}>Jan 2026</div>
              <h3 style={styles.newsTitle}>Introducing Google Antigravity</h3>
              <p style={styles.newsLink}>Read more <span className="google-symbols" style={{ fontSize: '16px' }}>arrow_forward</span></p>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 0',
    backgroundColor: '#fff'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '80px'
  },
  flexRow: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap'
  },
  pricingCard: {
    flex: '1 1 300px',
    backgroundColor: '#F8F9FA',
    borderRadius: 'var(--radius-card)',
    padding: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  pricingTitle: {
    fontSize: '2rem',
    fontWeight: '500',
    marginBottom: '16px',
    color: 'var(--text-primary)'
  },
  pricingDesc: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    marginBottom: '40px',
    lineHeight: '1.5'
  },
  pricingBtn: {
    marginTop: 'auto',
    padding: '12px 32px'
  },
  pricingBtnLight: {
    marginTop: 'auto',
    padding: '12px 32px',
    backgroundColor: '#fff',
    color: '#888',
    cursor: 'not-allowed',
    border: '1px solid #CCC'
  },
  newsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  },
  newsHeader: {
    fontSize: '2.5rem',
    fontWeight: '500',
    color: 'var(--text-primary)'
  },
  newsCard: {
    flex: '1 1 300px',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-card)',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    transition: 'background var(--transition-fast)'
  },
  newsDate: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  newsTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    lineHeight: '1.4'
  },
  newsLink: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'var(--google-blue)',
    fontWeight: '500'
  }
};

export default Cart;