import { Star } from "lucide-react";

const ExtraSection = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
      {/* Main curved banner */}
      <div className="relative bg-gradient-to-r from-red-700 to-red-600 rounded-bl-[40px] rounded-tr-[40px] px-4 sm:px-8 py-6 sm:py-12 shadow-2xl overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 w-12 sm:w-16 h-12 sm:h-16 opacity-30">
          <div className="w-full h-full bg-yellow-400 rounded-lg transform rotate-12 opacity-60"></div>
          <div className="absolute top-2 left-2 w-6 sm:w-8 h-6 sm:h-8 bg-green-400 rounded-full"></div>
        </div>

        <div className="absolute bottom-4 right-4 w-16 sm:w-20 h-16 sm:h-20 opacity-30">
          <div className="w-full h-full bg-yellow-400 rounded-lg transform -rotate-12 opacity-60"></div>
          <div className="absolute top-3 left-3 w-8 sm:w-10 h-8 sm:h-10 bg-green-400 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-between relative z-10 gap-6 md:gap-0">
          {/* Left side - Available On text and platform badges */}
          <div className="space-y-4 sm:space-y-6 w-full md:w-auto">
            <h2 className="text-white text-xl sm:text-2xl font-bold tracking-wide text-center md:text-left">
              অতীতের ঘ্রাণ, আজকের খাঁটি তেল...
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 sm:space-x-3">
              {/* BigBasket badge */}
              <div className="bg-white rounded-full px-4 sm:px-6 py-1 shadow-lg w-full sm:w-auto">
                <input
                  type="text"
                  className="bg-transparent border-none outline-none text-black font-bold text-lg sm:text-xl w-full"
                  placeholder="Search"
                />
              </div>

              {/* Amazon badge */}
              <div className="bg-white rounded-full px-4 sm:px-6 py-1 shadow-lg w-full sm:w-auto">
                <input
                  type="text"
                  className="bg-transparent border-none outline-none text-black font-bold text-lg sm:text-xl w-full"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          {/* Right side - Rating */}
          <div className="text-center md:text-right">
            <div className="text-white text-base sm:text-lg font-semibold mb-2">
              RATED 4.9/5
            </div>
            <div className="flex space-x-1 justify-center md:justify-end">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="relative">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white drop-shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-10 pointer-events-none"></div>
      </div>

      {/* Shadow beneath the banner */}
      <div className="absolute inset-x-0 top-4 h-full bg-gradient-to-b from-transparent to-gray-400 opacity-30 rounded-3xl transform translate-y-2 -z-10"></div>
    </div>
  );
};

export default ExtraSection;
