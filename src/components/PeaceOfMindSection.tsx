import React from 'react';
import {
  RealisticCheckCircle2Icon,
  RealisticAwardIcon,
  RealisticTrophyIcon,
  RealisticStarIcon,
  RealisticShieldIcon,
} from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import logo01 from '../images/logo01.webp';
import logo02 from '../images/logo02.webp';
import logo03 from '../images/logo03.webp';
import logo04 from '../images/logo04.webp';

const PEACE_OF_MIND_ITEMS = [
  'We are Insured and Bonded for YOUR PROTECTION.',
  'We are registered with Bexar Country (D.B.A.)',
  'We are Angie certified.',
  'References Available Upon Request.',
];

const AWARDS = [
  {
    title: "Angie's List 2019 Super Service Award",
    year: '2019',
    badge: 'Super Service',
    icon: RealisticStarIcon,
    image: logo01,
  },
  {
    title: 'Best of Home Advisor 2021 Award',
    year: '2021',
    badge: 'Top Rated',
    icon: RealisticTrophyIcon,
    image: logo02,
  },
  {
    title: 'Best Texas Cleaning Service in 2024',
    year: '2024',
    badge: 'State Winner',
    icon: RealisticAwardIcon,
    image: logo03,
  },
  {
    title: 'Best San Antonio Cleaning Service in 2024',
    year: '2024',
    badge: 'City #1',
    icon: RealisticShieldIcon,
    image: logo04,
  },
];

export const PeaceOfMindSection: React.FC = () => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <section
      id="peace-of-mind-section"
      ref={ref}
      className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto"
    >
      <div className="flex flex-col mb-6 md:mb-10">
        <span
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-xs uppercase tracking-widest text-[#051A24]/60 font-semibold mb-1.5 md:mb-2 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Trust & Credentials
        </span>
        <h2
          id="peace-of-mind-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-mondwest text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0D212C] tracking-tight ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Your Peace of Mind
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Protection Checklist */}
        <div
          id="peace-checklist-container"
          style={{ animationDelay: '0.3s' }}
          className={`lg:col-span-6 bg-slate-50/80 rounded-[24px] sm:rounded-[36px] md:rounded-[40px] p-5 sm:p-8 border border-slate-200/70 flex flex-col justify-between ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div>
            <h3 className="font-mondwest text-xl sm:text-2xl font-semibold text-[#051A24] mb-4 md:mb-6">
              Full Protection Standards
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {PEACE_OF_MIND_ITEMS.map((item, index) => (
                <li
                  key={index}
                  id={`peace-item-${index}`}
                  className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base text-[#051A24] leading-snug"
                >
                  <RealisticCheckCircle2Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 md:mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#273C46]">
            <span>Continuous Compliance</span>
            <span className="text-[#051A24] font-semibold">100% Bonded & Insured</span>
          </div>
        </div>

        {/* Right Column: Awards List */}
        <div
          id="awards-list-container"
          style={{ animationDelay: '0.4s' }}
          className={`lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {AWARDS.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                id={`award-card-${index}`}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  {award.image ? (
                    <div className="w-[120px] sm:w-[150px] md:w-[180px] h-[100px] sm:h-[130px] md:h-[150px] p-2 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="w-[120px] sm:w-[150px] md:w-[180px] h-[100px] sm:h-[130px] md:h-[150px] p-4 rounded-2xl bg-slate-100 text-[#051A24] flex items-center justify-center shrink-0">
                      <IconComponent className="w-12 h-12" />
                    </div>
                  )}
                  <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#051A24] bg-slate-100 px-2 py-0.5 rounded-full">
                    {award.badge}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm md:text-base text-[#0D212C] leading-snug tracking-tight mb-1">
                    {award.title}
                  </h4>
                  <span className="font-mono text-[10px] sm:text-xs text-[#273C46]/70">
                    Recognized Excellence
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
