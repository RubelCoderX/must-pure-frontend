/* eslint-disable react/prop-types */
import { BasicContext } from "@/ContextApi/BasicProvider";
import { useContext } from "react";

const Sidebar = ({ categories, featuredArticles, setId }) => {
  const { ln } = useContext(BasicContext);
  return (
    <div className="w-full lg:w-1/4">
      {/* <div className="bg-white dark:bg-dark_color_3 dark:text-dark_color_4 rounded shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] dark:shadow-[#1d181d] p-4 mb-6">
        <h3 className="text-xl font-bold mb-3">{`সার্চ করুন`}</h3>
        <div className="relative">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="অনুসন্ধান করুন"
            className="border border-gray-300 dark:bg-dark_color_3 rounded py-1 px-3 w-full text-sm focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <Search size={16} />
          </button>
        </div>
      </div> */}

      <div className="bg-white dark:bg-dark_color_3 dark:text-dark_color_4 rounded shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] dark:shadow-[#1d181d] p-4 mb-6">
        <h3 className="text-xl font-bold mb-3">{ln === 'bn' ? "ক্যাটেগরি" : 'Category'}</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li onClick={() => setId(category.id)} key={index}>
              <button className="text-gray-700 dark:text-dark_color_4 hover:text-color_2 dark:hover:text-dark_color_2">
                {ln === "bn" ? category.name_bn : category.name_en}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="bg-white dark:bg-dark_color_3 dark:text-dark_color_4 rounded shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] dark:shadow-[#1d181d] p-4 mb-6">
        <h3 className="text-xl font-bold mb-3">সর্বাধিক আর্টিকেল</h3>
        <ul className="space-y-3">
          {featuredArticles.map((title, index) => (
            <li key={index} className="text-sm">
              <a
                href="#"
                className="text-gray-700 dark:text-dark_color_4 hover:text-color_2 dark:hover:text-dark_color_2"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Sidebar;
