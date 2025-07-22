/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import { menu } from "./menus";
import logo from "../../../assets/logo/Logo for Website.png";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const SmallMenu = ({
  setOpen,
  open,

  ln,
}) => {
  // Disable body scroll when the menubar is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
      return () => {
        document.body.classList.remove("no-scroll");
      };
    }
  }, [open]);

  const handleClose = (path) => {
    path === "/article" ? setOpen(true) : setOpen(false);
  };

  return (
    <div className="bg-white dark:bg-dark_color_3 h-screen overflow-y-auto">
      <div className="flex justify-between items-center py-3 px-6">
        <h2 className="text-white">Logo</h2>
        <IoCloseSharp
          onClick={() => setOpen(!open)}
          className="text-3xl text-color_2"
        />
      </div>
      <hr />
      <div className="py-3">
        <ul className="flex flex-col">
          {menu.map((item, idx) => (
            <li key={idx} className="relative group">
              {/* Main Menu */}
              <NavLink
                onClick={() => handleClose(item.path)}
                to={item.path}
                className={({ isActive, isPending }) =>
                  `flex items-center gap-1 text-nowrap dark:border-dark_color_3/40 ${
                    isPending
                      ? "pending"
                      : isActive
                      ? "px-4 py-2 text-dark_color_3 dark:text-dark_color_4 font-bold duration-200"
                      : "px-4 py-2 text-dark_color_3 dark:text-dark_color_4 dark:hover:text-dark_color_2  duration-200"
                  }`
                }
              >
                {ln === "bn" ? item.name_bn : item.name_en}
                {item.children && (
                  <FiChevronDown className="mt-[2px]" size={16} />
                )}
              </NavLink>

              {/* First Level Dropdown */}
              {item.children && (
                <ul className="absolute left-0 top-full flex flex-col bg-white dark:bg-dark_color_3 shadow-lg z-20 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top duration-300">
                  {item.children.map((child, cIdx) => (
                    <li key={cIdx} className="relative group/child">
                      {/* Conditional: NavLink or span if no path */}
                      {child.path ? (
                        <NavLink
                          to={child.path}
                          className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark_color_5 whitespace-nowrap"
                        >
                          <span>
                            {ln === "bn" ? child.name_bn : child.name_en}
                          </span>
                          {child.children && <FiChevronRight size={14} />}
                        </NavLink>
                      ) : (
                        <span className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark_color_2 whitespace-nowrap cursor-default">
                          {ln === "bn" ? child.name_bn : child.name_en}
                          {child.children && <FiChevronRight size={14} />}
                        </span>
                      )}

                      {/* Second Level Dropdown */}
                      {child.children && (
                        <ul className="absolute left-1/2 top-0 flex flex-col bg-white dark:bg-dark_color_3 shadow-lg z-30 opacity-0 scale-y-0 group-hover/child:opacity-100 group-hover/child:scale-y-100 transition-all transform origin-top duration-300">
                          {child.children.map((subChild, sIdx) => (
                            <li key={sIdx}>
                              <NavLink
                                onClick={handleClose}
                                to={subChild.path}
                                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark_color_5 whitespace-nowrap"
                              >
                                {ln === "bn"
                                  ? subChild.name_bn
                                  : subChild.name_en}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SmallMenu;
