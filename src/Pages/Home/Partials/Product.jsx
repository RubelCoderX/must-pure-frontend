import productImg from "../../../assets/Images/product.png"
import { HiArrowRight } from "react-icons/hi";
const Product = () => {
  return (
    <div className=" bg-pink-100 flex flex-col items-center justify-center px-8 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-4xl font-bold text-red-800 mb-2">
          OUR
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-red-800">
          PRODUCTS
        </h1>
      </div>

      {/* Product Images Container */}
      <div>
        <img src={productImg} alt="" className="w-[500px]" />
      </div>

      {/* Product Title */}
      <h2 className="text-3xl font-bold text-red-800 my-4">
        Kachi Ghani Mustard Oil
      </h2>

      {/* Description */}
      <p className="text-gray-700 text-center max-w-2xl mb-8 leading-relaxed">
        Discover our selection of products, thoughtfully crafted in various
        sizes, using the purest mustard seeds to deliver the best for you.
        Explore excellence in every product.
      </p>

      {/* Explore Button */}
      <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-8 rounded-sm transition-colors duration-300 flex items-center space-x-2">
        <span>EXPLORE NOW</span>
        <HiArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Product;
