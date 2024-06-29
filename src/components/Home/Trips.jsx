import SpecialHeading from "./SpecialHeading";
import IMG1 from "../../assets/Home/trips/trip1.jpeg";
import IMG2 from "../../assets/Home/trips/trip2.jpeg";
import IMG3 from "../../assets/Home/trips/trip3.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import CardTrip from "../CardTrip";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Trips() {
  return (
    <section id="trips" className="mt-[80px] container mx-auto relative">
      <SpecialHeading
        heading="Our Trips"
        title="We Offer Comforts Trips"
        desc="Enjoy different experience in every place you visit and discover
              new and addordable adventures of course."
      />

      <motion.div
        initial={{ x: -200 }}
        transition={{ duration: 0.7 }}
        whileInView={{
          x: 0,
        }}
        className="flex items-center justify-between flex-wrap "
      >
        <CardTrip img={IMG1} trip />
        <CardTrip img={IMG2} trip />
        <CardTrip img={IMG3} trip />
      </motion.div>
      <Link
        to="/packages"
        className="border border-main-color py-2 px-5 rounded-full flex items-center gap-3 text-slate-900 w-fit mx-auto mt-[50px] font-bold hover:bg-main-color hover:text-white duration-300 cursor-pointer"
      >
        <span>View All Posts</span>
        <div className="p-2 size-[40px] rounded-full border border-white bg-main-color flex items-center justify-center rotate-[-37deg]">
          <IoArrowForward className="text-white text-3xl font-light" />
        </div>
      </Link>
    </section>
  );
}
