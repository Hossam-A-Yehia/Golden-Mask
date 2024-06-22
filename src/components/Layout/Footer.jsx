import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import IMG from "/logo.svg";
export default function Footer() {
  return (
    <section className=" bg-[#040914] relative">
      <div className="bg-[url(/footer.png)] absolute top-0 left-0 w-full h-full opacity-[0.08] "></div>
      <div className="py-[60px] mt-[70px] container mx-auto relative  ">
        <div className="flex justify-between items-center flex-wrap text-center lg:text-start">
          <div className="flex flex-col gap-5 items-center mb-[30px] lg:mb-0 lg:items-start w-full md:w-1/2 lg:w-2/5 m ">
            <img src={IMG} alt="" className="w-[300px]" />
            <p className="text-[15px] text-white w-[400px]">
              Book your trip in minute, get fullControl for much longer Book
              youret full Control for much longer.Book your trip in minute, get
              full Control for much longer.
            </p>
            <div className="flex items-center gap-3">
              <FaXTwitter className="text-white text-2xl" />
              <FaLinkedin className="text-white text-2xl" />
              <FaFacebook className="text-white text-2xl" />
            </div>
          </div>
          <ul className="flex flex-col gap-3 w-1/3 md:w-1/2 lg:w-1/5 p-3">
            <h2 className="text-[22px] font-bold text-white">Company</h2>
            <li className="text-[18px] font-medium text-[#AFAFAF]">About</li>
            <li className="text-[18px] font-medium text-[#AFAFAF]">
              Contact Us
            </li>
            <li className="text-[18px] font-medium text-[#AFAFAF]">Help/FAQ</li>
          </ul>
          <ul className="flex flex-col gap-3 w-1/3 md:w-1/2 lg:w-1/5 p-3">
            <h2 className="text-[22px] font-bold text-white">Packages</h2>
            <li className="text-[18px] font-medium text-[#AFAFAF]">Luxor</li>
            <li className="text-[18px] font-medium text-[#AFAFAF]">Aswan</li>
            <li className="text-[18px] font-medium text-[#AFAFAF]">Fayoum</li>
          </ul>
          <ul className="flex flex-col gap-3  w-1/3 md:w-1/2 lg:w-1/5 p-3 ">
            <h2 className="text-[22px] font-bold text-white">More</h2>
            <li className="text-[18px] font-medium text-[#AFAFAF]">
              Snorkillinf
            </li>
            <li className="text-[18px] font-medium text-[#AFAFAF]">Diving</li>
            <li className="text-[18px] font-medium text-[#AFAFAF]">Healing</li>
          </ul>
        </div>
        <div className="mt-8 mb-5 bg-slate-600 w-full h-[1px]"></div>
        <div className="flex justify-center items-center text-white ">
          <span className="text-[14px] font-medium ">
            All rights reserved@Goldenmask.com
          </span>
        </div>
      </div>
    </section>
  );
}
