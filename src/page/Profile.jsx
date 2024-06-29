import Header from "../components/Layout/Header";
import Hero from "../components/Packages/Hero";
import Footer from "../components/Layout/Footer";
import SideInfo from "../components/Profile/SideInfo";
import FormInfo from "../components/Profile/FormInfo";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const [profileType, setprofileType] = useState("info");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header whiteHeader />
      <Hero
        heading="Profile"
        title="Profile Information"
        hight="min-h-[150px]"
        bg="bg-heroPackage"
      />

      <div className="container mx-auto grid grid-cols-3 gap-8 mt-10 px-4 md:px-0 overflow-hidden">
        <SideInfo profileType={profileType} setprofileType={setprofileType} />
        <FormInfo profileType={profileType} setprofileType={setprofileType} />
      </div>
      <Footer />
    </>
  );
}
