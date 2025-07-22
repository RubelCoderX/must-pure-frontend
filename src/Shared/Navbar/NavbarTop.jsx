import { IoCallSharp, IoMail } from "react-icons/io5";

const NavbarTop = () => {
  return (
    <div className="bg-color_1 py-2 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center">
        <div className="flex items-center gap-2 text-xs lg:text-sm">
          <h2 className="flex items-center gap-1">
            <span>
              {" "}
              <IoMail className="text-color_2 text-lg" />{" "}
            </span>
            <span className="text-color_4">drnabil.rpmc@gmail.com</span>
          </h2>
          <div className="h-4 w-[1px] bg-white"></div>
          <h2 className="flex items-center gap-1">
            <span>
              {" "}
              <IoCallSharp className="text-color_2 text-lg" />{" "}
            </span>
            <span className="text-color_4">+8801717377737</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
