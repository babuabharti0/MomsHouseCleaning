import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  direction: 'left' | 'right';
  className?: string;
  isHero?: boolean;
}

export default function Reveal({ children, direction, className = '', isHero = false }: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.set(containerRef.current, {
      opacity: 0,
      x: direction === 'left' ? -150 : 150,
    });

    if (isHero) {
      gsap.to(containerRef.current, {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1.2,
        delay: 0.2,
      });
    } else {
      gsap.to(containerRef.current, {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          end: "center center",
          scrub: 1,
        }
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
