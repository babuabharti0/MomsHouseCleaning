import { useEffect, useRef } from 'react';

export default function AmbientCursor() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const x = e.clientX - 192; // 192px is half of 384px (w-96)
        const y = e.clientY - 192;
        orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none blur-[100px] opacity-60 z-0 bg-[#F4C2C2] will-change-transform"
      style={{ transform: 'translate3d(-500px, -500px, 0)' }}
    />
  );
}
