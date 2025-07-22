import { FaFacebook, FaUser, FaWhatsapp } from "react-icons/fa";

const Team = () => {
  return (
    <div className="bg-gray-50">
      <div className="max_width">
        <div className="pt-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight ">
            <span className="text-color_1">আমাদের</span>
            <span className="text-color_2"> ম্যানেজমেন্ট টিম</span>
          </h2>
        </div>
        <section className="my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-1 bg-gradient-to-r from-color_1 to-color_2"></div>
              <div className="p-6 text-center">
                <div className="inline-block rounded-full p-4 bg-gray-100 mb-4">
                  {/* <img
                    className="w-24 h-24 rounded-full object-cover"
                    src="/api/placeholder/150/150"
                    alt="Sarah Johnson"
                  /> */}
                  <FaUser className="text-7xl text-color_2" />
                </div>
                <h3 className="font-bold text-xl text-gray-800">
                  Dr. Nabil
                </h3>
                <p className="text-blue-600 font-medium">Founder & Chairman</p>
                <p className="text-sm text-gray-500 mt-2">ID: TM-001</p>

                <div className="mt-4 space-y-2">
                  <p className="text-sm flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    (555) 123-4567
                  </p>
                  <p className="text-sm flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    sarah@company.com
                  </p>
                </div>

                <div className="flex justify-center space-x-3 mt-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-color_2 transition-colors"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
