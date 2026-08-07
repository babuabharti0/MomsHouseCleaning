import { useState } from 'react';
import { Calendar, ChevronRight, X, Info } from 'lucide-react';

type ServiceType = 'Standard Recurring' | 'Deep Clean / Initial' | 'Move In / Move Out';
type Frequency = 'Weekly' | 'Bi-Weekly' | 'Monthly' | 'One-Time';

const addOnPrices = {
  oven: 35,
  fridge: 35,
  windows: 45,
  nano: 125,
};

export default function SmartEstimator() {
  const [sqft, setSqft] = useState(1500);
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [serviceType, setServiceType] = useState<ServiceType>('Deep Clean / Initial');
  const [frequency, setFrequency] = useState<Frequency>('Bi-Weekly');
  const [addons, setAddons] = useState({
    oven: false,
    fridge: false,
    windows: false,
    nano: false,
  });
  const [showModal, setShowModal] = useState(false);

  // Calculations
  const basePrice = (sqft * 0.10) + (beds * 20) + (baths * 35);
  
  const getMultiplier = (type: ServiceType) => {
    switch (type) {
      case 'Standard Recurring': return 1.0;
      case 'Deep Clean / Initial': return 1.4;
      case 'Move In / Move Out': return 1.75;
      default: return 1.0;
    }
  };

  const getDiscount = (freq: Frequency) => {
    switch (freq) {
      case 'Weekly': return 0.20;
      case 'Bi-Weekly': return 0.15;
      case 'Monthly': return 0.10;
      case 'One-Time': return 0.0;
      default: return 0.0;
    }
  };

  const baseWithMultiplier = basePrice * getMultiplier(serviceType);
  
  const addonTotal = 
    (addons.oven ? addOnPrices.oven : 0) +
    (addons.fridge ? addOnPrices.fridge : 0) +
    (addons.windows ? addOnPrices.windows : 0) +
    (addons.nano ? addOnPrices.nano : 0);

  const originalTotal = baseWithMultiplier + addonTotal;
  const discountRate = getDiscount(frequency);
  const discountAmount = originalTotal * discountRate;
  const finalTotal = originalTotal - discountAmount;

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl border border-blue-tint overflow-hidden w-full max-w-md mx-auto relative z-10 flex flex-col max-h-[85vh] lg:max-h-none">
        <div className="bg-blue-dark px-6 py-4 shrink-0">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            Smart Price Estimator
          </h3>
        </div>
        
        <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar flex-grow">
          
          {/* Home Details */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <label className="block text-sm font-semibold text-blue-dark">Home Size</label>
              <span className="text-pink-dark font-bold">{sqft} SqFt</span>
            </div>
            <input 
              type="range" 
              min="500" 
              max="5000" 
              step="100"
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full h-2 bg-pink-tint rounded-lg appearance-none cursor-pointer accent-pink-dark"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-blue-dark mb-2">Bedrooms</label>
              <div className="flex items-center justify-between border border-blue-tint rounded-lg p-1 bg-pink-tint/40">
                <button 
                  onClick={() => setBeds(Math.max(1, beds - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-pink-base text-blue-dark font-bold transition-colors"
                >-</button>
                <span className="font-bold text-blue-dark">{beds}</span>
                <button 
                  onClick={() => setBeds(beds + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-pink-base text-blue-dark font-bold transition-colors"
                >+</button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-dark mb-2">Bathrooms</label>
              <div className="flex items-center justify-between border border-blue-tint rounded-lg p-1 bg-pink-tint/40">
                <button 
                  onClick={() => setBaths(Math.max(1, baths - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-pink-base text-blue-dark font-bold transition-colors"
                >-</button>
                <span className="font-bold text-blue-dark">{baths}</span>
                <button 
                  onClick={() => setBaths(baths + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-pink-base text-blue-dark font-bold transition-colors"
                >+</button>
              </div>
            </div>
          </div>

          <hr className="border-pink-base/30" />

          {/* Service Type */}
          <div>
            <label className="block text-sm font-semibold text-blue-dark mb-3">Service Type</label>
            <div className="space-y-2">
              {(['Standard Recurring', 'Deep Clean / Initial', 'Move In / Move Out'] as ServiceType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setServiceType(type)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                    serviceType === type 
                      ? 'border-pink-dark bg-pink-tint text-blue-dark shadow-xs' 
                      : 'border-blue-tint bg-white text-blue-dark hover:border-pink-base'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{type}</span>
                    {serviceType === type && <div className="w-2.5 h-2.5 rounded-full bg-pink-dark" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Frequency */}
          <div>
            <label className="block text-sm font-semibold text-blue-dark mb-3">Frequency & Savings</label>
            <div className="grid grid-cols-2 gap-2">
              {(['Weekly', 'Bi-Weekly', 'Monthly', 'One-Time'] as Frequency[]).map((freq) => (
                <button
                  key={freq}
                  onClick={() => setFrequency(freq)}
                  className={`px-3 py-2.5 rounded-xl border text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                    frequency === freq 
                      ? 'border-blue-dark bg-blue-dark text-white shadow-md' 
                      : 'border-blue-tint bg-white text-blue-dark hover:border-blue-base'
                  }`}
                >
                  <span>{freq}</span>
                  {getDiscount(freq) > 0 && (
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      frequency === freq ? 'bg-white/20 text-white' : 'bg-pink-tint text-blue-dark'
                    }`}>
                      {getDiscount(freq) * 100}% OFF
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-pink-base/30" />

          {/* Add-ons */}
          <div>
            <label className="block text-sm font-semibold text-blue-dark mb-3">Add-on Services</label>
            <div className="space-y-2">
              {Object.entries({
                oven: 'Inside Oven (+$35)',
                fridge: 'Inside Refrigerator (+$35)',
                windows: 'Interior Windows (+$45)',
                nano: 'Nano-Ceramic Protection (+$125)'
              }).map(([key, label]) => (
                <label key={key} className="flex items-center gap-3 p-3 rounded-xl border border-blue-tint hover:bg-pink-tint cursor-pointer transition-colors">
                  <input 
                    type="checkbox"
                    checked={addons[key as keyof typeof addons]}
                    onChange={() => toggleAddon(key as keyof typeof addons)}
                    className="w-5 h-5 rounded border-blue-base/50 text-blue-dark focus:ring-blue-dark accent-blue-dark"
                  />
                  <span className="text-sm font-semibold text-blue-dark">{label}</span>
                </label>
              ))}
            </div>
          </div>
          
        </div>

        {/* Sticky Footer */}
        <div className="p-6 bg-blue-tint/50 border-t border-blue-base/30 shrink-0">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-blue-dark/70 text-sm font-semibold mb-1">Estimated Total</p>
              {discountAmount > 0 && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-dark/50 line-through">${originalTotal.toFixed(2)}</span>
                  <span className="text-pink-dark font-bold">Save ${discountAmount.toFixed(2)}</span>
                </div>
              )}
            </div>
            <div className="text-right">
              <span className="text-4xl font-black text-blue-dark">${finalTotal.toFixed(0)}<span className="text-lg font-bold text-blue-dark/60">.00</span></span>
            </div>
          </div>
          
          <button 
            onClick={() => setShowModal(true)}
            className="w-full py-4 rounded-xl bg-pink-base text-blue-dark font-extrabold text-lg hover:bg-blue-base transition-colors shadow-lg shadow-pink-base/30 flex items-center justify-center gap-2 group"
          >
            Lock In Quote & Book
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Calendar Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-dark/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-blue-base/30 flex justify-between items-center bg-blue-dark text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-base" />
                Choose Time Slot
              </h2>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-pink-tint text-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-pink-dark" />
              </div>
              <h3 className="text-2xl font-bold text-blue-dark">Your Quote is Locked!</h3>
              <p className="text-blue-dark/80 text-lg">
                Awesome! Your price is locked in at <strong className="text-pink-dark">${finalTotal.toFixed(2)}</strong>.
              </p>
              
              <div className="bg-blue-tint/50 p-4 rounded-xl border border-blue-base/30 flex gap-3 text-left">
                <Info className="w-5 h-5 text-blue-dark shrink-0 mt-0.5" />
                <p className="text-sm text-blue-dark font-medium">
                  This is a simulation. In a real application, a full calendar picker (like Calendly or a custom scheduler) would appear here to finalize the booking.
                </p>
              </div>
              
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-3 mt-4 rounded-xl border-2 border-blue-base font-bold text-blue-dark hover:bg-pink-tint transition-colors"
              >
                Close Simulator
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
