import { MdEdit } from "react-icons/md";
import IMG from "../../assets/Home/Avatar.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SideInfo({ profileType, setprofileType }) {
  return (
    <motion.div
      initial={{ x: -200 }}
      transition={{ duration: 0.7 }}
      whileInView={{
        x: 0,
      }}
      className="col-span-3 lg:col-span-1  flex flex-col gap-6"
    >
      <div className=" rounded-[40px] border-[1px] bg-[#EBEBEB] border-slate-200  p-5 flex items-center justify-center flex-col">
        <div className="relative">
          <img
            className="size-[120px] rounded-full object-cover"
            src={IMG}
            alt=""
          />
          <span className="bottom-0 left-[80px] absolute  size-[40px] bg-main-color border-[4px] border-white  rounded-full flex items-center justify-center">
            <MdEdit color="white" />
          </span>
        </div>
        <h1 className=" text-[#1C2B38] text-[25px] font-bold mt-3">
          Masum Rana
        </h1>
        <div className="flex gap-5 items-center mt-[15px] mb-[20px] justify-start">
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-[#495560]" />{" "}
            <span className="text-[#495560] text-[15px] font-semibold">
              Gothenburg
            </span>
          </div>
          <span className="w-[1px] h-[15px] bg-[#8F8F8F]"></span>
          <div className="flex items-center gap-2">
            <FaBirthdayCake />
            <span className="text-[#495560] text-[15px] font-semibold">
              15th February
            </span>
          </div>
        </div>
        <ul>
          <button
            onClick={() => setprofileType("info")}
            className={`${
              profileType === "info"
                ? "bg-main-color text-white"
                : "text-slate-900 bg-transparent border border-main-color"
            } mt-4 w-full  px-8 py-4 rounded-full text-xl cursor-pointer border-main-color hover:bg-main-color hover:text-white duration-200`}
          >
            Profile Information
          </button>
          <button
            onClick={() => setprofileType("booking")}
            className={`${
              profileType === "booking"
                ? "bg-main-color text-white"
                : "text-slate-900 bg-transparent border border-main-color"
            } mt-4 w-full  px-8 py-4 rounded-full text-xl cursor-pointer border-main-color hover:bg-main-color hover:text-white duration-200`}
          >
            Booking History
          </button>
          <button
            onClick={() => setprofileType("payment")}
            className={`${
              profileType === "payment"
                ? "bg-main-color text-white"
                : "text-slate-900 bg-transparent border border-main-color"
            } mt-4 w-full  px-8 py-4 rounded-full text-xl cursor-pointer  hover:bg-main-color hover:text-white duration-200`}
          >
            Payments
          </button>
        </ul>
      </div>
    </motion.div>
  );
}
