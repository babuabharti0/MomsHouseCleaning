import React from 'react';
import { PhoneCall } from 'lucide-react';
import { Button } from './Button';

interface BottomNavProps {
  onCallOrText: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onCallOrText }) => {
  return (
    <div
      id="fixed-bottom-nav"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div className="bg-white rounded-full px-6 sm:px-8 py-2 nav-floating-shadow border border-slate-200/80 flex items-center gap-4 sm:gap-6 backdrop-blur-md bg-white/95">
        {/* Call or Text Us primary button */}
        <Button
          id="btn-nav-call-or-text"
          variant="primary"
          size="sm"
          onClick={onCallOrText}
          icon={<PhoneCall className="w-3.5 h-3.5" />}
          iconPosition="left"
          className="!py-2 !px-5"
        >
          Call or Text Us
        </Button>
      </div>
    </div>
  );
};
