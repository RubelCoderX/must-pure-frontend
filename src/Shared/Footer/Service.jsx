import { FaRecycle, FaRocket } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsCalendar2DateFill } from "react-icons/bs";

const Service = () => {
  return (
    <div className="px-1 bg-color_4 py-8 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        <div className="flex justify-center items-center py-6 lg:py-12 px-4 bg-white border-2 hover:border-color_1 duration-300 group">
          <div className="group-hover:scale-105 duration-300 flex gap-5 items-center">
            <FaRocket className="text-4xl" />
            <div>
              <h1 className="uppercase text-xl font_title font-semibold group-hover:text-color_2">
                Free Shipping
              </h1>
              <h3 className="text-gray-400">online consultations</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-6 lg:py-12 px-4 bg-white border-2 hover:border-color_1 duration-300 group">
          <div className="group-hover:scale-105 duration-300 flex gap-5 items-center">
            <TfiHeadphoneAlt className="text-4xl" />
            <div>
              <h1 className="uppercase text-xl font_title font-semibold group-hover:text-color_2">
                24 Hour Support
              </h1>
              <h3 className="text-gray-400">on order over 500৳</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-6 lg:py-12 px-4 bg-white border-2 hover:border-color_1 duration-300 group">
          <div className="group-hover:scale-105 duration-300 flex gap-5 items-center">
            <BsCalendar2DateFill className="text-4xl" />
            <div>
              <h1 className="uppercase text-xl font_title font-semibold group-hover:text-color_2">
                DAILY UPDATES
              </h1>
              <h3 className="text-gray-400">Check out store for latest</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-6 lg:py-12 px-4 bg-white border-2 hover:border-color_1 duration-300 group">
          <div className="group-hover:scale-105 duration-300 flex gap-5 items-center">
            <FaRecycle className="text-4xl" />
            <div>
              <h1 className="uppercase text-xl font_title font-semibold group-hover:text-color_2">
                30-Days Return
              </h1>
              <h3 className="text-gray-400">cashback guarantee</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
