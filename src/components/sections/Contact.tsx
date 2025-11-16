'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/portfolio';
import emailjs from '@emailjs/browser';

interface ContactProps {
  theme: 'light' | 'dark';
}

export default function Contact({ theme }: ContactProps) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // EmailJS configuration - REPLACE WITH YOUR IDS
    const serviceId = 'Portfolio_Contact';
    const templateId = 'template_08rr27f';
    const publicKey = 'affrv4jP3xzYwtN34';

    const templateParams = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      to_email: personalInfo.email, // Your email
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setToastMessage('Message sent successfully! 🎉 I\'ll get back to you shortly.');
      setShowToast(true);
      
      // Reset form safely
      if (form) {
        form.reset();
      }
      
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } catch (error: any) {
      console.error('Failed to send email:', error);
      console.error('Error details:', error.text || error.message);
      
      setToastMessage(`Failed to send message: ${error.text || error.message || 'Please try again or email me directly.'}`);
      setShowToast(true);
      
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setToastMessage('Email copied to clipboard! 📋');
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
          width: '100%',
        }} className="grid-cols-1 lg:grid-cols-[1fr_1.5fr] contact-grid">
          
          {/* Left Side - Contact Info */}
          <div style={{ order: 1, textAlign: 'left' }} className="contact-info">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: '700', textAlign: 'left' }}>
              Let's Connect 🤝
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem', textAlign: 'left' }}>
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
                  flexShrink: 0,
                }}>
                  ✉️
                </div>
                <div>
                  <div style={{ 
                    fontSize: '1rem', 
                    color: theme === 'dark' ? '#ffffff' : '#000000', 
                    marginBottom: '0.2rem', 
                    fontWeight: '600' 
                  }} className="contact-label">
                    Email
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }} className="contact-value">
                    {personalInfo.email}
                    <button 
                      onClick={handleCopyEmail}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                      }}
                      aria-label="Copy email"
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
                  flexShrink: 0,
                }}>
                  📍
                </div>
                <div>
                  <div style={{ 
                    fontSize: '1rem', 
                    color: theme === 'dark' ? '#ffffff' : '#000000', 
                    marginBottom: '0.2rem', 
                    fontWeight: '600' 
                  }} className="contact-label">
                    Location
                  </div>
                  <div style={{ fontWeight: '600', color: 'var(--text-secondary)', fontSize: '0.9rem' }} className="contact-value">
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
            order: 2,
            width: '100%',
          }} className="contact-form">
            <form onSubmit={handleContactSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="form-name-email">
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      opacity: isSubmitting ? 0.6 : 1,
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
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      opacity: isSubmitting ? 0.6 : 1,
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
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    opacity: isSubmitting ? 0.6 : 1,
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
                  disabled={isSubmitting}
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
                    opacity: isSubmitting ? 0.6 : 1,
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: isSubmitting ? 'var(--border)' : 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} {isSubmitting ? '⏳' : '✉️'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--text-primary)',
          padding: '1rem 1.5rem',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 10000,
          animation: 'fadeInUp 0.3s ease-out',
          maxWidth: '400px',
        }} className="toast-notification">
          {toastMessage}
        </div>
      )}
    </section>
  );
}