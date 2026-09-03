import React from 'react';
import {
  RealisticCheckIcon,
  RealisticArrowLeftIcon,
  RealisticSparklesIcon,
} from '../components/RealisticIcons';
import { Button } from '../components/Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Footer } from '../components/Footer';
import { CopyrightBar } from '../components/CopyrightBar';
import { BottomNav } from '../components/BottomNav';
import { ServiceSearch } from '../components/ServiceSearch';

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'initial-cleaning',
    title: 'Initial Deep Clean',
    description: 'Top-to-bottom detail cleaning for a spotless home.',
    items: [
      'Complete bathroom scrubbing, tile disinfection, and toilet sanitization.',
      'Kitchen countertops, sink, stovetop, and exterior appliance cleaning.',
      'Hand-wiping of all baseboards, window blinds, and sills.',
      'High-dusting of ceiling fans, vents, and light fixtures.',
      'Full-home floor vacuuming, hard-surface mopping, and wood polishing.',
    ],
  },
  {
    id: 'weekly-cleaning',
    title: 'Recurring Maintenance',
    description: 'Regular housekeeping to keep your home consistently fresh.',
    items: [
      'Weekly, bi-weekly, or monthly customized schedules.',
      'Sanitizing high-touch surfaces, doorknobs, and light switches.',
      'Disinfecting all bathroom and kitchen surfaces.',
      'Dusting furniture and complete floor vacuuming and mopping.',
      'Trash removal and maintaining your deep clean baseline.',
    ],
  },
  {
    id: 'maid-services',
    title: 'Maid Services',
    description: 'Custom daily chores, laundry, dishes, and housekeeping help.',
    items: [
      'Washing dishes, sink clearing, and unloading the dishwasher.',
      'Washing, drying, and folding household towels and linens.',
      'Changing bed sheets and making fresh beds.',
      'Tidying living areas, toys, and room decluttering.',
      'Light organizing tailored to your family routines.',
    ],
  },
  {
    id: 'move-outs',
    title: 'Move Outs & Make Readies',
    description: 'Complete move-in and move-out turnaround cleaning service.',
    items: [
      'Inside and outside of all kitchen cabinets and drawers.',
      'Deep sanitizing of all bathrooms, tubs, and vanities.',
      'Cleaning inside closets, pantries, and storage shelving.',
      'Hand-wiping baseboards, doors, frames, and blinds.',
      'Behind appliances and full floor deep cleaning.',
    ],
  },
  {
    id: 'short-term-rentals',
    title: 'Short Term Rentals & Airbnb',
    description: 'Turnkey turnover cleaning and restocking for Airbnb hosts.',
    items: [
      'Rapid turnover sanitization between guest stays.',
      'Launder linens, wash towels, and remake beds.',
      'Restocking toiletries, paper towels, and essentials.',
      'Washing dishes and sanitizing kitchen appliances.',
      'Inspecting and reporting any property damage.',
    ],
  },
  {
    id: 'extra-services',
    title: 'Extra & Additional Services',
    description: 'Targeted add-on services customized to your exact needs.',
    items: [
      'Deep interior cleaning for refrigerators and ovens.',
      'Interior window washing, tracks, and sliding glass doors.',
      'Detailed hand-sponge washing for window blinds.',
      'Sweeping garages, front porches, and back patios.',
      'Water heater closet dusting and under-furniture vacuuming.',
    ],
  },
  {
    id: 'yard-care',
    title: 'Yard Care',
    description: 'Lawn mowing, edging, and outdoor debris yard cleanup.',
    items: [
      'Precision lawn mowing and curb edging.',
      'Blowing driveways, walkways, decks, and patios.',
      'Seasonal leaf blowing and debris collection.',
      'Clearing fallen branches and lawn clutter.',
      'Weeding flowerbed perimeters upon request.',
    ],
  },
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    description: 'Deep steam extraction to restore and revitalize carpets.',
    items: [
      'Commercial hot water steam fiber extraction.',
      'Pre-treatment for high-traffic walkways and hallways.',
      'Pet stain and odor neutralizing enzyme treatments.',
      'Safe cleaning for delicate area rugs and synthetics.',
      'Fast-drying finish with zero sticky residue.',
    ],
  },
];

interface ServiceBlockProps {
  service: ServiceCategory;
  index: number;
  onOpenEstimate: (serviceTitle?: string) => void;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ service, index, onOpenEstimate }) => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <div
      ref={ref}
      id={`service-card-${service.id}`}
      style={{ animationDelay: `${(index % 2) * 0.1}s` }}
      className={`bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between will-change-transform ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div>
        {/* Card Header Tag */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            0{index + 1}
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            San Antonio, TX
          </span>
        </div>

        {/* Title */}
        <h2
          id={`service-title-${service.id}`}
          className="font-heading text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-2"
        >
          {service.title}
        </h2>

        {/* Description: 6-10 words, high contrast text-slate-800, text-base md:text-lg, leading-relaxed */}
        <p
          id={`service-desc-${service.id}`}
          className="text-base md:text-lg text-slate-800 leading-relaxed font-normal mb-6"
        >
          {service.description}
        </p>

        {/* Essential Bullet Highlights */}
        <div className="space-y-3 pt-4 border-t border-slate-100 mb-6">
          {service.items.map((item, itemIdx) => (
            <div
              key={itemIdx}
              id={`service-item-${service.id}-${itemIdx}`}
              className="flex items-start gap-3"
            >
              <span className="p-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0 mt-1">
                <RealisticCheckIcon className="w-3.5 h-3.5" />
              </span>
              <p className="text-sm md:text-base text-slate-800 leading-relaxed font-normal">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
        <button
          id={`btn-estimate-${service.id}`}
          type="button"
          onClick={() => onOpenEstimate(service.title)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#051A24] text-white hover:bg-slate-800 text-sm font-medium transition-all cursor-pointer shadow-sm active:scale-[0.98]"
        >
          <span>Get Free Estimate</span>
          <RealisticSparklesIcon className="w-4 h-4 text-emerald-300" />
        </button>
      </div>
    </div>
  );
};

interface ServicesPageProps {
  onNavigateHome: () => void;
  onOpenEstimate: (serviceTitle?: string) => void;
  onOpenAbout?: () => void;
  onOpenPhotos?: () => void;
  onOpenTestimonials?: () => void;
  onOpenPayment?: () => void;
  onOpenContact?: () => void;
}

export const Services: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onOpenEstimate,
  onOpenAbout = () => {},
  onOpenPhotos = () => {},
  onOpenTestimonials = () => {},
  onOpenPayment = () => {},
  onOpenContact = () => {},
}) => {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation(0.05);

  const handleCallOrText = () => {
    window.open('tel:2103808066', '_self');
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F9FF] text-[#051A24] flex flex-col items-center relative overflow-x-hidden selection:bg-[#051A24] selection:text-white">
      {/* Breadcrumb / Back Navigation Bar */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto pt-6 pb-2 flex items-center justify-between">
        <button
          id="btn-services-back-home"
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider text-[#051A24]/80 hover:text-[#051A24] transition-colors cursor-pointer py-1.5 px-3 rounded-full bg-slate-100/80 hover:bg-slate-200/80"
        >
          <RealisticArrowLeftIcon className="w-4 h-4" />
          <span>Home / Comprehensive Services</span>
        </button>

        <span className="text-xs font-mono text-[#051A24]/60 uppercase tracking-widest hidden sm:inline-block">
          San Antonio, TX
        </span>
      </div>

      {/* Hero Section (Minimalist) */}
      <section
        ref={heroRef}
        id="services-hero-section"
        className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto flex flex-col items-center text-center"
      >
        {/* Tagline */}
        <p
          id="services-hero-tagline"
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-sm text-[#051A24] uppercase tracking-widest font-medium mb-3 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Mom's House Cleaning
        </p>

        {/* Heading: Comprehensive Cleaning Solutions */}
        <h1
          id="services-hero-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-heading text-[38px] sm:text-[64px] md:text-[80px] leading-tight text-[#0D212C] font-semibold tracking-tight max-w-4xl mb-8 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Comprehensive <span className="block sm:inline">Cleaning Solutions.</span>
        </h1>

        {/* Button: Get a Free Estimate */}
        <div
          id="services-hero-btn-container"
          style={{ animationDelay: '0.3s' }}
          className={`will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <Button
            id="btn-services-hero-estimate"
            variant="primary"
            size="lg"
            onClick={() => onOpenEstimate('Comprehensive Services')}
            className="shadow-md"
          >
            Get a Free Estimate
          </Button>
        </div>
      </section>

      {/* Interactive Hybrid Service Search & Filtering Engine */}
      <ServiceSearch onOpenEstimate={onOpenEstimate} />

      {/* Services List Section (Clean Minimalist 2-Column Grid) */}
      <section
        id="services-list-container"
        className="w-full max-w-7xl py-8 px-4 md:py-20 md:px-12 mx-auto"
      >
        <div className="mb-8 md:mb-12 text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight mb-2">
            Essential Service Menu
          </h2>
          <p className="text-base md:text-lg text-slate-800 leading-relaxed font-normal">
            Transparent, professional cleaning solutions tailored to your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {servicesData.map((service, index) => (
            <ServiceBlock
              key={service.id}
              service={service}
              index={index}
              onOpenEstimate={onOpenEstimate}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenEstimate={() => onOpenEstimate('General Inquiries')}
        onOpenServices={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAbout={onOpenAbout}
        onOpenPhotos={onOpenPhotos}
        onOpenTestimonials={onOpenTestimonials}
        onOpenPayment={onOpenPayment}
        onOpenContact={onOpenContact}
      />

      {/* Copyright Bar */}
      <CopyrightBar />

      {/* Fixed Bottom Nav */}
      <BottomNav onCallOrText={handleCallOrText} />
    </div>
  );
};
