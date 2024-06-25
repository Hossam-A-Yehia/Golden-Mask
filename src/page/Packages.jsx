import Blog from "../components/Home/Blog";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Hero from "../components/Packages/Hero";
import SideLeft from "../components/Packages/SideLeft";
import Trips from "../components/Packages/Trips";

export default function Packages() {
  document.title = "Golden Mask || Home";
  return (
    <>
      <Header whiteHeader />
      <Hero />
      <div className="container mx-auto grid grid-cols-3 gap-4 mt-8 px-4 md:px-0">
        <SideLeft />
        <Trips />
      </div>
      <Blog />
      <Footer />
    </>
  );
}
