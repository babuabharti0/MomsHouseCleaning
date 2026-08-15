import React, { useEffect, useRef } from 'react';

const PILL_TEXTS = ['Spotless', '5-Star Clean', 'Fresh', 'Bonded & Insured'];

const ICONS = [
  // Star
  `<svg class="w-3.5 h-3.5 text-amber-500 fill-amber-400" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  // CheckCircle
  `<svg class="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  // Droplets
  `<svg class="w-3.5 h-3.5 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>`,
  // ShieldCheck
  `<svg class="w-3.5 h-3.5 text-[#051A24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
];

export const GlobalCursorTrail: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnTime = useRef<number>(0);
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    // Only run on devices with fine pointer (mouse / trackpad)
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Throttle: at least 100ms between spawns and at least 25px movement
      if (now - lastSpawnTime.current < 100 || dist < 25) {
        return;
      }

      lastSpawnTime.current = now;
      lastPos.current = { x: e.clientX, y: e.clientY };

      const container = containerRef.current;
      if (!container) return;

      const pill = document.createElement('div');
      const text = PILL_TEXTS[Math.floor(Math.random() * PILL_TEXTS.length)];
      const icon = ICONS[Math.floor(Math.random() * ICONS.length)];

      pill.className =
        'absolute flex items-center gap-1 bg-white/90 backdrop-blur-sm border border-[#051A24]/10 rounded-full px-3 py-1 text-xs font-semibold text-[#051A24] shadow-sm pointer-events-none select-none animate-float-out will-change-transform';

      // Random offset (-20px to +20px)
      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;

      // Physics variables for keyframe
      const tx = (Math.random() - 0.5) * 50;
      const ty = -25 - Math.random() * 35;
      const rot = (Math.random() - 0.5) * 30;

      pill.style.left = `${e.clientX + offsetX}px`;
      pill.style.top = `${e.clientY + offsetY}px`;
      pill.style.setProperty('--tx', `${tx}px`);
      pill.style.setProperty('--ty', `${ty}px`);
      pill.style.setProperty('--rot', `${rot}deg`);

      pill.innerHTML = `${icon}<span>${text}</span>`;

      container.appendChild(pill);

      // Garbage collection after animation completes
      setTimeout(() => {
        if (pill.parentNode) {
          pill.remove();
        }
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="global-cursor-layer"
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
      aria-hidden="true"
    />
  );
};
