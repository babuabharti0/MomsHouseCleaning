import React, { useState, useEffect, useRef } from 'react';
import { RealisticChevronLeftIcon, RealisticChevronRightIcon, RealisticStarIcon } from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Mom's House Cleaning transformed our home in Alamo Heights! Their crew arrived right on the dot, tackled decades of hard water and baseboard grime, and treated our home with supreme respect. Best cleaning service in San Antonio.",
    name: 'Sarah M.',
    location: '→ Alamo Heights, San Antonio',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 2,
    quote:
      'We have used Mom’s House Cleaning for our bi-weekly maintenance in Stone Oak for over two years. Trustworthy, impeccably detailed, and they always remember our pet-friendly preferences.',
    name: 'David & Claire R.',
    location: '→ Stone Oak, San Antonio',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 3,
    quote:
      'When our tenants moved out of our King William historic property, Mom’s team performed a miracle make-ready deep clean. The kitchen and original hardwood floors looked brand new!',
    name: 'Maria G.',
    location: '→ King William Historic District',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 4,
    quote:
      'Honest, family-owned dependability at its finest. They gave us a competitive upfront price that beat every other insured company, and their cleaning quality surpassed all expectations.',
    name: 'Robert T.',
    location: '→ The Dominion, San Antonio',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 5,
    quote:
      'Their green cleaning option is phenomenal! With two toddlers and a golden retriever in Helotes, having spotless countertops without harsh fumes gives us complete peace of mind.',
    name: 'Elena H.',
    location: '→ Helotes / Northwest San Antonio',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
  },
];

export const TestimonialCarousel: React.FC = () => {
  const { ref, isInView } = useInViewAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = TESTIMONIALS.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  // Auto-scroll every 3.5 seconds, paused on hover
  useEffect(() => {
    if (isHovered) return;

    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isHovered, currentIndex]);

  return (
    <section
      id="testimonial-carousel-section"
      ref={ref}
      className="w-full py-8 px-4 md:py-24 md:px-12 overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col md:items-end">
        {/* Header Row */}
        <div className="w-full md:max-w-4xl flex flex-col sm:flex-row sm:items-end justify-between gap-3 md:gap-4 mb-6 md:mb-10">
          <h2
            id="testimonial-carousel-title"
            className={`text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] leading-[1.15] md:leading-[1.1] text-[#0D212C] tracking-tight ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            What <span className="font-mondwest font-semibold italic">families</span> say
          </h2>

          <div
            id="testimonial-rating"
            className={`flex items-center gap-2 pb-1 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.15s' }}
          >
            <div className="flex items-center gap-1 text-black">
              {[...Array(5)].map((_, i) => (
                <RealisticStarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#0D212C] ml-1">
              Angie Certified 5/5
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          id="testimonial-carousel-container"
          className="w-full md:max-w-4xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Viewport */}
          <div className="relative overflow-hidden min-h-[280px] sm:min-h-[320px] py-2 md:py-4">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={t.id}
                  className="w-full shrink-0 px-1 sm:px-3 flex justify-center"
                >
                  <div
                    id={`testimonial-card-${t.id}`}
                    className={`w-full max-w-[427.5px] bg-white rounded-[28px] sm:rounded-[36px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6 sm:p-8 md:pl-10 md:pr-16 py-6 md:py-8 flex flex-col justify-between border border-slate-100/80 transition-all duration-500 ${
                      idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                    }`}
                  >
                    <div>
                      {/* SVG Quote mark icon */}
                      <div className="mb-3 text-[#0D212C]/20">
                        <svg
                          width="24"
                          height="18"
                          viewBox="0 0 28 22"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.7 0C3.4496 0 0 3.7346 0 8.3444C0 14.608 5.1296 18.72 10.64 21.644L12.32 18.412C8.68 16.324 7.28 14.156 7.28 12.188C8.008 12.44 8.792 12.608 9.632 12.608C13.216 12.608 16.128 9.696 16.128 6.112C16.128 2.528 13.216 0 9.632 0H7.7ZM19.6 0C15.3496 0 11.9 3.7346 11.9 8.3444C11.9 14.608 17.0296 18.72 22.54 21.644L24.22 18.412C20.58 16.324 19.18 14.156 19.18 12.188C19.908 12.44 20.692 12.608 21.532 12.608C25.116 12.608 28.028 9.696 28.028 6.112C28.028 2.528 25.116 0 21.532 0H19.6Z" />
                        </svg>
                      </div>

                      {/* Quote text */}
                      <p
                        id={`testimonial-quote-${t.id}`}
                        className="text-xs sm:text-sm md:text-base text-[#0D212C] leading-relaxed mb-4 md:mb-6 font-normal"
                      >
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Author Row */}
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-sm ring-2 ring-slate-100 shrink-0"
                      />
                      <div className="overflow-hidden">
                        <h4 className="font-semibold text-xs sm:text-sm text-[#051A24] truncate">
                          {t.name}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#273C46] truncate">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls & Pagination */}
          <div className="flex items-center justify-between mt-4 md:mt-6 px-2 sm:px-4">
            <div className="flex gap-1.5 sm:gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  id={`carousel-dot-${i}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-6 sm:w-8 bg-[#051A24]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                id="testimonial-prev-btn"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center text-[#0D212C] hover:bg-slate-100 transition-colors active:scale-95 cursor-pointer"
              >
                <RealisticChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                id="testimonial-next-btn"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center text-[#0D212C] hover:bg-slate-100 transition-colors active:scale-95 cursor-pointer"
              >
                <RealisticChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
