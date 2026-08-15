import React, { useState } from 'react';
import {
  PhoneCall,
  CheckCircle,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Facebook,
  Linkedin,
  Globe,
  Share2,
  Mail,
  Send,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';
import { Button } from '../components/Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Footer } from '../components/Footer';
import { CopyrightBar } from '../components/CopyrightBar';
import { BottomNav } from '../components/BottomNav';

interface ContactPageProps {
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onOpenEstimate: (serviceTitle?: string) => void;
  onOpenAbout?: () => void;
  onOpenPhotos?: () => void;
  onOpenTestimonials?: () => void;
  onOpenPayment?: () => void;
  onOpenContact?: () => void;
}

export const Contact: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onNavigateServices,
  onOpenEstimate,
  onOpenAbout = () => {},
  onOpenPhotos = () => {},
  onOpenTestimonials = () => {},
  onOpenPayment = () => {},
  onOpenContact = () => {},
}) => {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation(0.05);
  const { ref: leftColRef, isInView: leftColInView } = useInViewAnimation(0.1);
  const { ref: rightColRef, isInView: rightColInView } = useInViewAnimation(0.1);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Initial Deep Clean',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Initial Deep Clean',
        message: '',
      });
    }, 600);
  };

  const handleCallOrText = () => {
    window.open('tel:2103808066', '_self');
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F9FF] text-[#051A24] flex flex-col items-center relative overflow-x-hidden selection:bg-[#051A24] selection:text-white">
      {/* Breadcrumb / Back Navigation Bar */}
      <div className="w-full max-w-[1200px] mx-auto px-6 pt-6 pb-2 flex items-center justify-between">
        <button
          id="btn-contact-back-home"
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider text-[#051A24]/80 hover:text-[#051A24] transition-colors cursor-pointer py-1.5 px-3 rounded-full bg-slate-100/80 hover:bg-slate-200/80"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home / Contact Us</span>
        </button>

        <span className="text-xs font-mono text-[#051A24]/60 uppercase tracking-widest hidden sm:inline-block">
          San Antonio, TX • Since 1999
        </span>
      </div>

      {/* Hero Section (Minimalist) */}
      <section
        ref={heroRef}
        id="contact-hero-section"
        className="w-full max-w-[1200px] mx-auto px-6 pt-8 pb-12 md:pt-12 md:pb-16 flex flex-col items-center text-center"
      >
        {/* Tagline */}
        <p
          id="contact-hero-tagline"
          style={{ animationDelay: '0.1s' }}
          className={`font-mono text-sm text-[#051A24] uppercase tracking-widest font-medium mb-3 will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          San Antonio Area House Cleaning Service
        </p>

        {/* Heading: Let's start a Conversation */}
        <h1
          id="contact-hero-heading"
          style={{ animationDelay: '0.2s' }}
          className={`font-mondwest text-[48px] sm:text-[64px] md:text-[80px] leading-[1.05] text-[#0D212C] font-semibold tracking-tight max-w-4xl will-change-transform ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Let's start a <span className="block sm:inline">Conversation.</span>
        </h1>
      </section>

      {/* Two-Column Conversion Layout */}
      <section
        id="contact-main-grid"
        className="w-full max-w-[1200px] mx-auto px-6 pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
      >
        {/* LEFT COLUMN (THE REACT FORM & SOCIALS) */}
        <div
          ref={leftColRef}
          id="contact-form-column"
          style={{ animationDelay: '0.2s' }}
          className={`flex flex-col gap-8 will-change-transform ${
            leftColInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="bg-white rounded-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-8 md:p-10 border border-slate-100/80">
            <div className="mb-6">
              <h2
                id="contact-form-title"
                className="font-mondwest text-2xl md:text-3xl text-[#051A24] font-semibold tracking-tight mb-2"
              >
                Send Us a Message
              </h2>
              <p className="text-sm text-[#273C46] font-normal leading-relaxed">
                Fill out the details below and we will prepare a personalized estimate for your home or property.
              </p>
            </div>

            {isSubmitted ? (
              <div
                id="contact-success-banner"
                className="p-6 bg-[#EBF5FB] border border-[#051A24]/10 rounded-2xl flex flex-col items-center text-center gap-3 animate-fade-in-up"
              >
                <div className="w-12 h-12 rounded-full bg-[#051A24] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-mondwest text-2xl text-[#051A24] font-semibold">
                  Estimate Request Received!
                </h3>
                <p className="text-sm text-[#273C46] leading-relaxed max-w-md">
                  Thank you! We have received your message and will call or text you shortly with a personalized quote.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-mono uppercase tracking-wider text-[#051A24] underline hover:opacity-75 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                id="contact-estimate-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono uppercase tracking-wider text-[#051A24]/80 font-medium"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Maria Gonzalez"
                    className="bg-[#F6FCFF] border-b-2 border-[#0D212C]/10 focus:border-[#051A24] rounded-t-lg p-4 text-sm text-[#051A24] placeholder:text-[#273C46]/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-mono uppercase tracking-wider text-[#051A24]/80 font-medium"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="bg-[#F6FCFF] border-b-2 border-[#0D212C]/10 focus:border-[#051A24] rounded-t-lg p-4 text-sm text-[#051A24] placeholder:text-[#273C46]/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="text-xs font-mono uppercase tracking-wider text-[#051A24]/80 font-medium"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(210) 555-0123"
                      className="bg-[#F6FCFF] border-b-2 border-[#0D212C]/10 focus:border-[#051A24] rounded-t-lg p-4 text-sm text-[#051A24] placeholder:text-[#273C46]/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service Requested */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-service"
                    className="text-xs font-mono uppercase tracking-wider text-[#051A24]/80 font-medium"
                  >
                    Service Requested
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-[#F6FCFF] border-b-2 border-[#0D212C]/10 focus:border-[#051A24] rounded-t-lg p-4 text-sm text-[#051A24] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Initial Deep Clean">Initial Deep Clean</option>
                    <option value="Weekly, Bi-weekly & Monthly Maintenance">
                      Weekly, Bi-weekly & Monthly Maintenance
                    </option>
                    <option value="Maid Services">Maid Services</option>
                    <option value="Move Outs / Clean Outs / Make Readies">
                      Move Outs / Clean Outs / Make Readies
                    </option>
                    <option value="Short Term Rentals / Airbnb">
                      Short Term Rentals / Airbnb
                    </option>
                    <option value="Extra & Additional Custom Services">
                      Extra & Additional Custom Services
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-mono uppercase tracking-wider text-[#051A24]/80 font-medium"
                  >
                    Message / Home Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your home (bedrooms, bathrooms, square footage, specific priorities)..."
                    className="bg-[#F6FCFF] border-b-2 border-[#0D212C]/10 focus:border-[#051A24] rounded-t-lg p-4 text-sm text-[#051A24] placeholder:text-[#273C46]/40 focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  id="btn-contact-submit-estimate"
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full mt-2 shadow-md"
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Sending Request...' : 'Get a Free Estimate'}
                </Button>
              </form>
            )}
          </div>

          {/* Social Links Row */}
          <div
            id="contact-social-links-row"
            className="flex flex-wrap items-center justify-between gap-4 px-2"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#051A24]/70 font-medium">
              Connect With Us:
            </span>

            <div className="flex items-center gap-4 text-[#051A24]">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                id="social-facebook"
                aria-label="Facebook"
                className="p-2 rounded-full hover:bg-slate-100 transition-colors text-[#051A24] hover:opacity-70"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                id="social-x"
                aria-label="X (formerly Twitter)"
                className="p-2 rounded-full hover:bg-slate-100 transition-colors text-[#051A24] hover:opacity-70"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                id="social-linkedin"
                aria-label="LinkedIn"
                className="p-2 rounded-full hover:bg-slate-100 transition-colors text-[#051A24] hover:opacity-70"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Google */}
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                id="social-google"
                aria-label="Google"
                className="p-2 rounded-full hover:bg-slate-100 transition-colors text-[#051A24] hover:opacity-70"
              >
                <Globe className="w-5 h-5" />
              </a>

              {/* Nextdoor */}
              <a
                href="https://nextdoor.com"
                target="_blank"
                rel="noreferrer"
                id="social-nextdoor"
                aria-label="Nextdoor"
                className="p-2 rounded-full hover:bg-slate-100 transition-colors text-[#051A24] hover:opacity-70 font-bold text-xs"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (TRUST CARDS & DIRECT CONTACT) */}
        <div
          ref={rightColRef}
          id="contact-trust-column"
          style={{ animationDelay: '0.35s' }}
          className={`flex flex-col will-change-transform ${
            rightColInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Card 1 (Direct Contact & Payments - Light UI) */}
          <div
            id="card-direct-contact-light"
            className="bg-white rounded-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-8 md:p-10 border border-slate-100/80"
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-xl font-semibold text-[#051A24]">
                Call or Text Us
              </h3>
              <span className="p-2 rounded-full bg-slate-100 text-[#051A24]">
                <PhoneCall className="w-4 h-4" />
              </span>
            </div>

            <a
              href="tel:2103808066"
              id="contact-phone-link"
              className="font-mondwest text-3xl md:text-4xl text-[#051A24] tracking-tight block hover:opacity-80 transition-opacity font-semibold"
            >
              210.380.8066
            </a>

            <div className="border-t border-slate-200/80 my-6" />

            <div className="flex flex-col gap-4 text-sm text-[#273C46]">
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-[#051A24] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed font-normal">
                  <strong className="text-[#051A24] font-medium block">
                    Flexible Payment Methods:
                  </strong>
                  We accept PayPal, Zelle, Venmo, and CashApp.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#051A24] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed font-normal">
                  <strong className="text-[#051A24] font-medium block">
                    Price Match Promise:
                  </strong>
                  We will beat any insured and bonded competitor's price.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 (Guarantee & Peace of Mind - Dark UI) */}
          <div
            id="card-guarantee-dark"
            className="bg-[#051A24] text-[#F6FCFF] rounded-[32px] p-8 md:p-10 mt-6 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#F6FCFF]" />
              <h3 className="text-xl font-semibold text-[#F6FCFF]">
                Our Guarantee
              </h3>
            </div>

            <p className="text-sm text-[#E0EBF0]/95 leading-relaxed font-normal mb-6">
              We are not happy unless you are happy! We will fix or redo anything missed within a 24-hour notice. No refunds!
            </p>

            <div className="flex flex-col gap-3 mb-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#E0EBF0] flex-shrink-0" />
                <span className="text-sm font-medium text-[#F6FCFF]">
                  Insured and Bonded for YOUR PROTECTION.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#E0EBF0] flex-shrink-0" />
                <span className="text-sm font-medium text-[#F6FCFF]">
                  Registered with Bexar Country (D.B.A.)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#E0EBF0] flex-shrink-0" />
                <span className="text-sm font-medium text-[#F6FCFF]">
                  Angie certified & References Available.
                </span>
              </div>
            </div>

            <p className="text-xs text-[#E0EBF0]/70 leading-relaxed font-mono pt-4 border-t border-white/10">
              * Discounts offered to active duty Military, Veterans, Senior Citizens, Police, Fire, and Paramedics.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenEstimate={() => onOpenEstimate('General Inquiries')}
        onOpenServices={onNavigateServices}
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
