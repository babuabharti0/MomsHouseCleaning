import React from 'react';

export function RealisticStarIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="starGoldGloss" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF275" />
          <stop offset="30%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#FFAA00" />
          <stop offset="100%" stopColor="#E67300" />
        </linearGradient>
        <radialGradient id="starHighlight" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFE066" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFAA00" stopOpacity="0" />
        </radialGradient>
        <filter id="starShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#B35900" floodOpacity="0.4" />
        </filter>
      </defs>
      <path 
        d="M16 2L20.39 10.9L30.21 12.33L23.1 19.26L24.79 29.07L16 24.42L7.21 29.07L8.9 19.26L1.79 12.33L11.61 10.9L16 2Z" 
        fill="url(#starGoldGloss)" 
        filter="url(#starShadow)"
        stroke="#CC7A00"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
      {/* 3D Facet Highlight */}
      <path 
        d="M16 2.5L20.2 11.2L16 17.5L11.8 11.2L16 2.5Z" 
        fill="url(#starHighlight)" 
      />
      <path 
        d="M16 2.5L20.2 11.2L29.8 12.6L23 19.3L16 17.5Z" 
        fill="white" 
        fillOpacity="0.25" 
      />
    </svg>
  );
}

export function RealisticShieldIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="shieldMetalGloss" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6F4FF" />
          <stop offset="35%" stopColor="#69B1FF" />
          <stop offset="75%" stopColor="#0958D9" />
          <stop offset="100%" stopColor="#002C6A" />
        </linearGradient>
        <filter id="shieldShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#001D47" floodOpacity="0.35" />
        </filter>
      </defs>
      <path 
        d="M16 2L28 7V15C28 22.5 22.8 28.6 16 30C9.2 28.6 4 22.5 4 15V7L16 2Z" 
        fill="url(#shieldMetalGloss)" 
        filter="url(#shieldShadow)"
        stroke="#003EB3"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Light Reflection */}
      <path 
        d="M16 4.5L26 8.5V14.5C26 20.8 21.5 26.2 16 27.8V4.5Z" 
        fill="white" 
        fillOpacity="0.3" 
      />
      <path 
        d="M16 4.5L6 8.5V14.5C6 20.8 10.5 26.2 16 27.8V4.5Z" 
        fill="black" 
        fillOpacity="0.1" 
      />
      {/* Center Bevel Spine */}
      <path d="M16 4V28" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" />
    </svg>
  );
}

export function RealisticShieldCheckIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="shieldCheckEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="35%" stopColor="#10B981" />
          <stop offset="75%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
        <filter id="shieldCheckShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#022C22" floodOpacity="0.35" />
        </filter>
      </defs>
      <path 
        d="M16 2L28 7V15C28 22.5 22.8 28.6 16 30C9.2 28.6 4 22.5 4 15V7L16 2Z" 
        fill="url(#shieldCheckEmerald)" 
        filter="url(#shieldCheckShadow)"
        stroke="#047857"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Inner reflection */}
      <path 
        d="M16 4.5L26 8.5V14.5C26 20.8 21.5 26.2 16 27.8V4.5Z" 
        fill="white" 
        fillOpacity="0.3" 
      />
      {/* 3D Checkmark */}
      <path 
        d="M10.5 15.5L14.5 19.5L21.5 11.5" 
        stroke="white" 
        strokeWidth="3.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.4))"
      />
      <path 
        d="M10.5 15.5L14.5 19.5L21.5 11.5" 
        stroke="#D1FAE5" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RealisticCheckCircleIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="checkCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <radialGradient id="checkCircleInnerGlow" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="checkCircleShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#064E3B" floodOpacity="0.35" />
        </filter>
      </defs>
      <circle cx="16" cy="16" r="13" fill="url(#checkCircleGrad)" filter="url(#checkCircleShadow)" stroke="#065F46" strokeWidth="0.75" />
      <circle cx="16" cy="16" r="12" fill="url(#checkCircleInnerGlow)" />
      {/* 3D Checkmark */}
      <path 
        d="M10.5 16.5L14.5 20.5L21.5 12" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        filter="drop-shadow(0px 1.5px 1.5px rgba(0,0,0,0.3))"
      />
    </svg>
  );
}

export const RealisticCheckCircle2Icon = RealisticCheckCircleIcon;

export function RealisticCheckIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="checkIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <path 
        d="M7 16.5L13 22.5L25 9.5" 
        stroke="url(#checkIconGrad)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        filter="drop-shadow(0px 2px 2px rgba(4, 120, 87, 0.3))"
      />
      <path 
        d="M7 16.5L13 22.5L25 9.5" 
        stroke="white" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        strokeOpacity="0.8"
      />
    </svg>
  );
}

export function RealisticSparklesIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="sparkleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="30%" stopColor="#FDE68A" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="sparkleCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
        <filter id="sparkleShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#B45309" floodOpacity="0.4" />
        </filter>
      </defs>
      {/* Big Diamond Sparkle */}
      <path 
        d="M17 3C17 9.5 22.5 15 29 15C22.5 15 17 20.5 17 27C17 20.5 11.5 15 5 15C11.5 15 17 9.5 17 3Z" 
        fill="url(#sparkleGrad1)" 
        filter="url(#sparkleShadow)"
      />
      <circle cx="17" cy="15" r="4.5" fill="url(#sparkleCoreGlow)" />
      {/* Small Top-Left Sparkle */}
      <path 
        d="M7 3C7 5.2 8.8 7 11 7C8.8 7 7 8.8 7 11C7 8.8 5.2 7 3 7C5.2 7 7 5.2 7 3Z" 
        fill="url(#sparkleGrad1)" 
      />
      {/* Small Bottom-Right Sparkle */}
      <path 
        d="M26 23C26 24.5 27.2 25.7 28.7 25.7C27.2 25.7 26 26.9 26 28.4C26 26.9 24.8 25.7 23.3 25.7C24.8 25.7 26 24.5 26 23Z" 
        fill="url(#sparkleGrad1)" 
      />
    </svg>
  );
}

export function RealisticDropletsIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="dropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="40%" stopColor="#38BDF8" />
          <stop offset="80%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#075985" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Main Droplet */}
      <path 
        d="M12 4C12 4 4 14.5 4 20C4 24.4 7.6 28 12 28C16.4 28 20 24.4 20 20C20 14.5 12 4 12 4Z" 
        fill="url(#dropGrad)" 
        filter="url(#dropShadow)"
      />
      {/* Specular Highlight on Main Drop */}
      <path 
        d="M8.5 17C8.5 13.5 11 8.5 11 8.5C11 8.5 7.5 14 7.5 18C7.5 19.5 8.2 21 9.5 22C8.8 20.8 8.5 19 8.5 17Z" 
        fill="white" 
        fillOpacity="0.75" 
      />
      {/* Secondary Droplet */}
      <path 
        d="M23 9C23 9 17.5 16 17.5 20C17.5 23 20 25.5 23 25.5C26 25.5 28.5 23 28.5 20C28.5 16 23 9 23 9Z" 
        fill="url(#dropGrad)" 
        filter="url(#dropShadow)"
      />
      <path 
        d="M20.5 18C20.5 15.5 22 12 22 12C22 12 19.5 16 19.5 19C19.5 20 20 21 21 21.8C20.7 20.8 20.5 19.5 20.5 18Z" 
        fill="white" 
        fillOpacity="0.75" 
      />
    </svg>
  );
}

export function RealisticSunIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <filter id="sunShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#C2410C" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Sun Rays */}
      <g stroke="url(#sunGrad)" strokeWidth="2.5" strokeLinecap="round" filter="url(#sunShadow)">
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="16" y1="26" x2="16" y2="30" />
        <line x1="2" y1="16" x2="6" y2="16" />
        <line x1="26" y1="16" x2="30" y2="16" />
        <line x1="6.1" y1="6.1" x2="9" y2="9" />
        <line x1="23" y1="23" x2="25.9" y2="25.9" />
        <line x1="6.1" y1="25.9" x2="9" y2="23" />
        <line x1="23" y1="9" x2="25.9" y2="6.1" />
      </g>
      {/* Sun Center Sphere */}
      <circle cx="16" cy="16" r="7.5" fill="url(#sunGrad)" filter="url(#sunShadow)" />
      <circle cx="14" cy="14" r="5" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

export const RealisticSunMediumIcon = RealisticSunIcon;

export function RealisticPhoneCallIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="40%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <filter id="phoneShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#064E3B" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Receiver */}
      <path 
        d="M22 17.5C20.5 17.5 19 17.2 17.8 16.8C17.4 16.6 17 16.7 16.7 17L14.5 19.2C11.5 17.7 9.1 15.3 7.6 12.3L9.8 10.1C10.1 9.8 10.2 9.4 10 9C9.6 7.8 9.3 6.3 9.3 4.8C9.3 4.4 9 4 8.5 4H5C4.4 4 4 4.4 4 5C4 15 12 23 22 23C22.6 23 23 22.6 23 22V18.5C23 18 22.6 17.5 22 17.5Z" 
        fill="url(#phoneGrad)" 
        filter="url(#phoneShadow)"
        stroke="#065F46"
        strokeWidth="0.5"
      />
      {/* Sound waves / call arcs */}
      <path d="M22 4C25.5 4.5 28 7.5 28.5 11" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 8C23.8 8.4 25.2 9.8 25.6 11.6" stroke="#34D399" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export const RealisticPhoneIcon = RealisticPhoneCallIcon;

export function RealisticRadioIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="radioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>
        <filter id="radioShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#082F49" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Antenna */}
      <line x1="8" y1="10" x2="24" y2="3" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="3" r="1.5" fill="#38BDF8" />
      {/* Radio Body */}
      <rect x="3" y="10" width="26" height="18" rx="4" fill="url(#radioGrad)" filter="url(#radioShadow)" stroke="#0369A1" strokeWidth="0.75" />
      {/* Speaker Grille */}
      <circle cx="11" cy="19" r="5" fill="#082F49" />
      <circle cx="11" cy="19" r="3.5" fill="#0C4A6E" />
      <circle cx="11" cy="19" r="1.5" fill="#38BDF8" />
      {/* Dial Screen & Knobs */}
      <rect x="18" y="14" width="8" height="4" rx="1" fill="#E0F2FE" />
      <line x1="22" y1="14" x2="22" y2="18" stroke="#EF4444" strokeWidth="1" />
      <circle cx="20" cy="22" r="1.8" fill="#E0F2FE" />
      <circle cx="24" cy="22" r="1.8" fill="#E0F2FE" />
    </svg>
  );
}

export function RealisticVolumeIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="volumeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <filter id="volumeShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1E3A8A" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Speaker Horn */}
      <path 
        d="M4 12H8L14 7V25L8 20H4C3.4 20 3 19.6 3 19V13C3 12.4 3.4 12 4 12Z" 
        fill="url(#volumeGrad)" 
        filter="url(#volumeShadow)"
      />
      {/* Sound Waves */}
      <path d="M18 11C20.5 12.5 21.5 14.2 21.5 16C21.5 17.8 20.5 19.5 18 21" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 7C25.8 9.5 27.5 12.6 27.5 16C27.5 19.4 25.8 22.5 22 25" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export const RealisticVolume2Icon = RealisticVolumeIcon;

export function RealisticPlayIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="playGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#playGrad)" />
      <polygon points="13,10 22,16 13,22" fill="white" />
    </svg>
  );
}

export function RealisticPauseIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="pauseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#pauseGrad)" />
      <rect x="11" y="10" width="3.5" height="12" rx="1" fill="white" />
      <rect x="17.5" y="10" width="3.5" height="12" rx="1" fill="white" />
    </svg>
  );
}

export function RealisticHeartHandshakeIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="handshakeHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="40%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>
        <linearGradient id="handsGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="60%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <filter id="handshakeShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#881337" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Heart Background */}
      <path 
        d="M16 28C16 28 3 19.5 3 10.5C3 6 6.5 2.5 11 2.5C13.5 2.5 15.5 3.8 16 5C16.5 3.8 18.5 2.5 21 2.5C25.5 2.5 29 6 29 10.5C29 19.5 16 28 16 28Z" 
        fill="url(#handshakeHeartGrad)" 
        filter="url(#handshakeShadow)"
      />
      {/* Handshake Ribbon Inside */}
      <path 
        d="M11 13L14.5 16.5C15.3 17.3 16.7 17.3 17.5 16.5L21 13" 
        stroke="url(#handsGoldGrad)" 
        strokeWidth="3.2" 
        strokeLinecap="round"
      />
      <path 
        d="M9 16L13.5 20.5C14.9 21.9 17.1 21.9 18.5 20.5L23 16" 
        stroke="#FFFFFF" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeOpacity="0.9"
      />
    </svg>
  );
}

export function RealisticCreditCardIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="40%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#0F172A" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Card Body */}
      <rect x="2" y="6" width="28" height="20" rx="3.5" fill="url(#cardGrad)" filter="url(#cardShadow)" stroke="#0284C7" strokeWidth="0.5" />
      {/* Magnetic Stripe */}
      <rect x="2" y="11" width="28" height="4" fill="#091E3A" />
      {/* EMV Chip */}
      <rect x="6" y="18" width="5" height="4" rx="1" fill="#FBBF24" stroke="#D97706" strokeWidth="0.5" />
      {/* Card Details / Embossed Lines */}
      <rect x="14" y="19" width="12" height="2" rx="0.5" fill="#BAE6FD" fillOpacity="0.7" />
    </svg>
  );
}

export function RealisticGiftIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="giftBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="50%" stopColor="#DB2777" />
          <stop offset="100%" stopColor="#9D174D" />
        </linearGradient>
        <linearGradient id="giftRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <filter id="giftShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#831843" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Box base */}
      <rect x="5" y="14" width="22" height="14" rx="2" fill="url(#giftBoxGrad)" filter="url(#giftShadow)" />
      {/* Box Lid */}
      <rect x="3.5" y="10" width="25" height="5" rx="1.5" fill="url(#giftBoxGrad)" filter="url(#giftShadow)" stroke="#BE185D" strokeWidth="0.5" />
      {/* Vertical Ribbon */}
      <rect x="14" y="10" width="4" height="18" fill="url(#giftRibbonGrad)" />
      {/* Bow */}
      <path d="M16 10C13 6 8 6 10 9.5C11.5 11 15 10 16 10Z" fill="url(#giftRibbonGrad)" />
      <path d="M16 10C19 6 24 6 22 9.5C20.5 11 17 10 16 10Z" fill="url(#giftRibbonGrad)" />
      <circle cx="16" cy="10" r="1.5" fill="#FDE68A" />
    </svg>
  );
}

export function RealisticBadgeCheckIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="badgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#78350F" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Rosette Scallop Badge */}
      <path 
        d="M16 2.5L19.5 5.5L24 5.2L25.8 9.4L29.8 11.5L29.2 16L31.2 20L28 23.2L27.5 27.8L23 28.5L20 31.8L16 29.8L12 31.8L9 28.5L4.5 27.8L4 23.2L0.8 20L2.8 16L2.2 11.5L6.2 9.4L8 5.2L12.5 5.5L16 2.5Z" 
        fill="url(#badgeGold)" 
        filter="url(#badgeShadow)"
        stroke="#92400E"
        strokeWidth="0.75"
      />
      {/* Inner Ring */}
      <circle cx="16" cy="16" r="9" fill="#F59E0B" stroke="white" strokeWidth="1" strokeOpacity="0.8" />
      {/* Checkmark */}
      <path 
        d="M12 16L15 19L20 13" 
        stroke="white" 
        strokeWidth="2.8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        filter="drop-shadow(0px 1px 1px rgba(0,0,0,0.4))"
      />
    </svg>
  );
}

export function RealisticTrophyIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="trophyGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="30%" stopColor="#FCD34D" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <filter id="trophyShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#78350F" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Handles */}
      <path d="M7 6H4C4 11 8 13.5 10.5 14" stroke="url(#trophyGold)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M25 6H28C28 11 24 13.5 21.5 14" stroke="url(#trophyGold)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cup Body */}
      <path 
        d="M7 4H25V13C25 18 21 21 16 21C11 21 7 18 7 13V4Z" 
        fill="url(#trophyGold)" 
        filter="url(#trophyShadow)"
        stroke="#92400E"
        strokeWidth="0.75"
      />
      {/* Stem & Base */}
      <path d="M13.5 21H18.5V25H13.5V21Z" fill="url(#trophyGold)" />
      <path d="M8 25H24L25 29H7L8 25Z" fill="#1F2937" stroke="url(#trophyGold)" strokeWidth="1" />
      {/* Star Emblem */}
      <path d="M16 8.5L17.2 11.2L20.2 11.6L18 13.7L18.6 16.7L16 15.2L13.4 16.7L14 13.7L11.8 11.6L14.8 11.2L16 8.5Z" fill="#FFFBEB" />
    </svg>
  );
}

export function RealisticAwardIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="awardGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="awardRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <filter id="awardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#1E3A8A" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Ribbons */}
      <polygon points="12,18 7,30 13,26 18,30 15,18" fill="url(#awardRibbonGrad)" />
      <polygon points="20,18 25,30 19,26 14,30 17,18" fill="url(#awardRibbonGrad)" />
      {/* Medal Medallion */}
      <circle cx="16" cy="12" r="9.5" fill="url(#awardGoldGrad)" filter="url(#awardShadow)" stroke="#92400E" strokeWidth="0.75" />
      <circle cx="16" cy="12" r="7.5" stroke="#FEF3C7" strokeWidth="1" />
      {/* Star center */}
      <path d="M16 7L17.5 10.5L21 11L18.5 13.5L19.2 17L16 15.2L12.8 17L13.5 13.5L11 11L14.5 10.5L16 7Z" fill="#FFFBEB" />
    </svg>
  );
}

export function RealisticQuoteIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="quoteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <filter id="quoteShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.3" />
        </filter>
      </defs>
      <path 
        d="M12 7C7.5 7 4 10.8 4 15.5C4 22 9.5 26 15 29L16.5 25.5C12.8 23.5 11.5 21.2 11.5 19C12.2 19.3 13 19.5 14 19.5C17.5 19.5 20.5 16.5 20.5 13C20.5 9.5 17.5 7 14 7H12ZM24 7C19.5 7 16 10.8 16 15.5C16 22 21.5 26 27 29L28.5 25.5C24.8 23.5 23.5 21.2 23.5 19C24.2 19.3 25 19.5 26 19.5C29.5 19.5 32.5 16.5 32.5 13C32.5 9.5 29.5 7 26 7H24Z" 
        fill="url(#quoteGrad)" 
        filter="url(#quoteShadow)"
      />
    </svg>
  );
}

export function RealisticCalendarIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="calGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="40%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <filter id="calShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#1E3A8A" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Calendar Body */}
      <rect x="4" y="6" width="24" height="22" rx="4" fill="white" filter="url(#calShadow)" stroke="#CBD5E1" strokeWidth="1" />
      {/* Header Band */}
      <path d="M4 10C4 7.8 5.8 6 8 6H24C26.2 6 28 7.8 28 10V12H4V10Z" fill="url(#calGrad)" />
      {/* Spiral Binder Rings */}
      <rect x="9" y="3" width="2.5" height="6" rx="1" fill="#475569" />
      <rect x="20.5" y="3" width="2.5" height="6" rx="1" fill="#475569" />
      {/* Calendar Grid Dots */}
      <circle cx="9" cy="17" r="1.5" fill="#3B82F6" />
      <circle cx="16" cy="17" r="1.5" fill="#3B82F6" />
      <circle cx="23" cy="17" r="1.5" fill="#3B82F6" />
      <circle cx="9" cy="23" r="1.5" fill="#3B82F6" />
      <circle cx="16" cy="23" r="1.5" fill="#F59E0B" />
      <circle cx="23" cy="23" r="1.5" fill="#10B981" />
    </svg>
  );
}

export function RealisticArrowRightIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="arrowRGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      <path 
        d="M6 16H24M24 16L16 8M24 16L16 24" 
        stroke="url(#arrowRGrad)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        filter="drop-shadow(0px 2px 2px rgba(2,132,199,0.3))"
      />
    </svg>
  );
}

export function RealisticArrowLeftIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="arrowLGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      <path 
        d="M26 16H8M8 16L16 8M8 16L16 24" 
        stroke="url(#arrowLGrad)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        filter="drop-shadow(0px 2px 2px rgba(2,132,199,0.3))"
      />
    </svg>
  );
}

export function RealisticArrowUpRightIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="arrowURGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
      <path 
        d="M9 23L23 9M23 9H13M23 9V19" 
        stroke="url(#arrowURGrad)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        filter="drop-shadow(0px 2px 2px rgba(30,58,138,0.3))"
      />
    </svg>
  );
}

export function RealisticChevronLeftIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path 
        d="M20 24L12 16L20 8" 
        stroke="#0F172A" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export function RealisticChevronRightIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path 
        d="M12 8L20 16L12 24" 
        stroke="#0F172A" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export function RealisticMenuIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="menuBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#051A24" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      <rect x="4" y="7" width="24" height="3.5" rx="1.75" fill="url(#menuBarGrad)" />
      <rect x="4" y="14.25" width="24" height="3.5" rx="1.75" fill="url(#menuBarGrad)" />
      <rect x="4" y="21.5" width="24" height="3.5" rx="1.75" fill="url(#menuBarGrad)" />
    </svg>
  );
}

export function RealisticXIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="xGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="13" fill="#FEE2E2" />
      <path d="M10 10L22 22M22 10L10 22" stroke="url(#xGrad)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function RealisticCalculatorIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="calcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="40%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>
        <filter id="calcShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0C4A6E" floodOpacity="0.3" />
        </filter>
      </defs>
      <rect x="5" y="3" width="22" height="26" rx="4" fill="url(#calcGrad)" filter="url(#calcShadow)" stroke="#0369A1" strokeWidth="0.75" />
      {/* Screen */}
      <rect x="8" y="6" width="16" height="5" rx="1" fill="#E0F2FE" />
      <text x="21" y="10" fontSize="4" fontWeight="bold" fill="#0C4A6E" textAnchor="end" fontFamily="monospace">0.00</text>
      {/* Keypad Buttons */}
      <circle cx="10" cy="15" r="1.8" fill="#BAE6FD" />
      <circle cx="16" cy="15" r="1.8" fill="#BAE6FD" />
      <circle cx="22" cy="15" r="1.8" fill="#F59E0B" />
      <circle cx="10" cy="20" r="1.8" fill="#BAE6FD" />
      <circle cx="16" cy="20" r="1.8" fill="#BAE6FD" />
      <circle cx="22" cy="20" r="1.8" fill="#F59E0B" />
      <circle cx="10" cy="25" r="1.8" fill="#BAE6FD" />
      <circle cx="16" cy="25" r="1.8" fill="#34D399" />
      <circle cx="22" cy="25" r="1.8" fill="#10B981" />
    </svg>
  );
}

export function RealisticMailIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="mailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <filter id="mailShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#1E3A8A" floodOpacity="0.3" />
        </filter>
      </defs>
      <rect x="3" y="6" width="26" height="20" rx="3.5" fill="white" filter="url(#mailShadow)" stroke="#93C5FD" strokeWidth="1" />
      {/* Envelope Flap */}
      <path d="M3 8L16 18L29 8" stroke="url(#mailGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 24L11 16" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M29 24L21 16" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function RealisticSendIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="sendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      <path 
        d="M29 3L14 18M29 3L19 29L14 18M29 3L3 13L14 18" 
        stroke="url(#sendGrad)" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        filter="drop-shadow(0px 2px 2px rgba(2,132,199,0.35))"
      />
    </svg>
  );
}

export function RealisticMapPinIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="40%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <filter id="pinShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#7F1D1D" floodOpacity="0.4" />
        </filter>
      </defs>
      <path 
        d="M16 2C10.5 2 6 6.5 6 12C6 19.5 16 30 16 30C16 30 26 19.5 26 12C26 6.5 21.5 2 16 2Z" 
        fill="url(#pinGrad)" 
        filter="url(#pinShadow)"
      />
      <circle cx="16" cy="11.5" r="4.5" fill="white" />
      <circle cx="16" cy="11.5" r="2.5" fill="#EF4444" />
    </svg>
  );
}

export function RealisticClockIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="clockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <filter id="clockShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#1E3A8A" floodOpacity="0.3" />
        </filter>
      </defs>
      <circle cx="16" cy="16" r="13" fill="white" filter="url(#clockShadow)" stroke="url(#clockGrad)" strokeWidth="3" />
      <circle cx="16" cy="16" r="2" fill="#1E3A8A" />
      <line x1="16" y1="16" x2="16" y2="8" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="16" x2="22" y2="16" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RealisticHeartIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="40%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>
        <filter id="heartShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#881337" floodOpacity="0.35" />
        </filter>
      </defs>
      <path 
        d="M16 28C16 28 3 19.5 3 10.5C3 6 6.5 2.5 11 2.5C13.5 2.5 15.5 3.8 16 5C16.5 3.8 18.5 2.5 21 2.5C25.5 2.5 29 6 29 10.5C29 19.5 16 28 16 28Z" 
        fill="url(#heartGrad)" 
        filter="url(#heartShadow)"
      />
      <path 
        d="M8 8C7 10 7.5 13 8 14" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeOpacity="0.7" 
      />
    </svg>
  );
}

export function RealisticUsersIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="usersGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      {/* Background Person */}
      <circle cx="21" cy="11" r="4" fill="#93C5FD" />
      <path d="M16 25C16 21 19 18 23 18C27 18 30 21 30 25" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
      {/* Foreground Person */}
      <circle cx="11" cy="11" r="5" fill="url(#usersGrad)" />
      <path d="M3 27C3 21.5 7 17.5 12 17.5C17 17.5 21 21.5 21 27" fill="url(#usersGrad)" />
    </svg>
  );
}

export function RealisticLockIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="lockBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <filter id="lockShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#78350F" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Shackle */}
      <path d="M10 13V8C10 4.7 12.7 2 16 2C19.3 2 22 4.7 22 8V13" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
      {/* Lock Base */}
      <rect x="6" y="12" width="20" height="16" rx="3.5" fill="url(#lockBodyGrad)" filter="url(#lockShadow)" stroke="#92400E" strokeWidth="0.75" />
      <circle cx="16" cy="19" r="2" fill="#78350F" />
      <line x1="16" y1="21" x2="16" y2="24" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function RealisticFacebookIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="fbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1877F2" />
          <stop offset="100%" stopColor="#0D47A1" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#fbGrad)" />
      <path d="M18.5 16H16V26H12V16H10V12.5H12V10C12 7.8 13.5 6 16.5 6H19.5V9.5H17.5C16.8 9.5 16 9.8 16 10.8V12.5H19.5L18.5 16Z" fill="white" />
    </svg>
  );
}

export function RealisticLinkedinIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="liGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A66C2" />
          <stop offset="100%" stopColor="#004182" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="26" height="26" rx="6" fill="url(#liGrad)" />
      <circle cx="9.5" cy="9.5" r="2" fill="white" />
      <rect x="7.5" y="13" width="4" height="11" fill="white" />
      <path d="M14.5 13H18.5V14.8C19.2 13.6 20.8 12.6 22.8 12.6C26 12.6 27.5 14.8 27.5 18.2V24H23.5V19C23.5 17.5 22.8 16.5 21.2 16.5C19.8 16.5 18.5 17.5 18.5 19V24H14.5V13Z" fill="white" />
    </svg>
  );
}

export function RealisticGlobeIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="13" fill="url(#globeGrad)" />
      <ellipse cx="16" cy="16" rx="6.5" ry="13" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1="3" y1="16" x2="29" y2="16" stroke="white" strokeWidth="1.5" />
      <line x1="6" y1="9.5" x2="26" y2="9.5" stroke="white" strokeWidth="1" strokeOpacity="0.8" />
      <line x1="6" y1="22.5" x2="26" y2="22.5" stroke="white" strokeWidth="1" strokeOpacity="0.8" />
    </svg>
  );
}

export function RealisticShareIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="shareNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <line x1="10" y1="16" x2="22" y2="9" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="10" y1="16" x2="22" y2="23" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="8" cy="16" r="4.5" fill="url(#shareNodeGrad)" />
      <circle cx="24" cy="8" r="4.5" fill="url(#shareNodeGrad)" />
      <circle cx="24" cy="24" r="4.5" fill="url(#shareNodeGrad)" />
    </svg>
  );
}

export function RealisticXSocialIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="16" cy="16" r="14" fill="#000000" />
      <path 
        d="M21.5 8H24L18.5 14.3L25 24H19.5L15.2 18.2L10.3 24H7.8L13.7 17.2L7.5 8H13.2L17.1 13.3L21.5 8ZM20.6 22.3H22L11.5 9.5H10.1L20.6 22.3Z" 
        fill="white" 
      />
    </svg>
  );
}

export function RealisticAlignableIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="alignableGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#alignableGrad)" />
      {/* Stylized A icon for Alignable */}
      <path
        d="M16 7L23 23H19.2L17.7 19.5H14.3L12.8 23H9L16 7ZM16 12.8L14.8 16.5H17.2L16 12.8Z"
        fill="white"
      />
    </svg>
  );
}

export function RealisticSearchIcon({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <defs>
        <linearGradient id="searchRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A6572" />
          <stop offset="50%" stopColor="#273C46" />
          <stop offset="100%" stopColor="#051A24" />
        </linearGradient>
        <linearGradient id="searchGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#E0F2FE" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="searchHandleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <filter id="searchShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#051A24" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Handle */}
      <path 
        d="M20.5 20.5L28 28" 
        stroke="url(#searchHandleGrad)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        filter="url(#searchShadow)"
      />
      <path 
        d="M20.5 20.5L28 28" 
        stroke="white" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeOpacity="0.4"
      />
      {/* Glass & Rim */}
      <circle 
        cx="13.5" 
        cy="13.5" 
        r="8.5" 
        fill="url(#searchGlassGrad)" 
        stroke="url(#searchRimGrad)" 
        strokeWidth="3" 
        filter="url(#searchShadow)"
      />
      {/* Glare / Specular highlight */}
      <path 
        d="M8.5 10C9.5 8 11.5 7 14 7" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeOpacity="0.85"
      />
    </svg>
  );
}

