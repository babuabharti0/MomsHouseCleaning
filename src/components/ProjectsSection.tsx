import React from 'react';
import { RealisticSparklesIcon, RealisticCalendarIcon } from './RealisticIcons';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface ProjectItemData {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const PROJECTS: ProjectItemData[] = [
  {
    id: 'project-move-outs',
    title: 'Move Outs & Make Readies',
    description:
      "We specialize in 'move outs/clean outs' and 'make readies' designed for complete property transitions, turnkey readiness, and immaculate final inspections.",
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80',
    alt: 'Immaculate empty renovated apartment ready for tenant move-in',
  },
  {
    id: 'project-airbnb',
    title: 'Short Term Rentals / Airbnb',
    description:
      'Turnkey cleaning, restocking, and linen washing for bed & breakfasts across San Antonio.',
    image:
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=80',
    alt: 'Hotel-grade fresh bedroom linen presentation for Airbnb rental',
  },
  {
    id: 'project-green',
    title: "Mom's Gone Green",
    description:
      "Mom's House Cleaning now offers GREEN CLEANING upon request. Now you can get dependable cleaning without the chemical warfare. The products we use will not harm you, your family, or your pets, and they are environmentally friendly.",
    image:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1400&q=80',
    alt: 'Eco-friendly non-toxic cleaning spray with natural wash cloth',
  },
];

const ProjectCard: React.FC<{ item: ProjectItemData; index: number }> = ({
  item,
  index,
}) => {
  const { ref, isInView } = useInViewAnimation(0.15);

  return (
    <div
      id={`project-item-${item.id}`}
      ref={ref}
      className={`w-full flex flex-col ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Offset text block */}
      <div className="ml-2 sm:ml-12 md:ml-28 mb-3 md:mb-6 max-w-xl">
        <h3
          id={`project-title-${item.id}`}
          className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-[#051A24] tracking-tight mb-2"
        >
          {item.title}
        </h3>
        <p
          id={`project-desc-${item.id}`}
          className="text-xs sm:text-sm md:text-base text-[#051A24]/80 leading-relaxed font-normal"
        >
          {item.description}
        </p>
      </div>

      {/* Full-width image below */}
      <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-lg group">
        <img
          id={`project-img-${item.id}`}
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-[240px] sm:h-[340px] md:h-[480px] object-cover rounded-2xl md:rounded-3xl transition-transform duration-700 md:group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const { ref: summaryRef, isInView: summaryInView } = useInViewAnimation(0.1);

  return (
    <section
      id="specialty-projects-section"
      className="w-full py-8 px-4 md:py-24 md:px-12 mx-auto"
      aria-label="Specialty Cleaning Projects"
    >
      {/* Core Services Summary Card */}
      <div
        ref={summaryRef}
        style={{ animationDelay: '0.1s' }}
        className={`w-full mb-8 md:mb-16 rounded-[24px] sm:rounded-[36px] md:rounded-[40px] bg-slate-50/90 border border-slate-200/80 p-5 sm:p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 ${
          summaryInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#051A24]/60 font-semibold">
            <RealisticCalendarIcon className="w-4 h-4" />
            <span>Service Flexibility</span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-semibold text-[#0D212C] tracking-tight mb-2 md:mb-3">
            Custom Scheduled Housekeeping
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#051A24] leading-relaxed font-normal">
            We specialize in weekly, biweekly, or monthly scheduled cleanings. We also specialize in "move outs/clean outs" and "make readies". Spring cleaning/detail cleaning are available upon request.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-mono font-medium text-[#051A24] shadow-sm">
          <RealisticSparklesIcon className="w-4 h-4" />
          <span>Flexible Scheduling</span>
        </div>
      </div>

      <div className="flex flex-col gap-10 md:gap-20">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} item={project} index={index} />
        ))}
      </div>
    </section>
  );
};

