import React from 'react';

const Products = () => {
  const useCases = [
    {
      icon: 'code',
      title: 'Frontend',
      description: 'Streamline UX development by leveraging browser-in-the-loop agents to automate repetitive tasks.'
    },
    {
      icon: 'developer_mode',
      title: 'Fullstack',
      description: 'Build production-ready applications with confidence with thoroughly designed artifacts and comprehensive verification tests.'
    },
    {
      icon: 'domain',
      title: 'Professional',
      description: 'Streamline operations and reduce context switching by orchestrating agents across workspaces using the Agent Manager.'
    }
  ];

  return (
    <section id="products" className="section" style={styles.section}>
      <div className="container" style={styles.container}>
        {useCases.map((useCase, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.iconWrapper}>
              <span className="google-symbols" style={styles.icon}>{useCase.icon}</span>
            </div>
            <h3 style={styles.title}>{useCase.title}</h3>
            <p style={styles.description}>{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: 'var(--bg-color)',
    borderTop: '1px solid var(--border-color)'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px'
  },
  card: {
    padding: '32px',
    backgroundColor: '#fff',
    borderRadius: 'var(--radius-card)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
  },
  iconWrapper: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: 'var(--bg-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    color: 'var(--google-blue)'
  },
  icon: {
    fontSize: '24px'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '500',
    marginBottom: '16px',
    color: 'var(--text-primary)'
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)'
  }
};

export default Products;