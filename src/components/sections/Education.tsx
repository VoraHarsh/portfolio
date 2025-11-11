'use client';

import { education } from '@/data/portfolio';

export default function Education() {
  return (
        <section id="education" style={{ 
            minHeight: 'auto',
            padding: '3rem 2rem',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: 'var(--bg-secondary)' 
            }}>
            <div style={{ maxWidth: '1000px', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--accent)' }}>
                    Education & Certifications
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                    My academic journey and professional qualifications that validate my expertise. 🎓
                </p>
                </div>

                {/* Education Section */}
                <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
                    🎓 Education
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {education.filter(item => item.type === 'education').map((item) => (
                    <div
                        key={item.id}
                        style={{
                        backgroundColor: 'var(--card-bg)',
                        padding: '2.5rem',
                        borderRadius: '16px',
                        border: '1px solid var(--border)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        width: '100%',
                        }}
                        className="education-card"
                    >
                        <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                            {item.degree}
                        </h4>
                        <div style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '0.5rem' }}>
                            {item.institution}
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '1rem' }}>
                            {item.description}
                        </p>
                        </div>
                        <div style={{ 
                        color: 'var(--accent)', 
                        fontWeight: '600', 
                        fontSize: '0.95rem',
                        minWidth: '120px',
                        textAlign: 'right',
                        }}>
                        {item.duration}
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Certifications Section */}
                {education.filter(item => item.type === 'certification').length > 0 && (
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
                    🏆 Certifications
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', width: '100%' }} className="certifications-grid">
                    {education.filter(item => item.type === 'certification').map((item) => (
                        <div
                        key={item.id}
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            border: '1px solid var(--border)',
                            transition: 'all 0.3s ease',
                            width: '100%',
                        }}
                        className="certification-card"
                        >
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                            {item.degree}
                        </h4>
                        <div style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            {item.institution}
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            {item.duration}
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                )}
            </div>
        </section>

  ); 
}