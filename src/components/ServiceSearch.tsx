import React, { useState, useMemo } from 'react';
import {
  RealisticSearchIcon,
  RealisticSparklesIcon,
  RealisticCheckCircle2Icon,
  RealisticCheckIcon,
  RealisticXIcon,
} from './RealisticIcons';

export interface ServiceItem {
  id: number;
  name: string;
  category: 'Packages' | 'Add-ons' | 'Detailing' | 'Maid' | 'Rentals';
  description: string;
  features?: string[];
  tag?: string;
  popular?: boolean;
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 1,
    name: 'Initial Deep Top-to-Bottom Clean',
    category: 'Packages',
    description: 'Comprehensive whole-home reset. Complete scrubbing, sanitizing, high-dusting, and surface polishing.',
    features: ['Bathrooms & Kitchen Deep Scrub', 'All Baseboards & Vents', 'Ceiling Fans & Blinds Hand Polish'],
    tag: 'Baseline Favorite',
    popular: true,
  },
  {
    id: 2,
    name: 'Move-In / Move-Out Turnkey Clean',
    category: 'Packages',
    description: 'Specialized property transition service for landlords, realtors, and tenants needing deposit returns.',
    features: ['Inside Cabinets & Drawers', 'Behind Appliances (on request)', 'Closets, Pantry & Light Fixtures'],
    tag: 'Realtor Standard',
    popular: true,
  },
  {
    id: 3,
    name: 'Weekly & Bi-Weekly Maintenance',
    category: 'Packages',
    description: 'Recurring upkeep to maintain your pristine deep-clean standard on an effortless schedule.',
    features: ['High-Touch Disinfection', 'Floor Mopping & Vacuuming', 'Linens & Surface Maintenance'],
    tag: 'Recurring Plan',
  },
  {
    id: 4,
    name: 'Short-Term Rental & Airbnb Turnover',
    category: 'Rentals',
    description: 'Turnkey sanitization, supply restocking, linen turnover, and damage inspection for 5-star host reviews.',
    features: ['Linen Washing & Fresh Bedding', 'Restock Toiletries & Paper Goods', 'Damage & Condition Reporting'],
    tag: 'Host Turnaround',
    popular: true,
  },
  {
    id: 5,
    name: 'Refrigerator Interior Deep Scrub',
    category: 'Add-ons',
    description: 'Complete removal of shelves, disinfecting spillages, wiping seals, and deodorizing refrigerator and freezer.',
    features: ['Shelf & Bin Removal', 'Food-Safe Sanitizer', 'Odor Neutralization'],
  },
  {
    id: 6,
    name: 'Oven Interior Scrub & Degrease',
    category: 'Add-ons',
    description: 'Heavy-duty removal of baked-on grease, grime, rack soaking, and glass door clarity treatment.',
    features: ['Rack Soak & Scrub', 'Baked-On Residue Melt', 'Streak-Free Glass Polish'],
  },
  {
    id: 7,
    name: 'Window Washing (Interior & Sliding Glass)',
    category: 'Detailing',
    description: 'Crystal-clear, streak-free window cleaning including sills, lock tracks, and sliding patio doors.',
    features: ['Interior Window Panes', 'Tracks & Sill Detailing', 'Patio Glass Sliders'],
    popular: true,
  },
  {
    id: 8,
    name: 'Hand Washing of Window Blinds',
    category: 'Detailing',
    description: 'Individual slat hand-sponge treatment with specialized microfiber detailing towels.',
    features: ['Slat-by-Slat Sponge Wash', 'Dust & Pet Dander Removal', 'Damp Towel Finish'],
  },
  {
    id: 9,
    name: 'Hand Scrubbing of Baseboards',
    category: 'Detailing',
    description: 'Detailed on-hands-and-knees wipe down of all baseboard perimeters with warm microfiber suds.',
    features: ['Scuff Mark Removal', 'Corner Crevice Cleaning', 'Trim Ledge Dusting'],
  },
  {
    id: 10,
    name: 'Inside Cupboards, Cabinets & Drawers',
    category: 'Add-ons',
    description: 'Vacuuming crumbs, damp-wiping all interior shelving, drawer tracks, and surface polishing.',
    features: ['Pantry & Kitchen Shelves', 'Bathroom Vanity Drawers', 'Closet Storage Units'],
  },
  {
    id: 11,
    name: 'Maid Service: Dishes & Dishwasher Cycle',
    category: 'Maid',
    description: 'Washing sink dishes, clearing cookware, loading, and emptying the dishwasher.',
    features: ['Sink Clearing', 'Dishwasher Cycle & Unload', 'Counter Sanitizing'],
  },
  {
    id: 12,
    name: 'Maid Service: Laundry, Linens & Bed Making',
    category: 'Maid',
    description: 'Washing, drying, folding household towels/linens, and dressing beds with fresh sheets.',
    features: ['Bed Linens Changed', 'Towels Washed & Folded', 'Hospital Corners Tucked'],
  },
  {
    id: 13,
    name: 'Maid Service: Tidying & Room Organizing',
    category: 'Maid',
    description: 'Straightening clutter, organizing toys/clothing, and returning order to active family living spaces.',
    features: ['Floor Item Pick-Up', 'Living Room Straighten-Up', 'Desk & Table Declutter'],
  },
  {
    id: 14,
    name: 'Garage & Porch Sweep-Out',
    category: 'Detailing',
    description: 'Blowing, sweeping, and cobweb removal across front entryways, back patios, and garage floors.',
    features: ['Front Porch & Entry Sweep', 'Back Patio Cleaning', 'Cobwebs Cleared from Eaves'],
  },
  {
    id: 15,
    name: 'Water Heater & AC Closet Dusting',
    category: 'Detailing',
    description: 'Clearing lint, cobwebs, and heavy dust accumulators from utility closets and mechanical rooms.',
    features: ['Louvered Door Panels', 'Utility Floor Vacuum', 'Exterior Tank Wipe'],
  },
  {
    id: 16,
    name: 'Furniture Moving & Under-Couch Cleaning',
    category: 'Add-ons',
    description: 'Carefully sliding sofas, credenzas, and bed frames to vacuum hidden dust bunnies and lost items.',
    features: ['Under-Couch Vacuum', 'Heavy Furniture Clearance', 'Hard Surface Mopping'],
  },
];

export const CATEGORIES = ['All', 'Packages', 'Add-ons', 'Detailing', 'Maid', 'Rentals'] as const;
export type CategoryFilter = (typeof CATEGORIES)[number];

interface ServiceSearchProps {
  onOpenEstimate?: (serviceName?: string) => void;
}

export const ServiceSearch: React.FC<ServiceSearchProps> = ({ onOpenEstimate }) => {
  const [query, setQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  // Fast memoized fuzzy filter engine
  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return ALL_SERVICES.filter((service) => {
      const matchesSearch =
        normalizedQuery === '' ||
        service.name.toLowerCase().includes(normalizedQuery) ||
        service.description.toLowerCase().includes(normalizedQuery) ||
        service.category.toLowerCase().includes(normalizedQuery) ||
        service.features?.some((f) => f.toLowerCase().includes(normalizedQuery));

      const matchesCategory =
        activeCategory === 'All' || service.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [query, activeCategory]);

  const handleClear = () => {
    setQuery('');
  };

  return (
    <section
      id="service-search-section"
      className="w-full max-w-7xl mx-auto py-8 px-4 md:py-24 md:px-12 flex flex-col items-center gap-6 md:gap-8"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 mb-3 shadow-sm">
          <RealisticSparklesIcon className="w-4 h-4" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#051A24] font-semibold">
            Interactive Catalog Explorer
          </span>
        </div>
        <h2
          id="service-search-heading"
          className="font-mondwest text-3xl sm:text-4xl md:text-5xl text-[#051A24] font-semibold tracking-tight mb-2"
        >
          Find the exact service you need
        </h2>
        <p className="text-sm sm:text-base text-[#273C46] font-normal leading-relaxed">
          Type any item or click a category pill below to explore our San Antonio residential & rental services.
        </p>
      </div>

      {/* SEARCH CONSOLE (GLASSMORPHIC) */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none z-10">
          <RealisticSearchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <input
          id="service-search-input"
          type="text"
          placeholder="Search services (e.g., 'Oven', 'Blinds', 'Baseboards', 'Airbnb')..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 sm:pl-14 pr-12 py-3.5 sm:py-4 bg-white/90 backdrop-blur-md border-2 border-[#0D212C]/10 rounded-full font-sans text-base sm:text-lg text-[#051A24] placeholder:text-slate-400 focus:outline-none focus:border-[#051A24] focus:ring-4 focus:ring-[#051A24]/10 shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search text"
            className="absolute inset-y-0 right-0 pr-4 sm:pr-5 flex items-center cursor-pointer text-slate-400 hover:text-[#051A24] transition-colors"
          >
            <span className="p-1 rounded-full hover:bg-slate-100">
              <RealisticXIcon className="w-4 h-4" />
            </span>
          </button>
        )}
      </div>

      {/* ZERO-FRICTION FILTER PILLS */}
      <div
        id="service-category-pills"
        className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 w-full max-w-4xl"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          const count =
            cat === 'All'
              ? ALL_SERVICES.length
              : ALL_SERVICES.filter((s) => s.category === cat).length;

          return (
            <button
              key={cat}
              id={`filter-pill-${cat.toLowerCase()}`}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 md:px-5 md:py-2 rounded-full font-medium text-xs md:text-sm transition-all duration-200 cursor-pointer select-none ${
                isActive
                  ? 'bg-[#051A24] text-white shadow-md scale-105 ring-2 ring-[#051A24]/20'
                  : 'bg-white text-[#273C46] border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* RESULTS COUNT & STATUS */}
      <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#273C46]/80 pt-2 border-b border-slate-200/60 pb-3">
        <span>
          Showing <strong>{filteredServices.length}</strong> {filteredServices.length === 1 ? 'service' : 'services'}
          {activeCategory !== 'All' && ` in ${activeCategory}`}
          {query && ` matching "${query}"`}
        </span>
        {(query || activeCategory !== 'All') && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setActiveCategory('All');
            }}
            className="text-[#051A24] hover:underline font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* RENDERED GRID */}
      <div
        id="service-search-results-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full"
      >
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-search-card-${service.id}`}
              className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100/90 hover:shadow-[0_10px_30px_rgba(5,26,36,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Category Badge & Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#051A24] border border-slate-200/80">
                    {service.category}
                  </span>

                  {service.tag && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                      <RealisticSparklesIcon className="w-3 h-3" />
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-mondwest text-xl sm:text-2xl text-[#051A24] font-semibold tracking-tight mb-2.5 group-hover:text-[#051A24]">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#273C46] leading-relaxed font-normal mb-4">
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                {service.features && service.features.length > 0 && (
                  <div className="flex flex-col gap-1.5 mb-5 pt-3 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#051A24]">
                        <span className="flex-shrink-0">
                          <RealisticCheckIcon className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenEstimate?.(service.name)}
                  className="w-full py-2.5 px-4 rounded-full bg-slate-100 text-[#051A24] hover:bg-[#051A24] hover:text-white transition-all font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <RealisticCheckCircle2Icon className="w-4 h-4" />
                  <span>Request Estimate for This</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-slate-200 shadow-sm flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3 text-slate-400">
              <RealisticSearchIcon className="w-6 h-6" />
            </div>
            <h4 className="font-mondwest text-2xl text-[#051A24] font-semibold mb-1">
              No matching services found
            </h4>
            <p className="font-sans text-sm text-[#273C46] max-w-md mb-4">
              We couldn't find anything matching "<span className="font-semibold text-[#051A24]">{query}</span>" in{' '}
              {activeCategory === 'All' ? 'any category' : activeCategory}.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setActiveCategory('All');
              }}
              className="px-5 py-2 rounded-full bg-[#051A24] text-white text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Show All Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
