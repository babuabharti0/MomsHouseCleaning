import React from 'react';
import { RealisticCreditCardIcon, RealisticGiftIcon, RealisticBadgeCheckIcon } from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const PaymentTermsStrip: React.FC = () => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <div
      id="payment-terms-strip"
      ref={ref}
      className={`w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto py-6 border-t border-slate-200/70 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-center text-center md:text-left">
        {/* Item 1: Payment methods */}
        <div className="flex items-center justify-center md:justify-start gap-2.5 text-xs sm:text-sm text-[#051A24] font-medium">
          <span className="p-1.5 rounded-full bg-slate-100 shrink-0">
            <RealisticCreditCardIcon className="w-4 h-4" />
          </span>
          <span>
            We accept: <span className="font-semibold">PayPal, Zelle, Venmo, and CashApp.</span>
          </span>
        </div>

        {/* Item 2: Gift certificates */}
        <div className="flex items-center justify-center md:justify-start gap-2.5 text-xs sm:text-sm text-[#273C46]">
          <span className="p-1.5 rounded-full bg-amber-50 shrink-0">
            <RealisticGiftIcon className="w-4 h-4" />
          </span>
          <span>
            Gift Certificates Available upon Request. <span className="text-xs text-[#273C46]/70 font-mono">(Only valid for one year.)</span>
          </span>
        </div>

        {/* Item 3: Price beat guarantee */}
        <div className="flex items-center justify-center md:justify-start gap-2.5 text-xs sm:text-sm text-[#051A24] font-semibold">
          <span className="p-1.5 rounded-full bg-emerald-50 shrink-0">
            <RealisticBadgeCheckIcon className="w-4 h-4" />
          </span>
          <span>
            We will beat any insured and bonded competitor's price.
          </span>
        </div>
      </div>
    </div>
  );
};
