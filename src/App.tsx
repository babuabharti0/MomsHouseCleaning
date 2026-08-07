/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AmbientCursor from './components/AmbientCursor';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactPortal from './components/ContactPortal';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import SEO from './components/SEO';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function App() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothTouch: false }} ref={lenisRef} autoRaf={false}>
      <div className="min-h-screen flex flex-col font-sans bg-pink-tint text-blue-dark selection:bg-blue-base/30 selection:text-blue-dark relative">
      <AmbientCursor />
      <SEO />
      <AnnouncementBar />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/40 backdrop-blur-md border-b border-blue-base/30 shadow-xs">
        <div className="w-full px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl sm:text-2xl font-black text-[#1A4F6B] tracking-tight text-left hover:text-[#F4C2C2] transition-colors"
            >
              Mom's <span className="text-pink-dark">House Cleaning</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#1A4F6B] hover:text-[#F4C2C2] transition-colors font-bold"
            >
              Home
            </a>
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#1A4F6B] hover:text-[#F4C2C2] transition-colors font-bold"
            >
              Our Services
            </a>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#1A4F6B] hover:text-[#F4C2C2] transition-colors font-bold"
            >
              About Us
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#1A4F6B] hover:text-[#F4C2C2] transition-colors font-bold"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a 
              href="tel:2103808066" 
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#89CFF0] text-[#1A4F6B] rounded-full font-bold hover:bg-[#F4C2C2] transition-colors shadow-xs text-sm"
            >
              Call 210.380.8066
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <Testimonials />
        <Services />
        <AboutUs />
        <ContactPortal />
      </main>

      <Footer />
      <MobileNav />
    </div>
    </ReactLenis>
  );
}

