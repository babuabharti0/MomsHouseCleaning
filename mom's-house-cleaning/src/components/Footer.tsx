import { FcLike, FcPhone, FcHome, FcMoneyTransfer, FcDonate } from 'react-icons/fc';
import { CreditCard, DollarSign, Smartphone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-dark text-blue-tint pt-20 pb-24 md:pb-12 border-t-8 border-pink-base relative">
      
      {/* Military/Senior Banner overlapping the top edge */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-full max-w-4xl px-4">
        <div className="bg-pink-base text-blue-dark rounded-2xl p-4 shadow-xl flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <FcLike className="w-6 h-6 shrink-0 fill-pink-dark text-pink-dark" />
          <p className="font-bold">Proudly offering 10% discounts for Active Military, Veterans, and Seniors (65+).</p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black text-white mb-4">Mom's House Cleaning</h3>
            <p className="text-sm text-blue-tint/80 mb-6 font-medium">
              Integrity is the foundation of every spotless home. Serving San Antonio with excellence since 1999.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-pink-base hover:text-blue-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-pink-base hover:text-blue-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:2103808066" className="flex items-start gap-3 hover:text-pink-base transition-colors">
                  <FcPhone className="w-5 h-5" />
                  <span>
                    <span className="block font-bold text-white">210.380.8066</span>
                    <span className="text-sm text-blue-tint/80">Call or Text 24/7</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FcHome className="w-5 h-5 text-pink-base shrink-0 mt-0.5" />
                <span>
                  <span className="block font-bold text-white">San Antonio, TX</span>
                  <span className="text-sm text-blue-tint/80">Serving the Greater Metro Area</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Guarantees */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Our Guarantees</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-base" />
                100% Satisfaction Guarantee
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-base" />
                Competitor Price Match
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-base" />
                W-2 Insured Employees
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-base" />
                Green Cleaning Certified
              </li>
            </ul>
          </div>

          {/* Payments */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Accepted Payments</h4>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 p-2 rounded flex items-center justify-center" title="Credit/Debit Cards">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="bg-white/10 px-3 py-2 rounded flex items-center justify-center font-bold text-white text-sm" title="Zelle">
                Zelle
              </div>
              <div className="bg-white/10 px-3 py-2 rounded flex items-center justify-center font-bold text-white text-sm" title="Venmo">
                Venmo
              </div>
              <div className="bg-white/10 px-3 py-2 rounded flex items-center justify-center font-bold text-white text-sm gap-1" title="CashApp">
                <DollarSign className="w-4 h-4 text-pink-base" /> CashApp
              </div>
            </div>
            <p className="text-xs text-blue-tint/70 mt-4 font-medium">
              Payment is only collected after the job is completed to your satisfaction.
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-tint/70 font-medium">
          <p>&copy; {new Date().getFullYear()} Mom's House Cleaning. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-base transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-base transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
