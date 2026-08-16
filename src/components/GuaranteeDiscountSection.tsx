import React from 'react';
import { RealisticHeartHandshakeIcon, RealisticShieldCheckIcon } from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

interface GuaranteeDiscountSectionProps {
  onOpenEstimate: (service?: string) => void;
}

export const GuaranteeDiscountSection: React.FC<GuaranteeDiscountSectionProps> = ({
  onOpenEstimate,
}) => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <section
      id="guarantee-discount-section"
      ref={ref}
      className="w-full py-8 px-4 md:py-24 md:px-12"
    >
      <div className="w-full mx-auto flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Card 1: Dark (#051A24 bg) - Our Guarantee */}
          <div
            id="card-our-guarantee"
            style={{ animationDelay: '0.1s' }}
            className={`bg-[#051A24] rounded-[24px] sm:rounded-[36px] md:rounded-[40px] p-5 sm:p-8 md:pl-10 md:pr-16 md:pt-6 md:pb-10 flex flex-col justify-between text-[#F6FCFF] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),0_10px_30px_-10px_rgba(5,26,36,0.5)] transition-transform duration-300 md:hover:-translate-y-1 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="h-6 mb-3 md:mb-4 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-xs uppercase tracking-widest text-[#E0EBF0]/70 ml-2 font-mono flex items-center gap-1.5">
                  <RealisticShieldCheckIcon className="w-4 h-4" />
                  Satisfaction Assured
                </span>
              </div>

              {/* Title */}
              <h3
                id="guarantee-card-title"
                className="font-mondwest text-xl sm:text-2xl md:text-3xl font-semibold text-[#F6FCFF] tracking-tight mb-2 md:mb-4"
              >
                Our Guarantee
              </h3>

              {/* Description */}
              <p
                id="guarantee-card-text"
                className="text-xs sm:text-sm md:text-base text-[#E0EBF0]/90 leading-relaxed mb-4 md:mb-6 font-normal"
              >
                We are not happy unless you are happy! We will fix or redo anything that is missed or needs to be redone within a 24-hour notice unless the job was checked and approved prior to the cleaning person leaving the job. No refunds!
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#E0EBF0]/70">
                24-Hour Redo Policy
              </span>
              <Button
                id="btn-guarantee-estimate"
                variant="primary"
                size="sm"
                onClick={() => onOpenEstimate('Guarantee Assurance')}
                className="bg-white !text-[#051A24] hover:!bg-[#F6FCFF] shadow-md border-t-0 w-full sm:w-auto text-center justify-center"
              >
                Get Protected Clean
              </Button>
            </div>
          </div>

          {/* Card 2: Light (white bg) - Special Discount! */}
          <div
            id="card-special-discount"
            style={{ animationDelay: '0.2s' }}
            className={`bg-white rounded-[24px] sm:rounded-[36px] md:rounded-[40px] p-5 sm:p-8 md:pl-10 md:pr-16 md:pt-6 md:pb-10 flex flex-col justify-between text-[#0D212C] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-300 md:hover:-translate-y-1 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="h-6 mb-3 md:mb-4 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="text-xs uppercase tracking-widest text-[#273C46]/70 ml-2 font-mono flex items-center gap-1.5">
                  <RealisticHeartHandshakeIcon className="w-4 h-4" />
                  Community Appreciation
                </span>
              </div>

              {/* Title */}
              <h3
                id="discount-card-title"
                className="font-mondwest text-xl sm:text-2xl md:text-3xl font-semibold text-[#0D212C] tracking-tight mb-2 md:mb-4"
              >
                Special Discount!
              </h3>

              {/* Description */}
              <p
                id="discount-card-text"
                className="text-xs sm:text-sm md:text-base text-[#273C46] leading-relaxed mb-4 md:mb-6 font-normal"
              >
                A discount is offered to active duty Military, Veterans, Senior Citizens, Police, Fire Department, and Paramedics upon request.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#273C46]/70">
                Honoring Heroes & Seniors
              </span>
              <Button
                id="btn-claim-discount"
                variant="tertiary"
                size="sm"
                onClick={() => onOpenEstimate('Hero / Senior Discount')}
                className="w-full sm:w-auto text-center justify-center"
              >
                Claim Discount
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
