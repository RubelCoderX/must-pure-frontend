import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-100 py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8">
          {/* Logo Section */}
          <div className="lg:col-span-1 flex justify-center sm:justify-start">
            <div className="bg-red-600 text-white p-4 inline-block">Logo</div>
          </div>

          {/* Get Started Section */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-center sm:text-left">
              Get Started
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex justify-center sm:justify-start"
                >
                  {">"} Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex justify-center sm:justify-start"
                >
                  {">"} About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex justify-center sm:justify-start"
                >
                  {">"} Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex justify-center sm:justify-start"
                >
                  {">"} Faqs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-center sm:text-left">
              Resources
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex justify-center sm:justify-start"
                >
                  {">"} Quality Control
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex justify-center sm:justify-start"
                >
                  {">"} Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex justify-center sm:justify-start"
                >
                  {">"} Career
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex justify-center sm:justify-start"
                >
                  {">"} Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Head Office Section */}
          <div className="lg:col-span-1 mt-4 sm:mt-0">
            <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-center sm:text-left">
              Head Office
            </h3>
            <div className="text-gray-600 text-sm space-y-1 sm:space-y-2 text-center sm:text-left">
              <p>136, 137 A, Birpur Industrial Complex,</p>
              <p>Bari Brahmana, Jammu, J&K, India</p>
              <p>(01923) 221106</p>
              <p>info@oilsband.com</p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-3 md:mt-4 justify-center sm:justify-start">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Manufacturing Facility Section */}
          <div className="lg:col-span-1 mt-4 sm:mt-0">
            <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-center sm:text-left">
              Manufacturing Facility
            </h3>
            <div className="text-gray-600 text-sm text-center sm:text-left">
              <p>Lane No. 4, Phase II, SIDCO Industrial</p>
              <p>Complex, Bari Brahmana, Jammu,</p>
              <p>J&K, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0 text-center md:text-left">
              © 2018 Gulati Oils (India) Pvt. Ltd. All Rights Reserved
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0 sm:space-x-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Terms and Conditions
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Privacy Policy
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
