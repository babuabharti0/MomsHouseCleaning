import { FcPhone, FcCalendar, FcApproval } from 'react-icons/fc';

export default function AnnouncementBar() {
  return (
    <div className="bg-blue-dark text-white py-2 px-4 text-sm font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <a href="tel:2103808066" className="flex items-center gap-2 hover:text-pink-base transition-colors">
            <FcPhone className="w-5 h-5" />
            <span>Emergency/24-7: 210.380.8066</span>
          </a>
          <span className="hidden md:inline-block w-1 h-1 bg-blue-base rounded-full"></span>
          <span className="hidden md:flex items-center gap-1">
            <FcApproval className="w-5 h-5" />
            San Antonio's Trusted Cleaners since 1999
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FcCalendar className="w-5 h-5" />
          <span>Instant Online Booking Available</span>
        </div>
      </div>
    </div>
  );
}
