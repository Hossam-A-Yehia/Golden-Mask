import SpecialHeading from "./SpecialHeading";
import IMG1 from "../../assets/Home/service1.png";
import IMG2 from "../../assets/Home/service2.png";
import IMG3 from "../../assets/Home/service3.png";
import IMG_BG from "../../assets/Home//pg-serv.png";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      id="services"
      className="mt-[80px] container mx-auto relative"
    >
      <SpecialHeading heading="Our Services" title="We Offer Best Services" />
      <img
        src={IMG_BG}
        alt=""
        className=" hidden lg:block absolute w-[200px] right-[25px] top-[35px] "
      />
      <div className="flex items-center justify-between flex-wrap ">
        <div className="w-full md:w-1/2 lg:w-1/4 px-[25px] mb-[30px] lg:mb-0">
          <div className="flex flex-col gap-5 w-full  px-6 py-[50px] border-[1px] border-slate-200 rounded-[40px] items-center text-center min-h-[300px] max-h-[300px] hover:-translate-y-4 duration-300 hover:border-main-color shadow-lg">
            <div className="flex relative w-[40px] h-[60px] ">
              <img
                src={IMG1}
                alt="serv1"
                className="size-[60px] absolute z-10"
              />
              <div className=" absolute size-[50px] bg-[#FFF1DA] top-[-10px] left-3 rounded-xl z-0"></div>
            </div>{" "}
            <h2 className="text-lg lg:text-[17px] font-semibold ">
              Exploring Different Cultures
            </h2>
            <p className="text-sm font-semibold text-gray-500 leading-5">
              Built Wicket longer admira do barton vanity itself do in it
            </p>
          </div>
        </div>
        <div className=" w-full md:w-1/2 lg:w-1/4 px-[25px] mb-[30px] lg:mb-0 relative  ">
          <div className=" absolute bg-main-color bottom-[-25px] left-6 size-[100px] rounded-r-2xl  z-[-1]"></div>
          <div className="flex flex-col gap-5 w-full relative z-10  px-6 py-[50px] border-[1px] bg-white border-main-color hover:-translate-y-4 duration-300 rounded-[40px] items-center text-center min-h-[300px] max-h-[300px] shadow-lg">
            <div className="flex relative w-[40px] h-[60px]">
              <img
                src={IMG2}
                alt="serv1"
                className="size-[60px] absolute z-10"
              />
              <div className=" absolute size-[50px] bg-[#FFF1DA] top-[-10px] left-3 rounded-xl z-0"></div>
            </div>{" "}
            <h2 className="text-lg font-semibold">Best Transportation</h2>
            <p className="text-sm font-semibold text-gray-500 leading-5">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>
        </div>
        <div className=" w-full md:w-1/2 lg:w-1/4 px-[25px] mb-[30px] lg:mb-0">
          <div className="flex flex-col gap-5 w-full  px-6 py-[50px] border-[1px] border-slate-200 rounded-[40px] items-center text-center min-h-[300px] max-h-[300px] hover:-translate-y-4 duration-300 hover:border-main-color shadow-lg">
            <div className="flex relative w-[40px] h-[60px]">
              <img
                src={IMG3}
                alt="serv1"
                className="size-[60px] absolute z-10"
              />
              <div className=" absolute size-[50px] bg-[#FFF1DA] top-[-10px] left-3 rounded-xl z-0"></div>
            </div>
            <h2 className="text-lg font-semibold">Local Events</h2>
            <p className="text-sm font-semibold text-gray-500 leading-5">
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </div>
        </div>
        <div className=" w-full md:w-1/2 lg:w-1/4 px-[25px] mb-[30px] lg:mb-0">
          <div className="flex flex-col gap-5 w-full  px-6 py-[50px] border-[1px] border-slate-200 rounded-[40px] items-center text-center min-h-[300px] max-h-[300px] hover:-translate-y-4 duration-300 hover:border-main-color shadow-lg">
            <div className="flex relative w-[40px] h-[60px] ">
              <img
                src={IMG1}
                alt="serv1"
                className="size-[60px] absolute z-10"
              />
              <div className=" absolute size-[50px] bg-[#FFF1DA] top-[-10px] left-3 rounded-xl z-0"></div>
            </div>{" "}
            <h2 className="text-lg font-semibold">Customization</h2>
            <p className="text-sm font-semibold text-gray-500 leading-5">
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
