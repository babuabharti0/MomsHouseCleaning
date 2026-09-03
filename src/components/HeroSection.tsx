import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface HeroSectionProps {
  onOpenEstimate: () => void;
  onScrollToServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEstimate,
  onScrollToServices,
}) => {
  const { ref, isInView } = useInViewAnimation(0.05);

  return (
    <section
      id="hero-section"
      ref={ref}
      className="relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-8 px-4 md:py-24 md:px-12 pt-20 md:pt-28"
    >
      {/* Video & Contrast Shield Overlay Layers (Z-INDEX 0) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full transform scale-105"
        >
          <source
            src="https://res.cloudinary.com/jbblynim/video/upload/v1785270109/Timeline_1_dghfjn.mp4"
            type="video/mp4"
          />
        </video>

        {/* The Contrast Shield: 65% black overlay to guarantee 100% text legibility */}
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Typography & Interactive Content (Z-INDEX 20) */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto mt-6 md:mt-12 w-full">
        {/* Logo Text */}
        <h1
          id="hero-logo"
          style={{ animationDelay: '0.1s' }}
          className={`font-heading text-[12vw] sm:text-[8vw] md:text-[56px] lg:text-[64px] font-semibold text-white tracking-tight leading-none mb-3 md:mb-4 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Mom's House Cleaning
        </h1>

        {/* Tagline */}
        <p
          id="hero-tagline"
          style={{ animationDelay: '0.2s' }}
          className={`font-mono text-xs md:text-sm text-[#F6FCFF]/90 font-medium tracking-wider mb-3 md:mb-2 uppercase will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          San Antonio Area House Cleaning Service
        </p>

        {/* Main Heading */}
        <div
          id="hero-heading"
          style={{ animationDelay: '0.3s' }}
          className={`text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] leading-[1.15] md:leading-[1.1] text-white tracking-tight mb-2 will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="block font-normal">A Passion for</span>
          <span className="block font-heading font-semibold italic text-white">Cleaning Spaces.</span>
        </div>

        {/* Description Paragraph */}
        <div
          id="hero-description"
          style={{ animationDelay: '0.4s' }}
          className={`text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed mt-4 md:mt-6 text-center font-normal max-w-xl will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <p id="hero-desc-1">
            Top-rated residential and maid cleaning across San Antonio since 1999.
          </p>
        </div>

        {/* Two Action Buttons */}
        <div
          id="hero-actions"
          style={{ animationDelay: '0.5s' }}
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 w-full justify-center will-change-transform ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <button
            id="hero-btn-estimate"
            onClick={onOpenEstimate}
            className="w-full sm:w-auto bg-white text-[#051A24] rounded-full px-4 py-2.5 text-sm md:px-8 md:py-4 md:text-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform cursor-pointer select-none whitespace-nowrap text-center active:scale-[0.98]"
          >
            Get a Free Estimate
          </button>
          <button
            id="hero-btn-services"
            onClick={onScrollToServices}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full px-4 py-2.5 text-sm md:px-8 md:py-4 md:text-xl font-semibold hover:bg-white/20 transition-all cursor-pointer select-none whitespace-nowrap text-center active:scale-[0.98]"
          >
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

