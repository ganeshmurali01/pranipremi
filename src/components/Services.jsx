import React from 'react';

const Services = () => {
  return (
    <section id="services" className="section" style={styles.section}>
      <div className="container text-center">
        <h2 style={styles.title}>
          Built for developers<br />for the agent-first era
        </h2>
        <p style={styles.subtitle}>
          Google Antigravity is built for user trust, whether you're a professional developer working in a large
          enterprise codebase, a hobbyist vibe-coding in their spare time, or anyone in between.
        </p>

        <div style={styles.idePreview}>
          <div style={styles.ideHeader}>
            <div style={styles.windowControls}>
              <span style={{ ...styles.dot, backgroundColor: '#FF5F56' }}></span>
              <span style={{ ...styles.dot, backgroundColor: '#FFBD2E' }}></span>
              <span style={{ ...styles.dot, backgroundColor: '#27C93F' }}></span>
            </div>
            <div style={styles.ideTabs}>
              <span style={styles.tabActive}>Implementation Plan</span>
              <span style={styles.tabInactive}>Agent Manager</span>
            </div>
          </div>
          <div style={styles.ideBody}>
            <div style={styles.sidebar}>
              <div style={styles.sidebarItem}><span className="google-symbols">folder</span> src</div>
              <div style={{ ...styles.sidebarItem, opacity: 0.6, paddingLeft: '24px' }}><span className="google-symbols">insert_drive_file</span> App.jsx</div>
              <div style={{ ...styles.sidebarItem, opacity: 0.6, paddingLeft: '24px' }}><span className="google-symbols">insert_drive_file</span> main.jsx</div>
            </div>
            <div style={styles.editor}>
              <pre style={styles.code}>
                <code>
                  <span style={{ color: '#C678DD' }}>import</span> React <span style={{ color: '#C678DD' }}>from</span> <span style={{ color: '#98C379' }}>'react'</span>;{'\n'}
                  <span style={{ color: '#C678DD' }}>import</span> {'{'} createRoot {'}'} <span style={{ color: '#C678DD' }}>from</span> <span style={{ color: '#98C379' }}>'react-dom/client'</span>;{'\n'}
                  {'\n'}
                  <span style={{ color: '#C678DD' }}>const</span> App = () <span style={{ color: '#C678DD' }}>=></span> {'{\n'}
                  <span style={{ color: '#C678DD' }}>return</span> ({'\n'}
                  <span style={{ color: '#E06C75' }}>&#60;div</span><span style={{ color: '#E06C75' }}>&#62;</span>{'\n'}
                  <span style={{ color: '#E06C75' }}>&#60;h1</span><span style={{ color: '#E06C75' }}>&#62;</span>Hello Antigravity<span style={{ color: '#E06C75' }}>&#60;/h1&#62;</span>{'\n'}
                  <span style={{ color: '#E06C75' }}>&#60;/div&#62;</span>{'\n'}
                  );{'\n'}
                  {'}'};{'\n'}
                </code>
              </pre>
            </div>
          </div>
          <div style={styles.ideGlow}></div>
        </div>

        <div style={styles.toolsRow}>
          {['terminal', 'auto_awesome', 'code_blocks', 'bug_report', 'widgets'].map((icon, i) => (
            <div key={i} style={styles.toolIcon}>
              <span className="google-symbols">{icon}</span>
            </div>
          ))}
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
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '500',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
    marginBottom: '24px'
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    maxWidth: '800px',
    margin: '0 auto 60px',
    lineHeight: '1.6'
  },
  idePreview: {
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#1E1E1E',
    borderRadius: '12px',
    boxShadow: '0 24px 80px rgba(0,0,0,0.12)',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  ideGlow: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.1), transparent 50%)',
    pointerEvents: 'none',
    zIndex: 0
  },
  ideHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: '#2D2D2D',
    borderBottom: '1px solid #111',
    position: 'relative',
    zIndex: 1
  },
  windowControls: {
    display: 'flex',
    gap: '8px',
    marginRight: '24px'
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%'
  },
  ideTabs: {
    display: 'flex',
    gap: '2px'
  },
  tabActive: {
    color: '#fff',
    backgroundColor: '#1E1E1E',
    padding: '6px 16px',
    borderRadius: '6px 6px 0 0',
    fontSize: '0.85rem'
  },
  tabInactive: {
    color: '#888',
    padding: '6px 16px',
    fontSize: '0.85rem'
  },
  ideBody: {
    display: 'flex',
    height: '400px',
    position: 'relative',
    zIndex: 1
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#252526',
    borderRight: '1px solid #111',
    padding: '16px 0',
    color: '#CCCCCC',
    fontSize: '0.9rem',
    textAlign: 'left'
  },
  sidebarItem: {
    padding: '4px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer'
  },
  editor: {
    flex: 1,
    padding: '24px',
    textAlign: 'left',
    overflow: 'auto'
  },
  code: {
    color: '#ABB2BF',
    fontFamily: 'monospace',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  },
  toolsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    marginTop: '60px'
  },
  toolIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    border: '1px solid var(--border-color)',
    transition: 'transform var(--transition-fast)',
    cursor: 'pointer'
  }
};

export default Services;