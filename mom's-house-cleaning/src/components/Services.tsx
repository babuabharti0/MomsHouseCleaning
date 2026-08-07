import { useState } from 'react';
import Reveal from './Reveal';
import { 
  FcStart,
  FcCalendar,
  FcHome,
  FcKey,
  FcBriefcase,
  FcGlobe,
  FcPlus,
  FcCheckmark,
  FcServices,
  FcLandscape,
  FcNext,
  FcRight
} from 'react-icons/fc';
import { Shirt, Briefcase, PlusCircle, Sparkles, CheckCircle2, ArrowRight, ChevronRight, Image as ImageIcon, Bath, Utensils, Sofa, Leaf } from 'lucide-react';

const serviceCategories = [
  { id: 'standard', name: 'Initial & Recurring Cleaning', icon: FcStart },
  { id: 'moveout', name: 'Move Out / Make Ready', icon: FcHome },
  { id: 'str', name: 'Short Term Rentals', icon: FcKey },
  { id: 'maid', name: 'Domestic Maid Services', icon: FcServices },
  { id: 'specialty', name: 'Commercial & Specialty', icon: FcBriefcase },
  { id: 'addons', name: 'A-La-Carte Add-Ons', icon: FcPlus },
];

const serviceImages: Record<string, { src: string; placeholderText: string; alt: string }> = {
  standard: {
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    placeholderText: '[ Insert Initial & Recurring Cleaning Image Here ]',
    alt: 'Initial and Recurring House Cleaning Services in San Antonio'
  },
  moveout: {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    placeholderText: '[ Insert Move-Out Cleaning Image Here ]',
    alt: 'Move-Out and Make Ready Cleaning'
  },
  str: {
    src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    placeholderText: '[ Insert Short-Term Rental Cleaning Image Here ]',
    alt: 'Short-Term Rental Turnover Cleaning'
  },
  maid: {
    src: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80',
    placeholderText: '[ Insert Domestic Maid Service Image Here ]',
    alt: 'Domestic Maid and Housekeeping Services'
  },
  specialty: {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    placeholderText: '[ Insert Commercial & Specialty Cleaning Image Here ]',
    alt: 'Commercial and Office Cleaning'
  },
  addons: {
    src: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80',
    placeholderText: '[ Insert A-La-Carte Add-Ons Image Here ]',
    alt: 'A-La-Carte Add-On Cleaning Options'
  }
};

const protocols = {
  Bathrooms: [
    'Clean and disinfect tub, shower, sink, countertop, and toilet.',
    'Clean outside cupboards and drawers if needed.',
    'Clean bottom and base of the toilet, including the floor.'
  ],
  Kitchens: [
    'Clean and disinfect sink and countertop.',
    'Clean or polish the outside of cupboards and drawers if needed.',
    'Clean stovetop (including drip pans); lift top to clean if possible.',
    'Clean outside of all appliances (fridge, oven, microwave, dishwasher).',
    'Clean inside the microwave.',
    'Clean the outside of countertop appliances.'
  ],
  'General Interior': [
    'Clean all mirrors and vents, remove all cobwebs.',
    'Dust furniture, picture frames, ceiling fans, lighting fixtures, windowsills, window lock frames, door frames, and ledges.',
    'Vacuum or sweep all floors and stairs.',
    'Mop tile/linoleum floors; polish wood/laminate floors.',
    'Clean all baseboards, blinds, light switches, and doorknobs.',
    'Clean inside closets and pantries, empty trash cans.'
  ]
};

const strProtocols = [
  'Restock all supplies (toilet paper, paper towels, body soap, etc.).',
  'Wash and dry towels and linens (two loads included; $15 per additional load).',
  'Check under furniture and inside drawers/closets for left-behind items or trash.',
  'Put fresh linens on all beds.',
  'Sweep porches/garage, check yard for trash, take trash cans to the curb.',
  'Check and report any property damages.'
];

const maidProtocols = [
  'Washing dishes.',
  'Doing laundry (linens).',
  'Changing sheets and making beds.',
  'Straightening up and organizing.'
];

const moveOutProtocols = [
  'Clean outside drawers and cabinets (inside if requested).',
  'Clean outside and top of refrigerator, outside of dishwasher and oven (inside if requested).',
  'Clean behind the refrigerator and washer/dryer (if requested).',
  'Clean top of window frames where the lock is.',
  '... Plus all Standard General Interior, Kitchen, and Bathroom protocols.'
];

const addons = [
  'Window cleaning.',
  'Hand cleaning of blinds.',
  'Cleaning inside of refrigerator, oven, cupboards & drawers.',
  'Cleaning baseboards and scrubbing floors by hand.',
  'Sweeping garage, front porch, or back patio.',
  'Moving furniture to clean underneath.'
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('standard');

  const currentImage = serviceImages[activeTab] || serviceImages.standard;

  return (
    <section className="py-20 bg-pink-tint/30 relative" id="services">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-blue-dark tracking-tight mb-4">
            Spotless Detail.<br/>
            <span className="text-pink-dark font-black">Every Single Time.</span>
          </h2>
          <p className="text-lg text-blue-dark/80 font-medium">
            From deep initial cleans to regular maintenance, we follow strict protocols to ensure nothing is missed.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Matrix */}
          <Reveal direction="left" className="lg:col-span-4 flex flex-col gap-2 sticky top-28">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-200 border-2 text-left ${
                    isActive 
                      ? 'bg-blue-dark border-blue-dark text-white shadow-lg shadow-blue-dark/20 translate-x-2' 
                      : 'bg-white border-blue-tint text-blue-dark hover:border-pink-base hover:bg-pink-tint/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-pink-tint text-pink-dark'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold">{cat.name}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'opacity-100' : 'opacity-0 -translate-x-4'}`} />
                </button>
              );
            })}
          </Reveal>

          {/* Right Content Area */}
          <Reveal direction="right" className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-blue-tint min-h-[480px] animate-in fade-in duration-300 relative overflow-hidden">
              
              {/* Service 16:9 Image Container Placeholder */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md shadow-pink-dark/20 border-2 border-pink-base/30 group mb-8">
                <img 
                  src={currentImage.src} 
                  alt={currentImage.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-blue-dark/35 backdrop-blur-[1px] flex items-center justify-center p-4">
                  <div className="bg-pink-tint/95 text-blue-dark px-4 py-3 rounded-xl border-2 border-pink-dark shadow-xl text-center max-w-md flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-pink-dark" />
                      <span className="font-mono text-xs sm:text-sm font-extrabold text-blue-dark tracking-tight">
                        {currentImage.placeholderText}
                      </span>
                    </div>
                    <span className="text-[11px] text-blue-dark/70 font-semibold">
                      Dedicated visual asset placeholder for client media updates
                    </span>
                  </div>
                </div>
              </div>

              {/* Content sections based on active tab */}
              
              {activeTab === 'standard' && (
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-tint pb-6">
                    <div>
                      <h3 className="text-2xl font-black text-blue-dark">Initial & Recurring Cleaning</h3>
                      <p className="text-blue-dark/70 font-medium mt-2">Weekly, Bi-weekly, and Monthly Cleanings maintain our Initial Cleaning standards.</p>
                    </div>
                    <a href="#book" className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-dark hover:bg-blue-dark/90 text-white rounded-full font-bold transition-colors text-sm">
                      Get a Quote <FcRight className="w-4 h-4 text-pink-base" />
                    </a>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(protocols).map(([room, items]) => (
                      <div key={room} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-pink-tint flex items-center justify-center text-pink-dark">
                            {room === 'Bathrooms' && <Bath className="w-5 h-5" />}
                            {room === 'Kitchens' && <Utensils className="w-5 h-5" />}
                            {room === 'General Interior' && <Sofa className="w-5 h-5" />}
                          </div>
                          <h4 className="text-lg font-bold text-blue-dark">{room}</h4>
                        </div>
                        <ul className="space-y-3">
                          {items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-blue-dark/80 font-medium leading-relaxed">
                              <FcCheckmark className="w-5 h-5 text-pink-dark shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'moveout' && (
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-tint pb-6">
                    <div>
                      <h3 className="text-2xl font-black text-blue-dark">Move Outs, Clean Outs, Make Readies</h3>
                      <p className="text-blue-dark/70 font-medium mt-2">Deep-clean upgrades ensuring the property is pristine for the next occupant.</p>
                    </div>
                    <a href="#book" className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-dark hover:bg-blue-dark/90 text-white rounded-full font-bold transition-colors text-sm">
                      Book Move-Out Clean <FcRight className="w-4 h-4 text-pink-base" />
                    </a>
                  </div>
                  
                  <div className="bg-pink-tint/80 rounded-2xl p-6 border border-pink-base/40">
                    <ul className="space-y-4">
                      {moveOutProtocols.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-blue-dark font-semibold">
                          <FcCheckmark className="w-6 h-6 text-pink-dark shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'str' && (
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-tint pb-6">
                    <div>
                      <h3 className="text-2xl font-black text-blue-dark">Short Term Rentals & B&Bs</h3>
                      <p className="text-blue-dark/70 font-medium mt-2">Fast, reliable, five-star turnovers for hosts who demand perfection.</p>
                    </div>
                    <a href="#book" className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-dark hover:bg-blue-dark/90 text-white rounded-full font-bold transition-colors text-sm">
                      Discuss Turnover Needs <FcRight className="w-4 h-4 text-pink-base" />
                    </a>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {strProtocols.map((item, idx) => (
                      <div key={idx} className="bg-white border border-blue-tint shadow-xs p-4 rounded-xl flex gap-3 items-start">
                        <FcCheckmark className="w-5 h-5 text-pink-dark shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-blue-dark">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'maid' && (
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-tint pb-6">
                    <div>
                      <h3 className="text-2xl font-black text-blue-dark">Domestic Maid Services</h3>
                      <p className="text-blue-dark/70 font-medium mt-2">Reclaim your time with our dedicated lifestyle cleaning services.</p>
                    </div>
                    <a href="#book" className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-dark hover:bg-blue-dark/90 text-white rounded-full font-bold transition-colors text-sm">
                      Add to Service <FcRight className="w-4 h-4 text-pink-base" />
                    </a>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {maidProtocols.map((item, idx) => (
                      <div key={idx} className="bg-white border border-blue-tint shadow-xs p-4 rounded-xl flex gap-3 items-center">
                        <div className="w-10 h-10 rounded-full bg-pink-tint flex items-center justify-center shrink-0">
                           <FcServices className="w-5 h-5 text-pink-dark" />
                        </div>
                        <span className="font-semibold text-blue-dark">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'specialty' && (
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-tint pb-6">
                    <div>
                      <h3 className="text-2xl font-black text-blue-dark">Commercial & Specialty</h3>
                      <p className="text-blue-dark/70 font-medium mt-2">Customized cleaning protocols for unique environmental needs.</p>
                    </div>
                    <a href="#book" className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-dark hover:bg-blue-dark/90 text-white rounded-full font-bold transition-colors text-sm">
                      Request Custom Quote <FcRight className="w-4 h-4 text-pink-base" />
                    </a>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="bg-white border border-blue-tint p-6 rounded-2xl flex gap-4">
                      <FcBriefcase className="w-8 h-8" />
                      <div>
                        <h4 className="font-bold text-lg text-blue-dark">Commercial Cleaning</h4>
                        <p className="text-blue-dark/80 text-sm mt-1">Professional janitorial and maintenance services for offices, retail, and commercial spaces. Keep your business environment spotless for employees and clients.</p>
                      </div>
                    </div>
                    <div className="bg-pink-tint border border-pink-base/50 p-6 rounded-2xl flex gap-4">
                      <Leaf className="w-8 h-8 text-pink-dark shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-blue-dark">Green Cleaning</h4>
                        <p className="text-blue-dark/80 text-sm mt-1">Environmentally friendly, non-toxic products available upon request. Safe for pets, children, and those with severe allergies.</p>
                      </div>
                    </div>
                    <div className="bg-white border border-blue-tint p-6 rounded-2xl flex gap-4">
                      <FcStart className="w-8 h-8 text-blue-base shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-blue-dark">Spring & Detail Cleaning</h4>
                        <p className="text-blue-dark/80 text-sm mt-1">Intensive top-to-bottom detail cleaning for when standard deep cleans aren't enough. Available upon request.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'addons' && (
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-tint pb-6">
                    <div>
                      <h3 className="text-2xl font-black text-blue-dark">A-La-Carte Add-Ons</h3>
                      <p className="text-blue-dark/70 font-medium mt-2">Customize your clean with specific extras.</p>
                    </div>
                    <a href="#book" className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-dark hover:bg-blue-dark/90 text-white rounded-full font-bold transition-colors text-sm">
                      Customize Quote <FcRight className="w-4 h-4 text-pink-base" />
                    </a>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {addons.map((item, idx) => (
                      <div key={idx} className="bg-white border border-blue-tint shadow-xs p-4 rounded-xl flex gap-3 items-start group hover:border-pink-base transition-colors">
                        <FcPlus className="w-5 h-5 text-pink-dark shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-semibold text-blue-dark">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

