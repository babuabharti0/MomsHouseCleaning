import { useState } from 'react';
import { FcApprove, FcGlobe, FcConferenceCall, FcRight, FcCamera, FcCalculator } from 'react-icons/fc';
import { GiRotaryPhone } from 'react-icons/gi';
import SmartEstimator from './SmartEstimator';
import BeforeAfterSlider from './BeforeAfterSlider';
import Reveal from './Reveal';

export default function Hero() {
  const [activeWidget, setActiveWidget] = useState<'slider' | 'estimator'>('slider');

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Cinematic Single Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/jbblynim/video/upload/v1785270109/Timeline_1_dghfjn.mp4"
        />
      </div>

      {/* Frosted Glass Readability Overlay */}
      <div className="absolute inset-0 z-10 bg-[#FCE4E4]/50 backdrop-blur-[2px] dark:bg-[#0B1E2B]/50 pointer-events-none" />

      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-base/20 rounded-full blur-3xl pointer-events-none z-10" />
      
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 items-start">
          
          {/* Left Side: Copy & CTAs */}
          <div className="w-full lg:w-1/2 pt-2">
            <Reveal direction="left" isHero={true}>
            <h1
              className="tracking-tight text-white drop-shadow-md leading-[1.1]"
              style={{
                textAlign: 'left',
                fontStyle: 'normal',
                fontWeight: 'normal',
                textDecorationLine: 'none',
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: '75.4px',
              }}
            >
              <span className="text-white block mb-2 font-black drop-shadow-md">INTEGRITY!</span>
              The Foundation of Every Spotless Home.
            </h1>
            <p
              className="mt-6 text-2xl sm:text-3xl text-white drop-shadow-md leading-relaxed font-medium"
            >
              High-Quality Commercial & Residential Maid Services in San Antonio Since 1999.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-xs border border-blue-tint">
                <FcApprove className="w-8 h-8" />
                <span className="text-lg font-semibold text-blue-dark">Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-xs border border-blue-tint">
                <FcConferenceCall className="w-8 h-8" />
                <span className="text-lg font-semibold text-blue-dark">W-2 Staff</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-xs border border-blue-tint">
                <FcGlobe className="w-8 h-8" />
                <span className="text-lg font-semibold text-blue-dark">Green Tech (HOCl)</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="tel:2103808066" className="inline-flex justify-center items-center w-24 h-24 rounded-full bg-white text-blue-dark border-2 border-blue-base/40 hover:border-blue-dark transition-colors" aria-label="Call 210.380.8066">
                <GiRotaryPhone className="w-12 h-12 text-[#FF6500]" />
              </a>
            </div>
            </Reveal>
          </div>

          {/* Right Side: Interactive Before/After Slider & Smart Estimator Widget */}
          <div className="w-full lg:w-auto space-y-4" id="book">
            <Reveal direction="right" isHero={true}>
            {/* Widget Mode Switcher */}
            <div className="flex rounded-2xl bg-white p-2 border border-blue-tint shadow-xs">
              <button
                onClick={() => setActiveWidget('slider')}
                className={`flex-1 py-4 px-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all ${
                  activeWidget === 'slider'
                    ? 'bg-blue-dark text-white shadow-sm'
                    : 'text-blue-dark hover:bg-pink-tint'
                }`}
              >
                <FcCamera className="w-8 h-8" />
                Before/After Proof
              </button>
              <button
                onClick={() => setActiveWidget('estimator')}
                className={`flex-1 py-4 px-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all ${
                  activeWidget === 'estimator'
                    ? 'bg-blue-dark text-white shadow-sm'
                    : 'text-blue-dark hover:bg-pink-tint'
                }`}
              >
                <FcCalculator className="w-8 h-8" />
                Instant Price Estimator
              </button>
            </div>

            {/* Widget Container */}
            <div style={{ height: '600px', width: '800px' }}>
              {activeWidget === 'slider' ? (
                <BeforeAfterSlider />
              ) : (
                <SmartEstimator />
              )}
            </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}

