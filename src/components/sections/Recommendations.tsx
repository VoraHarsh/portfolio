'use client';

import { recommendations } from '@/data/portfolio';
import { Recommendation } from '@/types';

import { useState, useEffect, useRef } from 'react';

const TestimonialCarousel = ({ recommendations }: { recommendations: Recommendation[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  // Calculate maximum height across all cards
  useEffect(() => {
    const calculateMaxHeight = () => {
      // Get all card heights
      const heights = cardRefs.current
        .filter(card => card !== null)
        .map(card => card!.scrollHeight);
      
      if (heights.length > 0) {
        const max = Math.max(...heights);
        setMaxHeight(max);
        console.log('Card heights:', heights, 'Max:', max);
      }
    };

    // Calculate after render
    const timer = setTimeout(calculateMaxHeight, 100);
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateMaxHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, [recommendations]);

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
    }}>
      {/* CAROUSEL CONTAINER */}
      <div style={{ 
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        minHeight: maxHeight > 0 ? `${maxHeight}px` : '500px',
      }}>
        {/* SLIDES WRAPPER - This holds all cards in a row */}
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * 100}%)`,
            height: '100%',
          }}
        >
          {recommendations.map((recommendation, index) => (
            <div
              key={recommendation.id}
              style={{
                // Each slide takes exactly 100% of container width
                minWidth: '100%',
                width: '100%',
                flexShrink: 0,
                padding: '0 1rem',
                boxSizing: 'border-box',
              }}
            >
              {/* CARD CONTENT */}
              <div
                ref={(el) => { cardRefs.current[index] = el; }}
                style={{
                  backgroundColor: 'var(--card-bg-secondary)',
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  borderRadius: '20px',
                  border: '1px solid var(--border)',
                  height: maxHeight > 0 ? `${maxHeight}px` : 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Quote Icon */}
                <div style={{ 
                  fontSize: 'clamp(3rem, 5vw, 5rem)',
                  color: '#3b82f6',
                  opacity: 0.2,
                  position: 'absolute',
                  top: '0.5rem',
                  left: '1.5rem',
                  lineHeight: 1,
                  fontFamily: 'Georgia, serif',
                }}>
                  "
                </div>

                {/* Text Content - Grows to fill space */}
                <div style={{
                  flex: '1 1 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'clamp(1rem, 3vw, 2rem) 0',
                }}>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.8',
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                    textAlign: 'center',
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {recommendation.text}
                  </p>
                </div>

                {/* Author Info - Fixed at bottom */}
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingTop: '1.5rem',
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: 'clamp(50px, 8vw, 60px)',
                    height: 'clamp(50px, 8vw, 60px)',
                    borderRadius: '50%',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  }}>
                    {recommendation.avatar}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h4 style={{ 
                      fontWeight: '700',
                      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                      marginBottom: '0.25rem',
                      color: 'var(--text-primary)',
                    }}>
                      {recommendation.name}
                    </h4>
                    <p style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                      margin: 0,
                    }}>
                      {recommendation.role}, {recommendation.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION ARROWS */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '2rem',
      }}>
        <button
          onClick={prevSlide}
          aria-label="Previous recommendation"
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
            e.currentTarget.style.backgroundColor = '#3b82f6';
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
          aria-label="Next recommendation"
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
            e.currentTarget.style.backgroundColor = '#3b82f6';
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

      {/* DOTS INDICATOR */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '1.5rem',
      }}>
        {recommendations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to recommendation ${index + 1}`}
            style={{
              width: currentIndex === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: currentIndex === index ? '#3b82f6' : 'var(--border)',
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
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            marginBottom: '0.5rem',
            fontWeight: '700',
            color: 'var(--accent)',
          }}>
            Recommendations
          </h2>
          <p style={{ 
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            color: 'var(--text-secondary)',
          }}>
            Hear what my teammates and mentors have to say about collaborating with me - their words mean the world! 🌟
          </p>
        </div>

        <TestimonialCarousel recommendations={recommendations} />
      </div>
    </section>
  );
}