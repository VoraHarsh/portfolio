'use client';

import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" style={{ minHeight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem', backgroundColor: 'var(--bg-primary)'}}>
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem', fontWeight: '700', color: 'var(--accent)' }}>Professional Experience</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>My professional journey</p>
        </div>
        <div style={{ position: 'relative', paddingLeft: '3rem' }} className="experience-timeline">
        <div style={{ position: 'absolute', left: '47px', top: '0', height: '100%', width: '3px', backgroundColor: '#3b82f6', opacity: 0.5, }} className="timeline-line" />
          {experiences.map((exp) => (
            <div key={exp.id} style={{ position: 'relative', marginBottom: '3rem' }}>
              <div style={{ position: 'absolute', left: '-10px', top: '2rem', width: '20px', height: '20px', backgroundColor: '#3b82f6', borderRadius: '50%', border: '4px solid var(--bg-primary)', boxShadow: '0 0 0 4px var(--bg-secondary)', zIndex: 2, }} />
              <div 
                style={{
                  marginLeft: '2rem',
                  backgroundColor: 'var(--card-bg)',
                  padding: '2.5rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow)',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  maxWidth: '100%',
                }}
                className="experience-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow)';
                }}
              >
                <div style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>{exp.duration}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.3rem', fontWeight: '700' }}>{exp.title}</h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: '500' }}>{exp.company}</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
