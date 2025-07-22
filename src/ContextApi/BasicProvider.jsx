/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BasicContext = createContext(null);

const BasicProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const sidebarRef = useRef(null);
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const [cartBar, setCartBar] = useState(false);

  // Language
  const language = localStorage.getItem('ln');
  const [ln, setLn] = useState(language);

  // filter state
  const [categoryId, setCategoryId] = useState([]);
  const [range, setRange] = useState([0]);
  // Search State
  const [value, setValue] = useState(null);

  const info = {
    sidebarOpen,
    setSideBarOpen,
    open,
    setOpen,
    sidebarRef,
    cartBar,
    setCartBar,
    categoryId,
    setCategoryId,
    range,
    setRange,
    setValue,
    value,
    setLn,
    ln
  };
  return <BasicContext.Provider value={info}>{children}</BasicContext.Provider>;
};

export default BasicProvider;
