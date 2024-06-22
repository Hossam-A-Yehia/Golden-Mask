import SpecialHeading from "./SpecialHeading";
import IMG1 from "../../assets/Home/trips/trip1.jpeg";
import IMG2 from "../../assets/Home/trips/trip2.jpeg";
import IMG3 from "../../assets/Home/trips/trip3.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

export default function Trips() {
  return (
    <section id="trips" className="mt-[80px] container mx-auto relative">
      <SpecialHeading
        heading="Our Trips"
        title="We Offer Comforts Trips"
        desc="Enjoy different experience in every place you visit and discover
              new and addordable adventures of course."
      />

      <div className="flex items-center justify-between flex-wrap ">
        <div className="w-full md:w-1/2 lg:w-1/3 px-[25px] mb-[30px] lg:mb-0">
          <div className="flex flex-col gap-3 w-full  p-5 border-[1px] border-slate-200 rounded-[40px]   hover:-translate-y-4 duration-300 hover:border-main-color shadow-lg">
            <div className="flex relative max-max-w-[346px] h-[353px] ">
              <div className="bg-red-400 absolute right-4 top-4 size-16 rounded-full flex items-center justify-center text-white text-[19px] font-bold">
                20%
              </div>
              <div className="bg-white bottom-[-13px] left-[-10px] size-[80px] absolute flex items-center justify-center rounded-tr-[33px] ">
                <div className="p-3 size-[50px] rounded-full border border-main-color flex items-center justify-center rotate-[-37deg]">
                  <IoArrowForward className="text-main-color text-3xl font-light" />
                </div>
              </div>
              <img src={IMG1} alt="serv1" className="  rounded-[40px] w-full" />
            </div>{" "}
            <h2 className="text-lg lg:text-[22px] font-bold mt-3 ">
              Pyramids og Giza, Sakkara Pyramids & Memphis
            </h2>
            <ul className="flex flex-col">
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                The Valley Temple in Giza Plateau.
              </li>
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                Sakkara Pyramids (The Step Pyramids).
              </li>
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                The Statue of Ramses ll in Memphis.
              </li>
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                Traditional Egyption Meai (Grilled Meats).
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <FaLocationDot className="text-main-color" />{" "}
                <span className="text-[16.28px] text-[#8F8F8F]">
                  Giza, Egypt
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-[16.28px] text-[#8F8F8F]">
                  Per Person
                </span>
                <span className="text-[28px] text-main-color font-extrabold">
                  100$
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-[25px] mb-[30px] lg:mb-0">
          <div className="flex flex-col gap-3 w-full  p-5 border-[1px] border-main-color rounded-[40px]   hover:-translate-y-4 duration-300  shadow-lg">
            <div className="flex relative max-w-[346px] h-[353px] ">
              <div className="bg-red-400 absolute right-4 top-4 size-16 rounded-full flex items-center justify-center text-white text-[19px] font-bold">
                20%
              </div>
              <div className="bg-white bottom-[-13px] left-[-10px] size-[80px] absolute flex items-center justify-center rounded-tr-[33px] ">
                <div className="p-3 size-[50px] rounded-full border border-main-color flex items-center justify-center rotate-[-37deg] bg-main-color">
                  <IoArrowForward className="text-white text-3xl font-light" />
                </div>
              </div>
              <img src={IMG2} alt="serv1" className="  rounded-[40px]" />
            </div>{" "}
            <h2 className="text-lg lg:text-[22px] font-bold mt-3 ">
              THe Best of Luxor and Aswan in 4 Days from Luxor
            </h2>
            <ul className="flex flex-col">
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                The Valley Temple in Giza Plateau.
              </li>
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                Sakkara Pyramids (The Step Pyramids).
              </li>
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                The Statue of Ramses ll in Memphis.
              </li>
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                Traditional Egyption Meai (Grilled Meats).
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <FaLocationDot className="text-main-color" />{" "}
                <span className="text-[16.28px] text-[#8F8F8F]">
                  Giza, Egypt
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-[16.28px] text-[#8F8F8F]">
                  Per Person
                </span>
                <span className="text-[28px] text-main-color font-extrabold">
                  100$
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-[25px] mb-[30px] lg:mb-0">
          <div className="flex flex-col gap-3 w-full  p-5 border-[1px] border-slate-200 rounded-[40px]   hover:-translate-y-4 duration-300 hover:border-main-color shadow-lg">
            <div className="flex relative max-w-[346px] h-[353px] ">
              <div className="bg-red-400 absolute right-4 top-4 size-16 rounded-full flex items-center justify-center text-white text-[19px] font-bold">
                20%
              </div>
              <div className="bg-white bottom-[-13px] left-[-10px] size-[80px] absolute flex items-center justify-center rounded-tr-[33px] ">
                <div className="p-3 size-[50px] rounded-full border border-main-color flex items-center justify-center rotate-[-37deg]">
                  <IoArrowForward className="text-main-color text-3xl font-light" />
                </div>
              </div>
              <img src={IMG3} alt="serv1" className="  rounded-[40px]" />
            </div>{" "}
            <h2 className="text-lg lg:text-[22px] font-bold mt-3 ">
              Egyption Museum, Citadel & Old Cairo
            </h2>
            <ul className="flex flex-col">
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                The Valley Temple in Giza Plateau.
              </li>
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                Sakkara Pyramids (The Step Pyramids).
              </li>
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                The Statue of Ramses ll in Memphis.
              </li>
              <li className=" font-normal text-[16px] ml-6 text-[#5D5D5D] list-disc">
                Traditional Egyption Meai (Grilled Meats).
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <FaLocationDot className="text-main-color" />{" "}
                <span className="text-[16.28px] text-[#8F8F8F]">
                  Giza, Egypt
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-[16.28px] text-[#8F8F8F]">
                  Per Person
                </span>
                <span className="text-[28px] text-main-color font-extrabold">
                  100$
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-main-color py-2 px-5 rounded-full flex items-center gap-3 text-slate-900 w-fit mx-auto mt-[50px] font-bold hover:bg-main-color hover:text-white duration-300 cursor-pointer">
        <span>View All Posts</span>
        <div className="p-2 size-[40px] rounded-full border border-white bg-main-color flex items-center justify-center rotate-[-37deg]">
          <IoArrowForward className="text-white text-3xl font-light" />
        </div>
      </div>
    </section>
  );
}
