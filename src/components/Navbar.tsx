import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/services' },
  { name: 'Contact Us', href: '/#contact' },
  { name: 'About Us', href: '/#about' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Payment Options', href: '/payment' },
];

interface NavbarProps {
  currentRoute?: 'home' | 'services' | 'contact' | 'about' | 'testimonials' | 'payment';
  onNavigate: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute = 'home',
  onNavigate,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(href);
  };

  const isActive = (href: string) => {
    if (href === '/' && currentRoute === 'home') return true;
    if (href === '/services' && currentRoute === 'services') return true;
    if ((href === '/#contact' || href === '/contact') && currentRoute === 'contact') return true;
    if ((href === '/#about' || href === '/about') && currentRoute === 'about') return true;
    if ((href === '/#testimonials' || href === '/testimonials') && currentRoute === 'testimonials') return true;
    if ((href === '/#payment' || href === '/payment') && currentRoute === 'payment') return true;
    return false;
  };

  return (
    <nav
      id="main-glassmorphism-navbar"
      className="fixed top-0 left-0 right-0 z-[100] bg-[#F4F9FF]/80 backdrop-blur-lg border-b border-[#051A24]/5 transition-all duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* LEFT SIDE (LOGO) */}
        <button
          id="navbar-brand-logo"
          onClick={() => handleLinkClick('/')}
          className="flex items-baseline gap-1.5 cursor-pointer text-left focus:outline-none group select-none shrink-0 whitespace-nowrap"
        >
          <span className="font-mondwest text-xl md:text-2xl text-[#051A24] font-semibold tracking-tight">
            Mom's
          </span>
          <span className="font-sans text-base md:text-lg text-[#051A24]/90 font-medium tracking-tight">
            House Cleaning
          </span>
        </button>

        {/* RIGHT SIDE (DESKTOP LINKS) */}
        <div className="hidden md:flex items-center flex-nowrap shrink-0 gap-3 md:gap-4 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <button
                key={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleLinkClick(link.href)}
                className={`relative py-1 whitespace-nowrap text-xs md:text-sm lg:text-base font-medium transition-all duration-200 cursor-pointer ${
                  active
                    ? 'text-[#051A24] opacity-100 font-semibold'
                    : 'text-[#051A24] opacity-70 hover:opacity-100 hover:text-[#051A24]'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#051A24] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* MOBILE MENU TRIGGER (HAMBURGER) */}
        <button
          id="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#051A24] p-2 rounded-xl hover:bg-slate-100/80 transition-colors focus:outline-none cursor-pointer"
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#051A24]" />
          ) : (
            <Menu className="w-6 h-6 text-[#051A24]" />
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div
          id="navbar-mobile-menu"
          className="md:hidden bg-[#F4F9FF]/95 backdrop-blur-xl border-b border-[#051A24]/10 px-6 py-6 shadow-xl animate-fade-in-up"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-left py-2.5 px-3 rounded-lg text-base font-medium transition-colors cursor-pointer flex items-center justify-between ${
                    active
                      ? 'bg-slate-100 text-[#051A24] font-semibold'
                      : 'text-[#051A24] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#051A24]" />
                  )}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-200/70 flex items-center justify-between">
              <a
                href="tel:2103808066"
                className="flex items-center gap-2 text-sm font-semibold text-[#051A24] bg-slate-100 hover:bg-slate-200/80 px-4 py-2.5 rounded-full transition-colors w-full justify-center"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call or Text: (210) 380-8066</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
