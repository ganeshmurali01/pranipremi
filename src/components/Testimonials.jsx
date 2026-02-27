import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>Higher-level Abstractions</h2>
          <p style={styles.description}>
            A more intuitive task-based approach to monitoring agent activity, presenting you with essential
            artifacts and verification results to build trust.
          </p>
        </div>

        <div style={styles.exampleBox}>
          <div style={styles.promptBubble}>
            "Build a Next.js dashboard with an activity graph using Recharts and a Prisma backend."
          </div>
          <div style={styles.systemResponse}>
            <div style={styles.loadingDots}>
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            </div>
            <p style={{ margin: '12px 0 0', fontSize: '0.9rem', color: '#888' }}>Working on implementation plan...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 0',
    backgroundColor: 'var(--bg-color)'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    flexWrap: 'wrap'
  },
  content: {
    flex: '1 1 400px',
    paddingRight: '40px'
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '500',
    marginBottom: '24px',
    lineHeight: '1.2',
    color: 'var(--text-primary)'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)'
  },
  exampleBox: {
    flex: '1 1 500px',
    backgroundColor: '#fff',
    borderRadius: 'var(--radius-card)',
    padding: '40px',
    boxShadow: '0 24px 60px rgba(0,0,0,0.06)',
    border: '1px solid var(--border-color)',
    position: 'relative',
    overflow: 'hidden'
  },
  promptBubble: {
    backgroundColor: '#E8EAED',
    padding: '16px 24px',
    borderRadius: '24px 24px 24px 0',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    marginBottom: '24px',
    display: 'inline-block',
    maxWidth: '80%'
  },
  systemResponse: {
    backgroundColor: '#1A73E8',
    color: '#fff',
    padding: '16px 24px',
    borderRadius: '24px 24px 0 24px',
    display: 'inline-block',
    maxWidth: '80%',
    float: 'right',
    clear: 'both'
  },
  loadingDots: {
    display: 'flex',
    gap: '6px'
  }
};

export default Testimonials;