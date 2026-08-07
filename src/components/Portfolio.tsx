import { useState, useRef } from 'react';
import { FcCamera } from 'react-icons/fc';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Initial Deep Cleaning",
    subtitle: "Top-to-bottom detail for first-time visits.",
    beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: "Recurring Maintenance",
    subtitle: "Weekly, Bi-weekly, or Monthly upkeep.",
    beforeImg: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: "Move-Outs & Make-Readies",
    subtitle: "Spotless resets for property handovers.",
    beforeImg: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: "Short-Term Rentals",
    subtitle: "Fast Airbnb/VRBO turnovers & restocking.",
    beforeImg: 'https://images.unsplash.com/photo-1522771731478-44fb10e99d45?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1502672260266-1c1c24240f57?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: "Maid Services",
    subtitle: "Laundry, dishes, and household organizing.",
    beforeImg: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: "Commercial & Office Space",
    subtitle: "Professional workspaces and breakrooms.",
    beforeImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: "Kitchen Appliance Detailing",
    subtitle: "Deep cleaning inside ovens and refrigerators.",
    beforeImg: 'https://images.unsplash.com/photo-1584824486516-0555a07fc511?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: "Window & Blind Detailing",
    subtitle: "Hand-wiping interior windows and blinds.",
    beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: "Garages & Porches",
    subtitle: "Sweeping and debris removal for exteriors.",
    beforeImg: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Portfolio() {
  const outerSectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!outerSectionRef.current || !trackRef.current) return;

      gsap.to(trackRef.current, {
        x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: outerSectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${trackRef.current!.scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => mm.revert();
  }, { scope: outerSectionRef });

  return (
    <section id="photos" className="bg-[#FCE4E4]">
      {/* Mobile view: standard horizontal scroll */}
      <div className="md:hidden py-20">
        <div className="w-full px-4 mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/40 backdrop-blur-md text-[#1A4F6B] mb-6 shadow-sm border border-[#F4C2C2]">
            <FcCamera className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black text-[#1A4F6B] mb-4 tracking-tight uppercase">
            All We Leave Behind Is<br/>
            <span className="text-[#1A4F6B] tracking-[0.2em] mt-2 block font-black">C L E A N !!!!</span>
          </h2>
          <p className="text-lg text-[#1A4F6B]/80 font-medium">
            Real results from our actual clients in San Antonio.
          </p>
        </div>
        
        <div className="flex w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-4 pb-8">
          {services.map((service, idx) => (
            <div key={idx} className="snap-center shrink-0">
               <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view: GSAP Scroll-pinned gallery */}
      <div ref={outerSectionRef} className="hidden md:block relative h-screen overflow-hidden">
        <div className="h-screen flex flex-col justify-center">
          
          <div className="w-full px-8 lg:px-12 mb-12">
            <div className="text-left max-w-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/40 backdrop-blur-md text-[#1A4F6B] mb-6 shadow-sm border border-[#F4C2C2]">
                <FcCamera className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A4F6B] mb-4 tracking-tight uppercase">
                All We Leave Behind Is<br/>
                <span className="text-[#1A4F6B] tracking-[0.2em] mt-2 block font-black">C L E A N !!!!</span>
              </h2>
              <p className="text-xl text-[#1A4F6B]/80 font-medium">
                Real results from our actual clients in San Antonio.
              </p>
            </div>
          </div>

          <div ref={trackRef} className="flex gap-8 px-8 lg:px-12 w-max pb-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div 
      className="group relative w-80 h-96 rounded-2xl overflow-hidden shadow-lg border border-[#89CFF0]/30 cursor-pointer shrink-0"
      onClick={() => setRevealed(!revealed)}
    >
      {/* Before Image (Bottom) */}
      <img 
        src={service.beforeImg} 
        alt={`${service.title} Before`} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* After Image (Top) */}
      <img 
        src={service.afterImg} 
        alt={`${service.title} After`} 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${revealed ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
      />

      {/* Glassmorphism Badge */}
      <div className="absolute top-4 left-4 right-4 z-10 bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl border border-[#F4C2C2]/50 shadow-sm flex flex-col gap-0.5">
        <span className="text-sm font-bold text-[#1A4F6B] leading-tight">{service.title}</span>
        {service.subtitle && <span className="text-xs font-semibold text-[#1A4F6B]/80 leading-tight">{service.subtitle}</span>}
      </div>

      {/* Instruction Pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <div className="bg-[#89CFF0]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#89CFF0] shadow-sm flex items-center justify-center">
          <span className="text-xs font-bold text-[#1A4F6B] whitespace-nowrap">
            <span className="hidden md:inline">Hover to Reveal</span>
            <span className="inline md:hidden">Tap to Reveal</span>
          </span>
        </div>
      </div>
    </div>
  );
}
