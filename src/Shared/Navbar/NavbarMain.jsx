
import { NavLink } from "react-router";

const NavbarMain = () => {

  return (
    <div className="bg-color_2 relative shadow-md">
      <div className="max-w-7xl mx-auto text-black flex justify-between">
        <div>
          <ul className="flex items-center gap-3 text-xl">
            <NavLink
              to={"/shop"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "px-4 py-5 bg-color_4/20"
                  : "px-4 py-5"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "px-4 py-5 bg-color_4/20"
                  : "px-4 py-5"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/frame"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "px-4 py-5 bg-color_4/20"
                  : "px-4 py-5"
              }
            >
              Customize Frame
            </NavLink>
            <NavLink
              to={"/canvas"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "px-4 py-5 bg-color_4/20"
                  : "px-4 py-5"
              }
            >
              Customize Canvas
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "px-4 py-5 bg-color_4/20"
                  : "px-4 py-5"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
