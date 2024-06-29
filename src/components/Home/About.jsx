import IMG_BG from "../../assets/Home/about/about-bg.png";
import IMG1 from "../../assets/Home/about/about1.png";
import IMG2 from "../../assets/Home/about/about2.png";
import IMG3 from "../../assets/Home/about/about3.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className=" bg-[#FFE8E0] ">
      <div className="py-[60px] mt-[70px] container mx-auto relative">
        <div className="flex items-start justify-start gap-5 flex-wrap lg:flex-nowrap">
          <motion.div
            initial={{ x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{
              x: 0,
            }}
            className="w-full lg:w-1/2"
          >
            <img src={IMG_BG} alt="" />
          </motion.div>
          <div className="flex flex-col gap-4 w-full lg:w-1/2 px-3 md:px-0">
            <h1 className="text-[48px] font-bold text-center lg:text-start">
              About Us
            </h1>
            <p className="text-[#12121281] text-[20px] text-center lg:text-start">
              Enjoy different experience in every place you visit and discover
              new and addordable adventures of course.
            </p>
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                transition={{ duration: 0.7 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                className="flex gap-8 items-center py-6 px-8 bg-white rounded-xl shadow-lg"
              >
                <img src={IMG1} alt="about1" className="size-12 " />
                <div className="flex flex-col gap-2">
                  <h2 className="text-[20px] font-bold">Safari Exploring</h2>
                  <p className="text-[#636363] text-[18px] font-normal">
                    Vitae donec pellentsque a aliquam et ultricies auctor
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                className="flex gap-8 items-center py-6 px-8 bg-transparent rounded-xl "
              >
                <div className="bg-white p-3 size-[70px] rounded-2xl">
                  <img src={IMG2} alt="about1" className="size-12 " />
                </div>{" "}
                <div className="flex flex-col gap-2">
                  <h2 className="text-[20px] font-bold">Cultures Exploring</h2>
                  <p className="text-[#636363] text-[18px] font-normal">
                    Vitae donec pellentsque a aliquam et ultricies auctor
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                transition={{ duration: 1 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                className="flex gap-8 items-center py-6 px-8 bg-transparent rounded-xl "
              >
                <div className="bg-white p-3 size-[70px] rounded-2xl">
                  <img src={IMG3} alt="about1" className="size-12 " />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[20px] font-bold">Healing Services</h2>
                  <p className="text-[#636363] text-[18px] font-normal">
                    Vitae donec pellentsque a aliquam et ultricies auctor
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
