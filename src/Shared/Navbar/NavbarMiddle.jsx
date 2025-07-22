import { MdOutlineMenu } from "react-icons/md";
import SmallMenu from "./Partial/SmallMenu";
import { Link, NavLink } from "react-router";
import { useContext, useRef, useState } from "react";
import { menu } from "./Partial/menus";
import { BasicContext } from "@/ContextApi/BasicProvider";
import { FiChevronDown, FiChevronRight, FiSearch, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";

const NavbarMiddle = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(localStorage.getItem("ln"));
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { ln, setLn } = useContext(BasicContext);

  const searchInputRef = useRef(null);

  return (
    <div className="px-2 lg:px-0">
      <div className="max_width flex flex-row-reverse lg:flex-row justify-between items-center w-full">
        <div className="flex-1 flex justify-end lg:flex-0 lg:hidden">
          <MdOutlineMenu onClick={() => setOpen(!open)} className="text-2xl" />
        </div>
        <div className="lg:w-2/12 flex justify-center lg:justify-start">
          <Link to="/" className="lg:text-4xl font-bold text-black">
            {/* <img src={logo} className="w-40" alt="" /> */}
            LOGO
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-8/12">
          <ul className="flex items-center gap-3 text-xl font-font_bangla relative">
            {menu.map((item, idx) => (
              <li key={idx} className="relative group">
                {/* Main Menu */}
                <NavLink
                  to={item.path || "#"}
                  className={({ isActive, isPending }) =>
                    `flex items-center gap-1  text-nowrap  ${
                      isPending
                        ? "pending"
                        : isActive
                        ? "px-4 py-5   duration-200"
                        : "px-4 py-5   hover:border-b duration-200"
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
                            {child.children && <FiChevronRight size={14} />}
                          </NavLink>
                        ) : (
                          <span className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark_color_2 whitespace-nowrap cursor-default">
                            {child.children && <FiChevronRight size={14} />}
                          </span>
                        )}

                        {/* Second Level Dropdown */}
                        {child.children && (
                          <ul className="absolute left-full top-0 w-[320px] flex flex-col bg-white dark:bg-dark_color_3 shadow-lg z-30 opacity-0 scale-y-0 group-hover/child:opacity-100 group-hover/child:scale-y-100 transition-all transform origin-top duration-300">
                            {child.children.map((subChild, sIdx) => (
                              <li key={sIdx}>
                                <Link
                                  to={`article`}
                                  state={{ id: subChild.id }}
                                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark_color_5 whitespace-nowrap"
                                >
                                  {ln === "bn"
                                    ? subChild.name_bn
                                    : subChild.name_en}
                                </Link>
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
        <div className="lg:w-2/12 flex justify-center lg:justify-end items-center">
          <div className="relative sm:flex items-center hidden">
            <input
              type="text"
              className="border-2 border-black rounded-full px-2 py-1"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden absolute top-0 ${
          open ? "left-0 w-[100vw]" : "-left-[100%]"
        } duration-300 z-30 w-full`}
      >
        <SmallMenu
          setOpen={setOpen}
          open={open}
          select={select}
          ln={ln}
          setLn={setLn}
          setSelect={setSelect}
        />
      </div>
    </div>
  );
};

export default NavbarMiddle;
