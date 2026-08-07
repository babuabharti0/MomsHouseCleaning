import { Phone, Home, Sparkles, Users, Calendar } from 'lucide-react';

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-blue-tint p-2 pb-safe md:hidden z-50">
      <div className="flex items-center justify-around">
        <a href="#" className="flex flex-col items-center p-2 text-[#1A4F6B] hover:text-[#F4C2C2] transition-colors">
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold">Home</span>
        </a>
        <a href="#services" className="flex flex-col items-center p-2 text-[#1A4F6B] hover:text-[#F4C2C2] transition-colors">
          <Sparkles className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold">Services</span>
        </a>
        
        {/* Prominent CTA */}
        <a href="tel:2103808066" className="flex flex-col items-center justify-center w-12 h-12 bg-[#89CFF0] text-[#1A4F6B] rounded-full -mt-5 shadow-lg border-2 border-white">
          <Phone className="w-5 h-5 stroke-[2.5]" />
        </a>
        
        <a href="#about" className="flex flex-col items-center p-2 text-[#1A4F6B] hover:text-[#F4C2C2] transition-colors">
          <Users className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold">About Us</span>
        </a>
        <a href="#contact" className="flex flex-col items-center p-2 text-[#1A4F6B] hover:text-[#F4C2C2] transition-colors">
          <Calendar className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold">Contact</span>
        </a>
      </div>
    </div>
  );
}
