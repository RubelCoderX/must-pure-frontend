import benefitImg from "../../../assets/Images/benefits.png";
import {
  Leaf,
  Droplets,
  Shield,
  Activity,
  Fish,
  Heart,
  Plus,
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Natural",
      subtitle: "Preservative",
      position: "top-left",
    },
    {
      icon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Rich Source",
      subtitle: "of MUFA",
      position: "top",
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Boosts Immune",
      subtitle: "System",
      position: "top-right",
    },
    {
      icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Promotes Digestive",
      subtitle: "Health",
      position: "right",
    },
    {
      icon: <Fish className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Abundant in",
      subtitle: "Omega-3",
      subsubtitle: "Fatty Acid",
      position: "bottom-right",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Improves Heart",
      subtitle: "Health",
      position: "bottom-left",
    },
    {
      icon: <Plus className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Loaded with All the",
      subtitle: "Essential Nutrients",
      position: "left",
    },
  ];

  const getPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "absolute top-2 sm:top-4 md:top-8 left-2 sm:left-4 md:left-8";
      case "top":
        return "absolute -top-4 left-1/2 transform -translate-x-1/2";
      case "top-right":
        return "absolute top-2 sm:top-4 md:top-8 right-2 sm:right-4 md:right-8";
      case "right":
        return "absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2";
      case "bottom-right":
        return "absolute bottom-2 sm:bottom-4 md:bottom-8 right-2 sm:right-4 md:right-8";
      case "bottom-left":
        return "absolute bottom-2 sm:bottom-4 md:bottom-8 left-2 sm:left-4 md:left-8";
      case "left":
        return "absolute top-1/2 -left-4 transform -translate-x-full -translate-y-1/2";
      default:
        return "";
    }
  };

  const getPointerDirection = (position) => {
    switch (position) {
      case "top-left":
        return "bottom-right";
      case "top":
        return "bottom";
      case "top-right":
        return "bottom-left";
      case "right":
        return "left";
      case "bottom-right":
        return "top-left";
      case "bottom-left":
        return "top-right";
      case "left":
        return "right";
      default:
        return "bottom";
    }
  };

  const getPointerClasses = (direction) => {
    switch (direction) {
      case "bottom":
        return "absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-red-700";
      case "top":
        return "absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[16px] border-l-transparent border-r-transparent border-b-red-700";
      case "left":
        return "absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-r-[16px] border-t-transparent border-b-transparent border-r-red-700";
      case "right":
        return "absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[16px] border-t-transparent border-b-transparent border-l-red-700";
      case "top-left":
        return "absolute -top-2 -left-2 w-0 h-0 border-b-[12px] border-r-[12px] border-l-transparent border-t-transparent border-b-red-700 border-r-red-700";
      case "top-right":
        return "absolute -top-2 -right-2 w-0 h-0 border-b-[12px] border-l-[12px] border-r-transparent border-t-transparent border-b-red-700 border-l-red-700";
      case "bottom-left":
        return "absolute -bottom-2 -left-2 w-0 h-0 border-t-[12px] border-r-[12px] border-l-transparent border-b-transparent border-t-red-700 border-r-red-700";
      case "bottom-right":
        return "absolute -bottom-2 -right-2 w-0 h-0 border-t-[12px] border-l-[12px] border-r-transparent border-b-transparent border-t-red-700 border-l-red-700";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-24 md:mb-48">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-800 mb-2">
            BENEFITS
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800">
            OF MUSTAPURE
          </h2>
        </div>

        {/* Mobile layout for small screens */}
        <div className="md:hidden space-y-6">
          {/* Center image for mobile */}
          <div className="flex justify-center mb-8">
            <div className="rounded-full overflow-hidden">
              <img
                src={benefitImg}
                className="w-[250px] sm:w-[300px] object-cover"
                alt="Mustapure benefits"
              />
            </div>
          </div>

          {/* Vertical list of benefits for mobile */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-white border-2 border-red-700 rounded-lg p-3 shadow-md"
              >
                <div className="bg-red-50 p-3 rounded-full mr-4">
                  <div className="text-red-700">{benefit.icon}</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    {benefit.title}
                  </div>
                  <div className="font-semibold text-gray-800">
                    {benefit.subtitle}
                  </div>
                  {benefit.subsubtitle && (
                    <div className="font-semibold text-gray-800">
                      {benefit.subsubtitle}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop circular layout - hidden on mobile */}
        <div className="hidden md:flex relative justify-center items-center">
          {/* Center image */}
          <div className="relative z-10">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={benefitImg}
                className="w-[300px] lg:w-[400px] object-cover"
                alt="Mustapure benefits"
              />
            </div>
          </div>

          {/* Benefit circles positioned around the center */}
          <div className="absolute w-[450px] h-[450px] lg:w-[600px] lg:h-[600px]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${getPositionClasses(
                  benefit.position
                )} w-28 h-28 sm:w-32 sm:h-32 rounded-full`}
              >
                <div className="relative">
                  {/* Speech bubble pointer */}
                  <div
                    className={getPointerClasses(
                      getPointerDirection(benefit.position)
                    )}
                  ></div>

                  {/* Main circle */}
                  <div className="bg-white border-4 border-red-700 rounded-full w-full h-full flex flex-col items-center justify-center p-3 shadow-lg">
                    <div className="text-red-700 mb-1">{benefit.icon}</div>
                    <div className="text-center">
                      <div className="text-xs font-semibold text-gray-800 leading-tight">
                        {benefit.title}
                      </div>
                      <div className="text-xs font-semibold text-gray-800 leading-tight">
                        {benefit.subtitle}
                      </div>
                      {benefit.subsubtitle && (
                        <div className="text-xs font-semibold text-gray-800 leading-tight">
                          {benefit.subsubtitle}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
