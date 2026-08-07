import { FcClock, FcPhone, FcHome, FcCheckmark } from 'react-icons/fc';
import Reveal from './Reveal';

export default function ContactPortal() {
  return (
    <section className="py-20 bg-blue-dark" id="contact">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-5">
          
          {/* Left Column: Booking Form Simulation */}
          <Reveal direction="left" className="p-8 sm:p-12 lg:col-span-3">
            <h2 className="text-3xl font-bold text-blue-dark mb-2">Request Service</h2>
            <p className="text-blue-dark/70 font-medium mb-8">Fill out the form below and we'll contact you within 60 seconds during business hours.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-dark mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-blue-tint text-blue-dark focus:outline-none focus:ring-2 focus:ring-pink-dark focus:border-transparent transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-dark mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-blue-tint text-blue-dark focus:outline-none focus:ring-2 focus:ring-pink-dark focus:border-transparent transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-dark mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-blue-tint text-blue-dark focus:outline-none focus:ring-2 focus:ring-pink-dark focus:border-transparent transition-all" placeholder="(210) 555-0123" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-dark mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-blue-tint text-blue-dark focus:outline-none focus:ring-2 focus:ring-pink-dark focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-dark mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl border border-blue-tint text-blue-dark focus:outline-none focus:ring-2 focus:ring-pink-dark focus:border-transparent transition-all bg-white">
                  <option>Initial Deep Clean</option>
                  <option>Recurring Maid Service</option>
                  <option>Move-In / Move-Out</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-blue-dark text-white font-extrabold text-lg hover:bg-pink-dark hover:text-white transition-colors shadow-lg shadow-blue-dark/20">
                Send Request Now
              </button>
            </form>
          </Reveal>

          {/* Right Column: Contact Info */}
          <Reveal direction="right" className="bg-pink-tint p-8 sm:p-12 lg:col-span-2 border-l border-blue-tint flex flex-col justify-center">
            <div className="bg-pink-base/40 text-blue-dark rounded-full px-4 py-1.5 inline-flex items-center gap-2 font-bold text-sm w-fit mb-8">
              <FcClock className="w-5 h-5" />
              60-Second Speed-to-Lead Guarantee
            </div>

            <h3 className="text-2xl font-bold text-blue-dark mb-6">Need Immediate Assistance?</h3>
            
            <div className="space-y-6">
              <a href="tel:2103808066" className="flex items-start gap-4 group p-4 -mx-4 rounded-xl hover:bg-blue-tint/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-dark text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <FcPhone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-dark/60 mb-1">Call or Text Us 24/7</p>
                  <p className="text-xl font-bold text-blue-dark">210.380.8066</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 -mx-4">
                <div className="w-12 h-12 rounded-full bg-blue-base/30 text-blue-dark flex items-center justify-center shrink-0">
                  <FcHome className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-dark/60 mb-1">Service Area</p>
                  <p className="text-base font-semibold text-blue-dark">Greater San Antonio, TX & Surrounding Areas</p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-blue-base/20" />

            <div>
              <p className="font-bold text-blue-dark mb-4">Why Book With Us?</p>
              <ul className="space-y-3">
                {['No hidden fees or bait-and-switch pricing', 'We bring all eco-friendly supplies', '100% Satisfaction Guarantee'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-blue-dark/80 font-medium">
                    <FcCheckmark className="w-5 h-5 text-pink-dark shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
