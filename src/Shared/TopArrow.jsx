import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BsRocketFill } from "react-icons/bs";

const TopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <div
      className={` flex justify-center rounded-tl-md rounded-bl-md fixed right-0 bg-color_1 text-white p-2 lg:py-3 lg:px-4 hover:bg-color_2 transition-all duration-500 z-50 ${
        isVisible ? "bottom-16" : "-bottom-24"
      } `}
    >
      <ul className="space-y-1 flex flex-col items-center">
        <button onClick={scrollToTop}>
          <BsRocketFill className="text-2xl" />
        </button>
      </ul>
    </div>
  );
};

export default TopArrow;
