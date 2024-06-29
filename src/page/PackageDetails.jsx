import { FaLocationDot, FaStar } from "react-icons/fa6";
import Header from "../components/Layout/Header";
import Hero from "../components/Packages/Hero";
import Slider from "../components/PackagesDetails/Slieder";
import SideLeft from "../components/PackagesDetails/SideLeft";
import Options from "../components/PackagesDetails/Options";
import Footer from "../components/Layout/Footer";
import Blog from "../components/Home/Blog";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PackageDetails() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header whiteHeader />
      <Hero
        heading="All Trips"
        title="Trips"
        hight="min-h-[150px]"
        bg="bg-heroPackage"
      />
      <div className="container mx-auto mt-4">
        <h1 className="text-[30px] font-semibold">
          Pyramids of Giza, Sakkara Pyramids & Memphis
        </h1>
        <div className="flex gap-5 items-center mt-[15px] mb-[50px] justify-start">
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-main-color" />{" "}
            <span className="text-[#8F8F8F] text-[13px]">
              Giza Plateau, Pyramids and Sphinx.
            </span>
          </div>
          <span className="w-[1px] h-[15px] bg-[#8F8F8F]"></span>
          <div className="flex items-center gap-2">
            <ul className="flex gap-[2px]">
              <FaStar className="text-main-color text-md" />
              <FaStar className="text-main-color text-md" />
              <FaStar className="text-main-color text-md" />
              <FaStar className="text-main-color text-md" />
              <FaStar className="text-main-color text-md" />
            </ul>
            <span className="text-[#8F8F8F] text-[13px]">(348 review)</span>
          </div>
        </div>
        <Slider />
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-8 mt-8 px-4 md:px-0">
        <Options />
        <SideLeft />
      </div>
      <Blog />
      <Footer />
    </>
  );
}
