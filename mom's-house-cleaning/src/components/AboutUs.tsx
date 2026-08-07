import { FcLike, FcApproval, FcStart, FcDonate, FcCheckmark } from 'react-icons/fc';
import Reveal from './Reveal';

export default function AboutUs() {
  return (
    <section className="py-20 bg-pink-tint overflow-hidden" id="about">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <Reveal direction="left" className="relative">
            {/* Image Placeholder Frame */}
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-pink-tint border-8 border-white shadow-xl">
              <div className="absolute inset-0 bg-pink-base/30 flex items-center justify-center text-blue-dark flex-col">
                <FcDonate className="w-16 h-16 mb-4" />
                <span className="font-bold text-lg">Glen & Lisa Talley</span>
                <span className="text-sm font-semibold text-blue-dark/80">Founders, Mom's House Cleaning</span>
              </div>
            </div>
            
            {/* Badge overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-blue-tint max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-pink-base/30 rounded-full flex items-center justify-center text-pink-dark">
                  <FcLike className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-dark/60 uppercase tracking-wider">Partner</p>
                  <p className="font-bold text-blue-dark leading-tight">Cleaning for a Reason</p>
                </div>
              </div>
              <p className="text-sm text-blue-dark/80 font-medium">We proudly provide free house cleaning for patients battling cancer.</p>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-base/30 text-blue-dark font-bold text-sm mb-6">
              <FcStart className="w-5 h-5" />
              Established 1999
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 leading-tight">
              A Business Built on Faith, Family, and Integrity.
            </h2>
            
            <div className="space-y-4 text-lg text-blue-dark/80 font-medium mb-8">
              <p>
                In 1999, Glen and Lisa Talley started Mom's House Cleaning with a simple mission: to provide the families of San Antonio with a cleaning service they could actually trust. 
              </p>
              <p>
                Over two decades later, that foundation hasn't changed. We don't believe in cutting corners. We believe in showing up when we say we will, treating your home with respect, and delivering a level of clean that makes you sigh with relief when you walk through the door.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-blue-tint shadow-xs">
                <FcApproval className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-blue-dark mb-2">100% W-2 Employees</h4>
                <p className="text-sm text-blue-dark/80 font-medium">We never use independent contractors. Our staff is fully employed, trained, and insured by us.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-blue-tint shadow-xs">
                <FcCheckmark className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-blue-dark mb-2">Integrity First</h4>
                <p className="text-sm text-blue-dark/80 font-medium">Our core value. If we break it, we fix it. If we miss it, we come back and clean it. No excuses.</p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
