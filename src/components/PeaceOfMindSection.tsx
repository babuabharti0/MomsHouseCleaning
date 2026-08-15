import React from 'react';
import { CheckCircle2, Award, Shield, Trophy, Star } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

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
    icon: Star,
  },
  {
    title: 'Best of Home Advisor 2021 Award',
    year: '2021',
    badge: 'Top Rated',
    icon: Trophy,
  },
  {
    title: 'Best Texas Cleaning Service in 2024',
    year: '2024',
    badge: 'State Winner',
    icon: Award,
  },
  {
    title: 'Best San Antonio Cleaning Service in 2024',
    year: '2024',
    badge: 'City #1',
    icon: Shield,
  },
];

export const PeaceOfMindSection: React.FC = () => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <section
      id="peace-of-mind-section"
      ref={ref}
      className="w-full max-w-[1200px] mx-auto px-6 py-12 md:py-16"
    >
      <div className="flex flex-col mb-10">
        <span
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-xs uppercase tracking-widest text-[#051A24]/60 font-semibold mb-2 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Trust & Credentials
        </span>
        <h2
          id="peace-of-mind-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-mondwest text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0D212C] tracking-tight ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Your Peace of Mind
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Protection Checklist */}
        <div
          id="peace-checklist-container"
          style={{ animationDelay: '0.3s' }}
          className={`lg:col-span-6 bg-slate-50/80 rounded-[32px] p-6 sm:p-8 border border-slate-200/70 flex flex-col justify-between ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div>
            <h3 className="font-mondwest text-2xl font-semibold text-[#051A24] mb-6">
              Full Protection Standards
            </h3>
            <ul className="space-y-4">
              {PEACE_OF_MIND_ITEMS.map((item, index) => (
                <li
                  key={index}
                  id={`peace-item-${index}`}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#051A24] leading-snug"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#051A24] shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-[#273C46]">
            <span>Continuous Compliance</span>
            <span className="text-[#051A24] font-semibold">100% Bonded & Insured</span>
          </div>
        </div>

        {/* Right Column: Awards List */}
        <div
          id="awards-list-container"
          style={{ animationDelay: '0.4s' }}
          className={`lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {AWARDS.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                id={`award-card-${index}`}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-[#051A24]">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#051A24] bg-slate-100 px-2 py-0.5 rounded-full">
                    {award.badge}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#0D212C] leading-snug tracking-tight mb-1">
                    {award.title}
                  </h4>
                  <span className="font-mono text-xs text-[#273C46]/70">
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
