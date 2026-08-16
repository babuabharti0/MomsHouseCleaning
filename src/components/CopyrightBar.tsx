import React from 'react';

export const CopyrightBar: React.FC = () => {
  return (
    <div
      id="copyright-bar"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto py-4 pb-28 md:pb-24 border-t border-slate-100"
    >
      <div className="flex flex-row justify-between items-center text-sm text-[#051A24]/90 font-normal">
        <span id="copyright-text">© 2026 Mom's House Cleaning</span>
        <span id="location-text" className="font-mono text-xs uppercase tracking-wider">
          San Antonio, TX
        </span>
      </div>
    </div>
  );
};
