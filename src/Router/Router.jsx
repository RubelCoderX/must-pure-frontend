import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "@/Layout/Layout";
import Home from "@/Pages/Home/Home";
import NotFound from "@/Shared/ErrorPage/NotFound";

import { useEffect } from "react";


const Router = () => {
  // useEffect(() => {
  //   const ln = localStorage.getItem("ln");
  //   const savedTheme = localStorage.getItem('theme');
  //   if(!ln){
  //     localStorage.setItem("ln", 'bn');
  //   }
  //   if(!savedTheme){
  //     localStorage.setItem("theme", 'light');
  //   }
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
         
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
