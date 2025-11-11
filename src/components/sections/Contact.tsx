'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/portfolio';

interface ContactProps {
  theme: 'light' | 'dark';
}

export default function Contact({ theme }: ContactProps) {
  const [showToast, setShowToast] = useState(false);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
    e.currentTarget.reset();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" style={{ 
      minHeight: 'auto',
      padding: '3rem 2rem',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--bg-secondary)'
    }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--accent)' }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
            Have a project in mind or want to chat? Feel free to reach out! 📬
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.5fr', 
          gap: '4rem',
          alignItems: 'start',
        }} className="grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
          
          {/* Left Side - Contact Info */}
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: '700' }}>
              Let's Connect 🤝
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. 
              Messages sent through this form will be delivered directly to my inbox. Feel free to contact me using 
              the form or reach out directly via email.
            </p>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--accent)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  ✉️
                </div>
                <div>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: theme === 'dark' ? '#ffffff' : '#000000', 
                    marginBottom: '0.2rem', 
                    fontWeight: '600' 
                  }}>
                    Email
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {personalInfo.email}
                    <button 
                      onClick={handleCopyEmail}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                      }}
                    >
                      📋
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  📍
                </div>
                <div>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: theme === 'dark' ? '#ffffff' : '#000000', 
                    marginBottom: '0.2rem', 
                    fontWeight: '600' 
                  }}>
                    Location
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>
                    Chicago, USA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div style={{
            backgroundColor: 'var(--card-bg)',
            padding: '2.5rem',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <form onSubmit={handleContactSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Your message"
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    minHeight: '150px',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--text-primary)',
          padding: '1rem 1.5rem',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 1000,
          animation: 'fadeInUp 0.3s ease-out',
        }}>
          Copied to clipboard
        </div>
      )}
    </section>
  );
}
