import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const TestimonialSection: React.FC = () => {
  const { ref: containerRef, isInView } = useInViewAnimation(0.1);
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (!parallaxRef.current) {
        ticking = false;
        return;
      }
      const rect = parallaxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of element relative to viewport (-1 to 1)
      if (rect.top < windowHeight && rect.bottom > 0) {
        const centerY = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const relativePosition = (centerY - viewportCenter) / (windowHeight / 2);
        
        // Calculate offset with max 200px limit
        const offset = Math.max(-200, Math.min(200, relativePosition * 60));
        setParallaxOffset(offset);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section
      id="testimonial-quote-section"
      ref={containerRef}
      className="w-full py-12 px-6 flex flex-col items-center justify-center text-center"
    >
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Quote Icon */}
        <div
          id="quote-icon"
          style={{ animationDelay: '0.1s' }}
          className={`mb-6 text-slate-900 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <Quote className="w-6 h-6 text-slate-900 rotate-180" />
        </div>

        {/* Large Quote Text */}
        <blockquote
          id="quote-text"
          style={{ animationDelay: '0.2s' }}
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight font-normal mb-4 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="font-mondwest font-semibold not-italic">INTEGRITY!</span>{' '}
          It remains the foundation of all success and wholeness.
        </blockquote>

        {/* Author */}
        <p
          id="quote-author"
          style={{ animationDelay: '0.3s' }}
          className={`italic text-sm text-[#273C46] font-normal mb-10 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Mom's House Cleaning Guarantee
        </p>

        {/* Trust Badges - Company Logo Names displayed as text */}
        <div
          id="trust-badges"
          style={{ animationDelay: '0.4s' }}
          className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div
            id="badge-angies-list"
            className="w-[110px] text-[24px] font-medium text-slate-900 tracking-tighter leading-none border-b border-slate-300 pb-1"
          >
            Angie's List
          </div>
          <div
            id="badge-home-advisor"
            className="w-[120px] text-[24px] font-medium text-slate-900 tracking-tighter leading-none border-b border-slate-300 pb-1"
          >
            Home Advisor
          </div>
          <div
            id="badge-bexar-county"
            className="w-[140px] text-[24px] font-medium text-slate-900 tracking-tighter leading-none border-b border-slate-300 pb-1"
          >
            Bexar County DBA
          </div>
        </div>

        {/* Parallax Image */}
        <div
          ref={parallaxRef}
          id="parallax-image-container"
          style={{ animationDelay: '0.5s' }}
          className={`w-full max-w-xs overflow-hidden rounded-2xl shadow-lg relative h-[380px] sm:h-[440px] will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <img
            id="parallax-image"
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
            alt="Vertical view of a clean, sunlit home interior with natural light"
            loading="lazy"
            referrerPolicy="no-referrer"
            style={{
              transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.15)`,
              transition: 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)',
            }}
            className="w-full h-full object-cover rounded-2xl will-change-transform"
          />
        </div>
      </div>
    </section>
  );
};
