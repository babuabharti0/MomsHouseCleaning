import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Star, Droplets, SunMedium, CheckCircle2 } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface FloatingTrailItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  type: number;
}

const TRAIL_ICONS = [
  { icon: Sparkles, color: 'text-amber-500', bg: 'bg-amber-50 border-amber-200', text: 'Spotless' },
  { icon: Droplets, color: 'text-sky-500', bg: 'bg-sky-50 border-sky-200', text: 'Fresh' },
  { icon: Star, color: 'text-emerald-500', bg: 'bg-emerald-50 border-emerald-200', text: '5-Star Clean' },
  { icon: SunMedium, color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200', text: 'Sanitized' },
  { icon: CheckCircle2, color: 'text-blue-500', bg: 'bg-blue-50 border-blue-200', text: 'Bonded & Insured' },
];

export const PartnerSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation(0.1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [trailItems, setTrailItems] = useState<FloatingTrailItem[]>([]);
  const lastSpawnTime = useRef<number>(0);
  const idCounter = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    // Minimum 80ms between spawns
    if (now - lastSpawnTime.current < 80) return;
    lastSpawnTime.current = now;

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const randomRotation = Math.floor(Math.random() * 21) - 10; // -10 to +10 deg
    const randomType = Math.floor(Math.random() * TRAIL_ICONS.length);
    const newId = ++idCounter.current;

    const newItem: FloatingTrailItem = {
      id: newId,
      x,
      y,
      rotation: randomRotation,
      type: randomType,
    };

    setTrailItems((prev) => [...prev.slice(-15), newItem]);

    // Clean up after 1000ms
    setTimeout(() => {
      setTrailItems((prev) => prev.filter((item) => item.id !== newId));
    }, 1000);
  }, []);

  const handleTextAction = () => {
    window.open('sms:2103808066?body=Hi%20Mom%27s%20House%20Cleaning,%20I%20would%20like%20to%20get%20a%20free%20estimate!', '_self');
  };

  return (
    <section
      id="partner-contact-section"
      ref={sectionRef}
      className="w-full py-12 px-6"
    >
      <div
        ref={containerRef}
        id="partner-cta-container"
        onMouseMove={handleMouseMove}
        className={`w-full max-w-7xl mx-auto py-32 md:py-48 rounded-[40px] bg-white border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        {/* Floating cursor trail elements */}
        {trailItems.map((item) => {
          const config = TRAIL_ICONS[item.type];
          const IconComp = config.icon;

          return (
            <div
              key={item.id}
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
                animation: 'trailFadeOut 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}
              className="absolute pointer-events-none z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-md border text-xs font-medium backdrop-blur-sm"
            >
              <span className={`inline-flex ${config.bg} p-1 rounded-full border`}>
                <IconComp className={`w-3.5 h-3.5 ${config.color}`} />
              </span>
              <span className="text-[#051A24] font-mono text-[11px] font-semibold tracking-tight">
                {config.text}
              </span>
            </div>
          );
        })}

        {/* Heading */}
        <h2
          id="partner-heading"
          className="font-mondwest text-[44px] sm:text-[56px] md:text-[64px] lg:text-[80px] leading-[1.05] text-[#0D212C] max-w-4xl tracking-tight mb-10 md:mb-12 select-none"
        >
          Let us do your dirty work
        </h2>

        {/* CTA Button: Dark pill with circular avatar image + Text Us */}
        <div className="relative z-10">
          <button
            id="btn-text-us-cta"
            onClick={handleTextAction}
            className="group flex items-center gap-4 bg-[#051A24] text-white hover:bg-[#0c2e3f] pl-2 pr-8 py-2.5 rounded-full btn-primary-shadow border-t border-white/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Friendly cleaner specialist"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#051A24] rounded-full"></span>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs uppercase font-mono tracking-widest text-[#E0EBF0]/70">
                Direct SMS Dispatch
              </span>
              <span className="text-base sm:text-lg font-semibold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                Text Us: 210.380.8066
              </span>
            </div>
          </button>
        </div>

        {/* CSS for trail fade out */}
        <style>{`
          @keyframes trailFadeOut {
            0% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
            70% {
              opacity: 0.8;
              transform: translate(-50%, -70%) scale(0.95);
            }
            100% {
              opacity: 0;
              transform: translate(-50%, -90%) scale(0.7);
            }
          }
        `}</style>
      </div>
    </section>
  );
};
