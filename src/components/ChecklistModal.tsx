import React from 'react';
import { RealisticXIcon, RealisticCheckCircle2Icon, RealisticShieldCheckIcon } from './RealisticIcons';
import { Button } from './Button';

interface ChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEstimate: () => void;
}

const CHECKLIST_CATEGORIES = [
  {
    title: 'Kitchen & Dining Area',
    items: [
      'Stovetop, burners, and range hood grease degreasing',
      'Exterior & top of refrigerator, oven, and dishwasher',
      'Interior and exterior microwave sanitization',
      'Countertop detail cleaning and backsplash descaling',
      'Sinks scrubbed, sanitized, and chrome fixtures polished',
      'Cabinet exteriors washed and knobs polished',
      'Trash emptied and trash can sanitized',
      'Floors vacuumed and thoroughly wet mopped',
    ],
  },
  {
    title: 'Bathrooms (Complete Sanitization)',
    items: [
      'Tile grout, showers, and bathtubs deep scrubbed for hard water',
      'Toilets sanitized thoroughly inside, behind base, and exterior',
      'Vanity countertops, sinks, and mirrors streak-free polished',
      'Exhaust fan vents dusted and cleared',
      'Cabinet fronts and under-sink exterior wiped down',
      'Chrome fixtures descaled and shined',
      'Floors hand-washed and sanitized',
    ],
  },
  {
    title: 'Living Rooms & Bedrooms',
    items: [
      'Ceiling fans and light fixtures hand-wiped',
      'Baseboards, crown molding, and door frames hand-dusted',
      'Window sills, blinds, and tracks dusted and detailed',
      'All accessible furniture surfaces and electronics dusted',
      'Beds made with neat hospital corners (fresh linens if left out)',
      'HEPA-filter deep vacuuming of carpets, rugs, and stairs',
      'Hardwood and tile floors detailed and mopped',
    ],
  },
  {
    title: 'Deep Clean Exclusive Details',
    items: [
      'Inside oven cleaning (available upon request)',
      'Inside refrigerator deep scrub (available upon request)',
      'Interior window glass and slider tracks',
      'Switch plates, outlet covers, and door handles sanitized',
      'Pet hair eradication with specialized rubber brushes',
    ],
  },
];

export const ChecklistModal: React.FC<ChecklistModalProps> = ({
  isOpen,
  onClose,
  onOpenEstimate,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-[#051A24]/70 backdrop-blur-sm animate-fade-in-up overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-lenis-prevent="true"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-[20px] md:rounded-[24px] shadow-2xl p-4 sm:p-5 md:p-6 my-auto max-h-[82vh] overflow-y-auto border border-slate-200/80 overscroll-contain"
        role="dialog"
        aria-modal="true"
        data-lenis-prevent="true"
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#051A24] transition-colors cursor-pointer z-10"
          aria-label="Close checklist"
        >
          <RealisticXIcon className="w-4 h-4" />
        </button>

        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-0.5 text-[11px] uppercase font-mono tracking-widest text-emerald-700 font-semibold">
            <RealisticShieldCheckIcon className="w-4 h-4" />
            <span>Mom's 50-Point Standard</span>
          </div>
          <h2 className="font-mondwest text-xl md:text-2xl font-semibold text-[#0D212C] tracking-tight">
            Initial Deep Clean Master Checklist
          </h2>
          <p className="text-[11px] sm:text-xs text-[#273C46] mt-0.5">
            Our systematic process leaves no corner untouched in your San Antonio home.
          </p>
        </div>

        <div className="space-y-6">
          {CHECKLIST_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/60">
              <h3 className="font-mondwest text-lg font-semibold text-[#051A24] mb-3 border-b border-slate-200 pb-1.5">
                {cat.title}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#273C46]">
                    <RealisticCheckCircle2Icon className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#273C46] font-mono">
            Family-Owned • Fully Bonded & Insured
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onOpenEstimate();
              }}
              className="w-full sm:w-auto"
            >
              Book This Deep Clean
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
