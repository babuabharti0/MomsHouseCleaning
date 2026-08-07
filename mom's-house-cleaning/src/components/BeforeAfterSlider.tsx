import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';
import beforeImg from '../images/before.webp';
import afterImg from '../images/after.webp';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const transitionClass = !isInteracting ? 'transition-all duration-500 ease-out' : 'transition-none';

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl border border-blue-tint p-4 sm:p-5 relative z-10 flex flex-col gap-3">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-blue-dark">Interactive Transformation</h3>
        </div>
        <span className="text-xs font-semibold text-blue-dark/70 bg-pink-tint px-2.5 py-1 rounded-full border border-pink-base/30">
          Drag slider
        </span>
      </div>

      {/* Comparison Frame */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden select-none cursor-ew-resize group shadow-md"
        onMouseEnter={() => setIsInteracting(true)}
        onMouseDown={(e) => { setIsInteracting(true); setIsDragging(true); handleMove(e.clientX); }}
        onMouseUp={() => { setIsInteracting(false); setIsDragging(false); }}
        onMouseLeave={() => { setSliderPos(50); setIsInteracting(false); setIsDragging(false); }}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => { setIsInteracting(true); setIsDragging(true); handleMove(e.touches[0].clientX); }}
        onTouchEnd={() => { setIsInteracting(false); setIsDragging(false); }}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Base Layer - Right Side Visible) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={afterImg} 
            alt="Sparkling Clean Kitchen - After" 
            className="w-full h-full object-cover"
          />
          {/* AFTER LABEL - Dark Blue text, Base Blue background */}
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-blue-base text-blue-dark font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-md tracking-wider uppercase border border-blue-dark/20">
              After
            </span>
          </div>
        </div>

        {/* BEFORE IMAGE (Top Layer - Clipped Left Side with clip-path) */}
        <div 
          className={`absolute inset-0 w-full h-full pointer-events-none ${transitionClass}`}
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img 
            src={beforeImg} 
            alt="Messy Kitchen - Before" 
            className="w-full h-full object-cover"
          />

          {/* BEFORE LABEL - Dark Blue text, Light Pink background */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-pink-tint text-blue-dark font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-md tracking-wider uppercase border border-pink-dark/30">
              Before
            </span>
          </div>
        </div>

        {/* DRAGGABLE VERTICAL DIVIDER HANDLE */}
        <div 
          className={`absolute top-0 bottom-0 w-1 bg-white shadow-xl z-20 -translate-x-1/2 flex items-center justify-center ${transitionClass}`}
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-pink-base border-2 border-blue-dark text-blue-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>

        {/* ACCESSIBLE RANGE INPUT COVER */}
        <input 
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onFocus={() => setIsInteracting(true)}
          onBlur={() => { setSliderPos(50); setIsInteracting(false); }}
          onChange={(e) => { setIsInteracting(true); setSliderPos(Number(e.target.value)); }}
          aria-label="Before and after image slider position"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />
      </div>

      <p className="text-center text-xs text-blue-dark/70 font-semibold mt-0.5">
        Slide left or right to inspect our deep cleaning transformation
      </p>
    </div>
  );
}
