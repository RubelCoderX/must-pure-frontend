import Hero from "@/Pages/Home/Partials/Hero";
import { useEffect } from "react";
import ExtraSection from "./Partials/extraSection";
import QualityProcess from "./Partials/QualityProcess";
import Product from "./Partials/Product";
import Benefits from "./Partials/Benefits";
import Advertisement from "./Partials/Advertisement";

const Home = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Hero />

      <div className=" bg-[#FFFFFF] py-20 ">
        <ExtraSection />
      </div>
      <div>
        <QualityProcess />
        <Product />
        <Benefits />
        <Advertisement />
      </div>
    </div>
  );
};

export default Home;
