'use client';

import { personalInfo } from '@/data/portfolio';

export default function About() {
  return (
      <section id="about" style={{ 
        minHeight: 'auto',
        padding: '4rem 2rem',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'var(--bg-secondary)' 
      }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--accent)' }}>
              About Me
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              Learn more about my journey, my passion, and what drives me to create outstanding digital infrastructure. 💪
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '480px 1fr',  // Bigger image column
            gap: '3rem', 
            alignItems: 'start'  // Changed from 'center' to 'start'
          }} className="grid-cols-1 lg:grid-cols-[480px_1fr]">
            
            {/* Left - Image/GIF */}
            <div style={{ position: 'sticky', top: '100px' }}>  {/* Sticky positioning */}
              <div style={{
                width: '100%',
                height: '480px',  // Taller to match text
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(59, 130, 246, 0.2)',
                border: '1px solid var(--border)',
              }}>
                <img 
                  src="/about.gif" 
                  alt="About Harsh" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              {personalInfo.aboutText.map((text, i) => (
                <p key={i} style={{ 
                  fontSize: '1.05rem', 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.8', 
                  marginBottom: '1.5rem' 
                }}>
                  {text}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
