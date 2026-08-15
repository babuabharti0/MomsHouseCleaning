import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

interface FooterProps {
  onOpenEstimate: () => void;
  onOpenServices: () => void;
  onOpenAbout: () => void;
  onOpenPhotos: () => void;
  onOpenTestimonials: () => void;
  onOpenPayment: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEstimate,
  onOpenServices,
  onOpenAbout,
  onOpenPhotos,
  onOpenTestimonials,
  onOpenPayment,
  onOpenContact,
}) => {
  return (
    <footer
      id="main-footer"
      className="w-full max-w-[1200px] mx-auto px-6 py-12 border-t border-slate-200/60"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Side: CTA Button */}
        <div id="footer-cta-col">
          <Button
            id="footer-btn-estimate"
            variant="primary"
            size="md"
            onClick={onOpenEstimate}
          >
            Get a Free Estimate
          </Button>
        </div>

        {/* Right Side: Arrow Icon + Two columns of links */}
        <div id="footer-links-container" className="flex items-start gap-8 sm:gap-14">
          <div className="pt-1 text-[#051A24] hidden sm:block">
            <ArrowUpRight className="w-6 h-6 text-[#051A24]" />
          </div>

          {/* Column 1 */}
          <div id="footer-col-1" className="flex flex-col gap-3">
            <button
              onClick={onOpenServices}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              Our Services
            </button>
            <button
              onClick={onOpenAbout}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={onOpenTestimonials}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              Testimonials
            </button>
          </div>

          {/* Column 2 */}
          <div id="footer-col-2" className="flex flex-col gap-3">
            <button
              onClick={onOpenPayment}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              Payment Options
            </button>
            <button
              onClick={onOpenContact}
              className="text-left text-base text-[#051A24] hover:opacity-70 transition-opacity font-normal cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
