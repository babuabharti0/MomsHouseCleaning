import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  Award, 
  Flame, 
  FolderCheck, 
  Home, 
  Bed, 
  ShowerHead, 
  Utensils, 
  PlusCircle, 
  Calendar,
  ArrowRight,
  ChevronRight,
  Send,
  Check
} from 'lucide-react';
import { SERVICE_LANDING_DATA, ServiceLandingInfo } from '../data/serviceLandingData';

interface ServiceLandingPageProps {
  initialServiceId?: string;
  onNavigateContact?: () => void;
}

export default function ServiceLandingPage({ 
  initialServiceId = 'deep-kitchen',
  onNavigateContact 
}: ServiceLandingPageProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    preferredDate: '',
    notes: ''
  });

  const currentService: ServiceLandingInfo = SERVICE_LANDING_DATA[selectedServiceId] || SERVICE_LANDING_DATA['deep-kitchen'];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-pink-dark" />;
      case 'FolderCheck': return <FolderCheck className="w-5 h-5 text-pink-dark" />;
      case 'Bed': return <Bed className="w-5 h-5 text-pink-dark" />;
      case 'ShowerHead': return <ShowerHead className="w-5 h-5 text-pink-dark" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-pink-dark" />;
      case 'Home': return <Home className="w-5 h-5 text-pink-dark" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-pink-dark" />;
      default: return <Sparkles className="w-5 h-5 text-pink-dark" />;
    }
  };

  const scrollToBooking = () => {
    const el = document.getElementById('landing-booking-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigateContact) {
      onNavigateContact();
    }
  };

  return (
    <div className="bg-pink-tint text-blue-dark min-h-screen">
      
      {/* SECTION 1: HEADER & DYNAMIC SERVICE TITLE WITH STICKY CTA */}
      <div className="sticky top-0 z-30 bg-pink-tint/95 backdrop-blur-md border-b border-blue-tint shadow-xs py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 custom-scrollbar">
            <span className="text-xs font-bold text-blue-dark/60 uppercase tracking-wider shrink-0 mr-1 hidden md:inline">
              Select Service:
            </span>
            {Object.values(SERVICE_LANDING_DATA).map((srv) => (
              <button
                key={srv.id}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all ${
                  selectedServiceId === srv.id
                    ? 'bg-blue-dark text-white shadow-sm'
                    : 'bg-white/80 text-blue-dark hover:bg-pink-base/40 border border-blue-tint'
                }`}
              >
                {srv.id === 'deep-kitchen' && 'Deep Kitchen'}
                {srv.id === 'move-out' && 'Move-Out Clean'}
                {srv.id === 'whole-home' && 'Whole Home'}
                {srv.id === 'bathroom-sanitization' && 'Bathroom Disinfection'}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a 
              href="tel:2103808066" 
              className="hidden lg:flex items-center gap-1.5 text-xs font-extrabold text-blue-dark hover:text-pink-dark transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-pink-dark" />
              210.380.8066
            </a>
            <button
              onClick={scrollToBooking}
              className="w-full sm:w-auto px-5 py-2 rounded-full bg-pink-base text-blue-dark font-extrabold text-xs sm:text-sm hover:bg-pink-dark hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Instant Booking for {currentService.estimatedStartingPrice}
            </button>
          </div>
        </div>
      </div>

      {/* HERO / DYNAMIC TITLE BANNER */}
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-base/30 text-blue-dark font-bold text-xs sm:text-sm mb-4 border border-blue-tint">
            <Award className="w-4 h-4 text-pink-dark" />
            {currentService.badgeText}
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-dark tracking-tight leading-tight mb-4">
            {currentService.serviceTitle}
          </h1>

          <p className="text-base sm:text-lg text-blue-dark/80 font-medium leading-relaxed mb-6">
            {currentService.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-blue-dark">
            <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-blue-tint shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-pink-dark" /> 100% W-2 Employees
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-blue-tint shadow-2xs">
              <Clock className="w-4 h-4 text-pink-dark" /> 60-Sec Speed-To-Lead Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-blue-tint shadow-2xs">
              <Sparkles className="w-4 h-4 text-pink-dark" /> Eco-Friendly & Pet Safe
            </span>
          </div>
        </div>

        {/* SECTION 2: VISUAL PROOF SECTION (FULL-WIDTH INTERACTIVE BEFORE/AFTER IMAGE SLIDER) */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl p-4 sm:p-6 border border-blue-tint shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4 px-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-dark/60 block">
                Visual Transformation Proof
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-blue-dark">
                Interactive Before & After Inspection
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-dark/80 bg-pink-tint px-3 py-1 rounded-full border border-pink-dark/30">
                Drag divider left or right
              </span>
            </div>
          </div>

          {/* Interactive React Compare Slider */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-md border-2 border-blue-tint">
            
            {/* Custom Before Label Overlay (Light Pink background, Dark Blue text) */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="bg-pink-tint text-blue-dark font-black text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg border-2 border-pink-dark/40 uppercase tracking-wider">
                {currentService.beforeLabel}
              </span>
            </div>

            {/* Custom After Label Overlay (Base Blue background, Dark Blue text) */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="bg-blue-base text-blue-dark font-black text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg border-2 border-blue-dark/30 uppercase tracking-wider">
                {currentService.afterLabel}
              </span>
            </div>

            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage 
                  src={currentService.beforeImage} 
                  alt={currentService.beforeLabel} 
                  style={{ filter: 'contrast(115%) brightness(92%)' }}
                />
              }
              itemTwo={
                <ReactCompareSliderImage 
                  src={currentService.afterImage} 
                  alt={currentService.afterLabel} 
                />
              }
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    border: '3px solid #1A4F6B',
                    boxShadow: '0 10px 25px -5px rgba(26, 79, 107, 0.4)',
                    color: '#1A4F6B',
                    backgroundColor: '#F4C2C2',
                    width: '42px',
                    height: '42px'
                  }}
                  linesStyle={{
                    width: '3px',
                    backgroundColor: '#1A4F6B'
                  }}
                />
              }
              className="w-full h-full"
            />
          </div>

          <p className="text-center text-xs text-blue-dark/70 font-semibold mt-4">
            Actual results produced for San Antonio & Stone Oak clients by Mom’s House Cleaning.
          </p>
        </div>
      </section>

      {/* SECTION 3: SCOPE OF WORK MATRIX */}
      <section className="py-16 bg-white border-y border-blue-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-tint text-blue-dark text-xs font-bold uppercase tracking-wider mb-3">
              Detailed Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-dark mb-3">
              Scope of Work Checklist Matrix
            </h2>
            <p className="text-base text-blue-dark/80 font-medium">
              We leave zero room for guesswork. Here is the exact line-item checklist performed for every {currentService.serviceTitle}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {currentService.scopeCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-pink-tint p-6 sm:p-8 rounded-3xl border border-blue-tint shadow-xs hover:border-pink-dark transition-all"
              >
                <div className="flex items-center gap-3 mb-5 border-b border-blue-tint/60 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-2xs shrink-0">
                    {renderCategoryIcon(cat.categoryIconName)}
                  </div>
                  <h3 className="text-xl font-bold text-blue-dark">
                    {cat.categoryTitle}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-pink-base flex items-center justify-center shrink-0 mt-0.5 text-blue-dark">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-blue-dark/90 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pricing Highlight callout */}
          <div className="mt-12 bg-blue-tint/80 border-2 border-blue-base p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-dark text-pink-base flex items-center justify-center shrink-0 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-blue-dark">Starting At Only {currentService.estimatedStartingPrice}</h4>
                <p className="text-sm text-blue-dark/80 font-medium">No hidden fees, no bait-and-switch. All supplies included.</p>
              </div>
            </div>
            <button
              onClick={scrollToBooking}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-blue-dark text-white font-extrabold text-sm hover:bg-pink-dark hover:text-white transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
            >
              Book This Exact Scope
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCAL SEO BLOCK */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-tint shadow-md grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-base/30 text-blue-dark text-xs font-bold uppercase tracking-wider">
              Local San Antonio Expertise
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-blue-dark">
              {currentService.seoHeading}
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-blue-dark/85 font-medium leading-relaxed">
              {currentService.seoParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Keyword tags */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-dark/60 mb-2">
                Primary Local Service Zones in Bexar County:
              </p>
              <div className="flex flex-wrap gap-2">
                {currentService.localKeywords.map((kw, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-bold text-blue-dark bg-pink-tint px-3 py-1 rounded-full border border-pink-dark/30"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-pink-tint p-6 rounded-2xl border border-blue-tint space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-pink-dark shrink-0" />
              <div>
                <p className="text-xs font-bold text-blue-dark/60 uppercase">Service Headquarters</p>
                <p className="font-bold text-blue-dark">Greater San Antonio & Bexar County</p>
              </div>
            </div>

            <div className="border-t border-blue-tint/80 pt-3 space-y-2 text-xs font-semibold text-blue-dark/80">
              <div className="flex justify-between">
                <span>San Antonio Metro</span>
                <span className="font-bold text-blue-dark">Active Daily</span>
              </div>
              <div className="flex justify-between">
                <span>Stone Oak & Sonterra</span>
                <span className="font-bold text-blue-dark">Priority Zone</span>
              </div>
              <div className="flex justify-between">
                <span>Alamo Heights & Olmos Park</span>
                <span className="font-bold text-blue-dark">Daily Routes</span>
              </div>
              <div className="flex justify-between">
                <span>Helotes & The Dominion</span>
                <span className="font-bold text-blue-dark">Daily Routes</span>
              </div>
            </div>

            <a
              href="tel:2103808066"
              className="w-full py-3 rounded-xl bg-blue-dark text-white font-extrabold text-xs text-center block hover:bg-pink-dark transition-colors shadow-sm"
            >
              Call Local Team: 210.380.8066
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 5: TRUST FOOTER (FILTERED 5-STAR REVIEWS SPECIFIC TO THIS SERVICE) */}
      <section className="py-16 bg-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-base/30 text-pink-base text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-pink-base" /> Verified Local Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              San Antonio 5-Star Reviews for {currentService.serviceTitle}
            </h2>
            <p className="text-blue-tint font-medium text-sm sm:text-base">
              Real testimonials from homeowners in Stone Oak, Alamo Heights, and Bexar County.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentService.reviews.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-white/10 p-6 rounded-3xl border border-blue-base/30 backdrop-blur-sm flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-pink-base text-pink-base" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-pink-base text-blue-dark px-2.5 py-0.5 rounded-full">
                      {rev.serviceTag}
                    </span>
                  </div>

                  <p className="text-white/95 text-sm font-medium leading-relaxed mb-6 italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="border-t border-blue-base/20 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-extrabold text-sm text-white">{rev.name}</p>
                    <p className="text-xs text-blue-tint/70">{rev.location}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-pink-base font-bold bg-pink-base/20 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* INSTANT BOOKING SUBMISSION FORM */}
          <div id="landing-booking-form" className="mt-16 bg-white rounded-3xl p-6 sm:p-10 text-blue-dark shadow-2xl border border-pink-base/50">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-xs font-bold text-pink-dark uppercase tracking-wider bg-pink-tint px-3 py-1 rounded-full border border-pink-dark/30">
                60-Second Speed-to-Lead Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-blue-dark mt-3 mb-2">
                Reserve Your {currentService.serviceTitle}
              </h3>
              <p className="text-sm text-blue-dark/80 font-medium">
                Submit this quick request and our team will contact you in 60 seconds during business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-pink-tint p-8 rounded-2xl border-2 border-pink-dark text-center space-y-4 max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-pink-base text-blue-dark flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-blue-dark">Request Received!</h4>
                <p className="text-sm font-semibold text-blue-dark/80">
                  Thank you! Our speed-to-lead coordinator is reviewing your {currentService.serviceTitle} request and will call or text you shortly at your phone number.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-blue-dark text-white font-bold text-xs hover:bg-pink-dark transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5 max-w-2xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-blue-dark mb-1.5 uppercase">First Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      placeholder="Jane" 
                      className="w-full px-4 py-3 rounded-xl border border-blue-tint bg-pink-tint/30 text-blue-dark text-sm focus:outline-none focus:ring-2 focus:ring-pink-dark font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-blue-dark mb-1.5 uppercase">Last Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      placeholder="Doe" 
                      className="w-full px-4 py-3 rounded-xl border border-blue-tint bg-pink-tint/30 text-blue-dark text-sm focus:outline-none focus:ring-2 focus:ring-pink-dark font-medium"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-blue-dark mb-1.5 uppercase">Phone Number (Call or Text) *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(210) 555-0199" 
                      className="w-full px-4 py-3 rounded-xl border border-blue-tint bg-pink-tint/30 text-blue-dark text-sm focus:outline-none focus:ring-2 focus:ring-pink-dark font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-blue-dark mb-1.5 uppercase">Preferred Service Date</label>
                    <input 
                      type="date" 
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-blue-tint bg-pink-tint/30 text-blue-dark text-sm focus:outline-none focus:ring-2 focus:ring-pink-dark font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-blue-dark mb-1.5 uppercase">Specific Home Notes / Square Footage</label>
                  <textarea 
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="e.g. 2,400 sq ft home in Stone Oak, kitchen has double oven and granite counters..."
                    className="w-full px-4 py-3 rounded-xl border border-blue-tint bg-pink-tint/30 text-blue-dark text-sm focus:outline-none focus:ring-2 focus:ring-pink-dark font-medium resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-blue-dark text-white font-black text-base sm:text-lg hover:bg-pink-dark transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 text-pink-base group-hover:translate-x-1 transition-transform" />
                  Confirm Instant Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
