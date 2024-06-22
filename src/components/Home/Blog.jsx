import SpecialHeading from "./SpecialHeading";
import IMG1 from "../../assets/Home/blog/blog1.jpeg";
import IMG2 from "../../assets/Home/blog/blog2.jpeg";
import IMG3 from "../../assets/Home/blog/blog3.jpeg";
import IMG4 from "../../assets/Home/blog/blog4.jpeg";
import { IoArrowForward } from "react-icons/io5";
export default function Blog() {
  return (
    <section
      id="blog"
      className="mt-[80px] container mx-auto relative px-3 lg:px-0"
    >
      <SpecialHeading heading="Our Blog" title="Our Blog and Articles" />
      <div className="flex items-center justify-between flex-wrap ">
        <div className="flex flex-col gap-9 w-full lg:w-1/2 mb-[36px] lg:mb-0">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={IMG1}
              alt=""
              className="rounded-xl w-full md:w-[285.11px] min-h-[216.08px]"
            />
            <div className="flex flex-col gap-2">
              <span className="text-main-color font-semibold text-[18px]">
                Insight
              </span>
              <h1 className="font-semibold text-[24px]">Delphine House</h1>
              <p className="text-[16.01px] text-[#767681]">
                Li Europan lingues es membres del sam lor separat existentie es
                un myth...
              </p>
              <div className="border border-white py-2  rounded-full flex items-center gap-3 text-black">
                <span className="font-semibold text-[16px]">Reed More</span>
                <div className="p-2 size-[40px] rounded-full border border-main-color bg-main-color flex items-center justify-center rotate-[-37deg]">
                  <IoArrowForward className="text-white text-3xl font-light" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={IMG3}
              alt=""
              className="rounded-xl w-full md:w-[285.11px] min-h-[216.08px]"
            />
            <div className="flex flex-col gap-2">
              <span className="text-main-color font-semibold text-[18px]">
                Insight
              </span>
              <h1 className="font-semibold text-[24px]">
                Sauna & Spa – healing
              </h1>
              <p className="text-[16.01px] text-[#767681]">
                Li Europan lingues es membres del sam lor separat existentie es
                un myth...
              </p>
              <div className="border border-white py-2  rounded-full flex items-center gap-3 text-black">
                <span className="font-semibold text-[16px]">Reed More</span>
                <div className="p-2 size-[40px] rounded-full border border-main-color bg-main-color flex items-center justify-center rotate-[-37deg]">
                  <IoArrowForward className="text-white text-3xl font-light" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 w-full lg:w-1/2 mb-[36px] lg:mb-0">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={IMG2}
              alt=""
              className="rounded-xl w-full md:w-[285.11px] min-h-[216.08px]"
            />
            <div className="flex flex-col gap-2">
              <span className="text-main-color font-semibold text-[18px]">
                Insight
              </span>
              <h1 className="font-semibold text-[24px]">
                Exploring Snorkeling Sport in Egypt
              </h1>
              <p className="text-[16.01px] text-[#767681]">
                Li Europan lingues es membres del sam lor separat existentie es
                un myth...
              </p>
              <div className="border border-white py-2  rounded-full flex items-center gap-3 text-black">
                <span className="font-semibold text-[16px]">Reed More</span>
                <div className="p-2 size-[40px] rounded-full border border-main-color bg-main-color flex items-center justify-center rotate-[-37deg]">
                  <IoArrowForward className="text-white text-3xl font-light" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={IMG4}
              alt=""
              className="rounded-xl min-w-full lg:min-w-[285.11px] h-[216.08px]"
            />
            <div className="flex flex-col gap-2">
              <span className="text-main-color font-semibold text-[18px]">
                Insight
              </span>
              <h1 className="font-semibold text-[24px]">Ain Mousa</h1>
              <p className="text-[16.01px] text-[#767681]">
                Li Europan lingues es membres del sam lor separat existentie es
                un myth...
              </p>
              <div className="border border-white py-2  rounded-full flex items-center gap-3 text-black">
                <span className="font-semibold text-[16px]">Reed More</span>
                <div className="p-2 size-[40px] rounded-full border border-main-color bg-main-color flex items-center justify-center rotate-[-37deg]">
                  <IoArrowForward className="text-white text-3xl font-light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-main-color py-2 px-5 rounded-full flex items-center gap-3 text-slate-900 w-fit mx-auto mt-[50px] font-bold hover:bg-main-color hover:text-white duration-300 cursor-pointer">
        <span>View All Blogs</span>
        <div className="p-2 size-[40px] rounded-full border border-white bg-main-color flex items-center justify-center rotate-[-37deg]">
          <IoArrowForward className="text-white text-3xl font-light" />
        </div>
      </div>
    </section>
  );
}
