import About from "../components/Home/About";
import Blog from "../components/Home/Blog";
import Hero from "../components/Home/Hero";
import MorePlaces from "../components/Home/MorePlaces";
import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonials";
import Trips from "../components/Home/Trips";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

export default function Home() {
  document.title = "Golden Mask || Home";
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Services />
      <About />
      <Trips />
      <MorePlaces />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
}
