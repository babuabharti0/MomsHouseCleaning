import React from 'react';
import { Check, ArrowLeft, PhoneCall, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Footer } from '../components/Footer';
import { CopyrightBar } from '../components/CopyrightBar';
import { BottomNav } from '../components/BottomNav';

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'initial-cleaning',
    title: 'Initial Cleaning',
    description:
      'Keep up and maintain everything under Initial Cleaning. Everything listed will not have to be done at every weekly or bi-weekly cleaning. Maintain as needed.',
    items: [
      'Bathrooms: clean and disinfect (tub/shower, sink, countertop, toilet). Clean outside cupboards and drawers if needed. Clean bottom and base of toilet including floor.',
      'Kitchen: clean and disinfect (sink and countertop). Clean or polish outside of cupboards and drawers if needed. Clean stove top including drip pans; lift top of stove top and clean if possible. Clean outside of all appliances (refrigerator including top, oven, microwave and dishwasher). Clean inside microwave. Clean outside of appliances and items on countertop.',
      'Clean all mirrors throughout home.',
      'Clean all vents throughout home.',
      'Cobwebs removed throughout home.',
      'Dust all furniture (with polish if needed). Dust picture frames, ceiling fans including lighting fixtures, windowsills and frame of window where lock is. Dust door frames and ledges.',
      'Vacuum furniture (if requested).',
      'Vacuum or sweep all floors (including stairs). Mop tile or linoleum floors. Polish wood or laminate floors.',
      'Clean all baseboards (by hand with damp cloth or damp sponge if requested).',
      'Clean blinds with a duster (by hand with a sponge or damp towel if requested).',
      'Clean glass sliding patio doors and glass front door if requested.',
      'Clean light switches and doorknobs.',
      'Clean inside closets and pantry including shelves.',
      'Empty trash cans.',
      'Dust door panels if needed. Washing with a wet towel or sponge if requested.',
      'Cleaning of water heater and A/C closet if requested.',
    ],
  },
  {
    id: 'weekly-cleaning',
    title: 'Weekly, Bi-weekly and Monthly Cleanings',
    description: 'Ongoing maintenance of your initial deep clean baseline.',
    items: [
      'Keep up and maintain everything under “Initial Cleaning”.',
      'Everything listed will not have to be done at every weekly or bi-weekly cleaning.',
      'Maintain as needed.',
    ],
  },
  {
    id: 'maid-services',
    title: 'Maid Services',
    description: 'Our MAID SERVICES include (upon request) but are not limited to:',
    items: [
      'Dishes.',
      'Laundry (linens).',
      'Changing sheets.',
      'Making beds.',
      'Straightening up (organizing).',
      'Vacuum furniture.',
    ],
  },
  {
    id: 'move-outs',
    title: 'Move Outs, Clean Outs, Make Readies',
    description: 'Intensive deep cleaning designed for property transitions.',
    items: [
      'Clean and disinfect bathrooms: clean outside drawers and cabinets (inside if requested).',
      'Clean and disinfect kitchen: clean outside drawers and cabinets (inside if requested), clean outside and top of refrigerator (inside if requested), outside dishwasher and oven (inside if requested). Clean behind refrigerator and washer/dryer if requested.',
      'Sweep, mop, and/or vacuum all floors, including stairs.',
      'Clean baseboards (by hand with damp cloth or sponge if requested).',
      'Clean windowsills and top of window frames where the lock is.',
      'Clean blinds with a duster (by hand with a sponge or damp towel if requested).',
      'Clean door frames, light switches, and doorknobs.',
      'Clean all light fixtures (by hand with sponge or damp towel if requested).',
      'Clean ceiling fans including light fixtures (by hand with sponge or damp towel if requested).',
      'Clean all mirrors.',
      'Clean all vents throughout home.',
      'Cobwebs removed throughout home.',
      'Clean inside closets and pantry including shelves.',
      'Clean glass sliding patio doors and glass front door if requested.',
      'Empty trash cans.',
      'Dust door panels if needed. Washing with a wet towel or sponge if requested.',
      'Cleaning of water heater and A/C closet if requested.',
    ],
  },
  {
    id: 'short-term-rentals',
    title: 'Short Term Rentals / Bed and Breakfast Cleanings',
    description: 'Turnkey cleaning and restocking for hospitality properties.',
    items: [
      'Bathrooms: clean and disinfect.',
      'Kitchen: Clean inside and outside of all appliances.',
      'Clean all mirrors and vents.',
      'Cobwebs removed.',
      'Dust and clean all furniture including patio.',
      'Vacuum furniture (if needed).',
      'Check under furniture, especially bed for any trash or debris.',
      'Vacuum or sweep all floors. Mop or polish hard floors.',
      'Clean all baseboards, blinds, glass sliding doors, and windows (if needed).',
      'Clean light switches, doorknobs, inside closets, and pantry.',
      'Check inside all drawers, closets, and shelves to make sure no items or trash are left behind.',
      'Empty trash cans and dust door panels.',
      'Restocking of all supplies (toilet paper, paper towels, body soap, etc.).',
      'Purchase supplies if needed (extra cost).',
      'Wash and dry towels and linens (two loads are included, each additional load is $15).',
      'Wash dishes and empty the dish washer.',
      'Put fresh linens on all beds.',
      'Sweep front and back porch or garage if needed.',
      'Check front and back yard for any trash or broken bottles.',
      'Take trash cans to curb if needed.',
      'We check and report any damages to property.',
    ],
  },
  {
    id: 'extra-services',
    title: 'Extra or Additional Services',
    description: 'These services can be added to any of our services if requested.',
    items: [
      'Window cleaning.',
      'Moving furniture to clean under.',
      'Hand cleaning of blinds (with sponge or wet towel).',
      'Vacuuming furniture.',
      'Cleaning inside of refrigerator, cupboards & drawers.',
      'Cleaning baseboards and scrubbing floors by hand.',
      'Cleaning inside of oven.',
      'Cleaning or dusting knick-knacks.',
      'Cleaning or sweeping out garage, front porch, or back patio.',
      'Cleaning of water heater and A/C closet.',
      'Washing door panels with a wet towel or sponge.',
      'Picking up items off the floor (clothing, toys, etc.).',
      'Dusting walls.',
      'Cleaning outside of cupboards and drawers with wet soapy sponge or polishing.',
    ],
  },
];

interface ServiceBlockProps {
  service: ServiceCategory;
  index: number;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ service, index }) => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <div
      ref={ref}
      id={`service-block-${service.id}`}
      style={{ animationDelay: `${(index % 3) * 0.15}s` }}
      className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-start will-change-transform ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {/* LEFT / TOP PORTION: Text block offset (md:w-1/3) */}
      <div
        id={`service-header-${service.id}`}
        className="w-full md:w-1/3 flex flex-col pt-2"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-[#051A24]/60 font-semibold mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#051A24]" />
          Service #{index + 1}
        </span>
        <h2
          id={`service-title-${service.id}`}
          className="font-mondwest text-3xl md:text-4xl text-[#051A24] font-semibold tracking-tight mb-3"
        >
          {service.title}
        </h2>
        <p
          id={`service-desc-${service.id}`}
          className="text-base text-[#273C46] leading-relaxed font-normal"
        >
          {service.description}
        </p>
      </div>

      {/* RIGHT / BOTTOM PORTION: Premium white card (md:w-2/3) wrapping the list */}
      <div
        id={`service-card-${service.id}`}
        className="w-full md:w-2/3 bg-white rounded-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-slate-100/80 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {service.items.map((item, itemIdx) => (
            <div
              key={itemIdx}
              id={`service-item-${service.id}-${itemIdx}`}
              className="flex items-start gap-3"
            >
              <span className="p-0.5 rounded-full bg-slate-100 text-[#051A24] flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-[#051A24]" />
              </span>
              <p className="text-sm text-[#0D212C] leading-relaxed font-normal">
                {item}
              </p>
            </div>
          ))}
        </div>
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
      <div className="w-full max-w-[1200px] mx-auto px-6 pt-6 pb-2 flex items-center justify-between">
        <button
          id="btn-services-back-home"
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider text-[#051A24]/80 hover:text-[#051A24] transition-colors cursor-pointer py-1.5 px-3 rounded-full bg-slate-100/80 hover:bg-slate-200/80"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
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
        className="w-full max-w-[1200px] mx-auto px-6 pt-8 pb-16 md:pt-12 md:pb-24 flex flex-col items-center text-center"
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
          className={`font-mondwest text-[48px] sm:text-[64px] md:text-[80px] leading-[1.05] text-[#0D212C] font-semibold tracking-tight max-w-4xl mb-8 will-change-transform ${
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

      {/* Services List Section (2-Column Grid inside Premium Cards) */}
      <section
        id="services-list-container"
        className="w-full max-w-[1200px] mx-auto px-6 pb-24 md:pb-32 flex flex-col gap-16 md:gap-24"
      >
        {servicesData.map((service, index) => (
          <ServiceBlock key={service.id} service={service} index={index} />
        ))}
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
