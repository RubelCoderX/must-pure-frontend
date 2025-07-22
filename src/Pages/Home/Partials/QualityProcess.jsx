import quality from "../../../assets/Images/quality.png";
import { Droplets, Truck, Package, Waves, Hand } from "lucide-react";

const QualityProcess = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className=" ">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-800 mb-2">
            Musta Pure
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-800">
            Quality Process
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
          {/* Left Side - Image Collage */}
          <div className="relative w-full lg:w-auto flex justify-center">
            <div className="relative">
              <img
                src={quality}
                alt="Quality process illustration"
                className="w-full max-w-[350px] md:max-w-[500px]"
              />
            </div>
          </div>

          {/* Right Side - Process Steps */}
          <div className="space-y-8 md:space-y-12 w-full lg:w-[50%] relative">
            {/* Step 1: Acquisition of Seeds */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-red-800 flex items-center justify-center bg-white">
                  <Hand className="w-6 h-6 md:w-8 md:h-8 text-red-800" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-2 md:mb-3">
                  Acquisition of Seeds
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  High quality mustard seeds are procured from across India. The
                  seeds are further subject to extensive quality tests and
                  checks at our laboratory, equipped with advanced technology
                  and equipment, located at our manufacturing plant.
                </p>
              </div>
            </div>

            {/* Step 2: Cleaning of Seeds */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-red-800 flex items-center justify-center bg-white">
                  <Waves className="w-6 h-6 md:w-8 md:h-8 text-red-800" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-2 md:mb-3">
                  Cleaning of Seeds
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The seeds are processed through several stages of cleaning for
                  removal of dust, impurities and foreign particles.
                </p>
              </div>
            </div>

            {/* Step 3: Extraction of Oil */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-red-800 flex items-center justify-center bg-white">
                  <Droplets className="w-6 h-6 md:w-8 md:h-8 text-red-800" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-2 md:mb-3">
                  Extraction of Oil
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oil is obtained from the seeds by applying state-of-the-art
                  cold pressed technology in extremely hygienic conditions.
                </p>
              </div>
            </div>

            {/* Step 4: Packaging of Oil */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-red-800 flex items-center justify-center bg-white">
                  <Package className="w-6 h-6 md:w-8 md:h-8 text-red-800" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-2 md:mb-3">
                  Packaging of Oil
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our oil is packaged in sanitized bottles and tins in a way
                  such to preserve flavor, aroma and nutrition.
                </p>
              </div>
            </div>

            {/* Step 5: Distribution of Oil */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-red-800 flex items-center justify-center bg-white">
                  <Truck className="w-6 h-6 md:w-8 md:h-8 text-red-800" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-2 md:mb-3">
                  Distribution of Oil
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Packaged oil containers are truck loaded and delivered to
                  local grocery stores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityProcess;
