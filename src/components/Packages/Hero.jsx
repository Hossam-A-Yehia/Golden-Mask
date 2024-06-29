import { IoIosArrowDown } from "react-icons/io";
import BreadCrumb from "../BreadCrumb";

export default function Hero({ title, heading, hight, bg }) {
  return (
    <div
      className={` ${hight} pt-[100px] ${bg} relative flex justify-center items-center`}
    >
      <div className=" bg-[#00000086]  absolute top-0 left-0 w-full h-full ">
        <div className="container mx-auto flex flex-col justify-center items-start h-full">
          <BreadCrumb heading={heading} title={title} />
        </div>
      </div>
    </div>
  );
}
