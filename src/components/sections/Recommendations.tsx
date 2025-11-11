'use client';

import { recommendations } from '@/data/portfolio';
import { Recommendation } from '@/types';

import { useState } from 'react';

const TestimonialCarousel = ({ recommendations }: { recommendations: Recommendation[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prev: number) => (prev + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const currentRecommendation = recommendations[currentIndex];

  // Card minimum height for desktop, allow auto height for mobile
  const cardMinHeight = '450px';

  return (
    <div style={{ position: 'relative' }}>
      {/* Main Card - Auto height with a min height, responsive width */}
      <div style={{
        backgroundColor: 'var(--card-bg-secondary)',
        padding: '3rem',
        borderRadius: '20px',
        border: '1px solid var(--border)',
        width: '100%',
        maxWidth: '1000px',
        height: 'auto',
        minHeight: cardMinHeight,
        margin: '0 auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        paddingBottom: '6rem', // reserve space for author strip at bottom
      }}>
        {/* Quote Icon */}
        <div style={{ 
          fontSize: '5rem', 
          color: '#3b82f6',  // Blue
          opacity: 0.2,
          position: 'absolute',
          top: '1rem',
          left: '2rem',
          lineHeight: 1,
          fontFamily: 'Georgia, serif',
        }}>
          "
        </div>

        {/* Testimonial Text - No scroll, full content visible */}
        <div style={{
          flex: 1,
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.8',
            fontSize: '1.05rem',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}>
            {currentRecommendation.text}
          </p>
        </div>

        {/* Author Info - Always at bottom, fixed position */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '1rem',
          position: 'absolute',
          bottom: '3rem',
          left: '1rem',
          right: '1rem',
          padding: '0 2rem',
          flexWrap: 'wrap',
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            minWidth: '60px',
            borderRadius: '50%',
            backgroundColor: '#3b82f6',  // Blue
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            fontSize: '1.3rem',
            flexShrink: 0,
          }}>
            {currentRecommendation.avatar}
          </div>
          <div style={{ textAlign: 'left', minWidth: 0, flex: 1 }}>
            <h4 style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.2rem', wordBreak: 'break-word' }}>
              {currentRecommendation.name}
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', wordBreak: 'break-word' }}>
              {currentRecommendation.role}, {currentRecommendation.company}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
        <button
          onClick={prevSlide}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3b82f6';  // Blue
            e.currentTarget.style.borderColor = '#3b82f6';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--card-bg)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3b82f6';  // Blue
            e.currentTarget.style.borderColor = '#3b82f6';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--card-bg)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
        >
          →
        </button>
      </div>

      {/* Dots Indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
        {recommendations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: currentIndex === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: currentIndex === index ? '#3b82f6' : 'var(--border)',  // Blue
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Recommendations() {
  return (
    <section id="recommendations" style={{ 
      minHeight: 'auto',
      padding: '3rem 2rem',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div style={{ maxWidth: '1100px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--accent)' }}>
            Recommendations
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
            Hear what my teammates and mentors have to say about collaborating with me - their words mean the world! 🌟
          </p>
        </div>

        <TestimonialCarousel recommendations = {recommendations} />
      </div>
    </section>
  );
}
