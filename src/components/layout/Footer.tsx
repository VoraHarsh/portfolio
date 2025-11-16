'use client';

import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
      <footer style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '3rem 2rem',
        borderTop: '1px solid var(--border)',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr', 
          gap: '3rem',
          marginBottom: '2rem',
          width: '100%',
        }} className="grid-cols-1 md:grid-cols-[2fr_1fr] footer-content">
          {/* Left Side - Info */}
          <div style={{ order: 1, textAlign: 'left' }} className="footer-info">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent)' }}>
              {personalInfo.name}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem', maxWidth: '500px' }}>
              Creating digital infrastructure that inspires.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem', maxWidth: '500px' }}>
              Passionate about clean code, user-focused design, and impact-driven tech.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>
              Built by {personalInfo.name} | Software Engineer & Problem Solver
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'start', order: 2 }} className="footer-social">
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {socialLinks.map(
                (link) => (
                            <a 
                              key={link.name}
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '12px',
                                backgroundColor: 'var(--card-bg)',
                                border: '1px solid var(--border)',
                                color: 'var(--accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                fontSize: '1.3rem',
                              }}
                            >
                              {link.icon}
                            </a>
                          ))
              }
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div style={{ 
          textAlign: 'center', 
          paddingTop: '2rem', 
          borderTop: '1px solid var(--border)',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
        }}>
          <p style={{ marginBottom: '0.5rem' }}>This page was handmade with love by a human.</p>
          <p style={{ marginBottom: '0.5rem' }}>AI must help, not replace</p>
          <p style={{ marginTop: '1rem' }}>© 2025 {personalInfo.name} ✨ All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
