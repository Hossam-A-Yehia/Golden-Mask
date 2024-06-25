import { IoIosArrowDown } from "react-icons/io";
import BreadCrumb from "../BreadCrumb";

export default function Hero() {
  return (
    <div className="bg-hero min-h-[300px] pt-[100px] bg-heroPackage relative flex justify-center items-center ">
      <div className=" bg-[#00000086] absolute top-0 left-0 w-full h-full ">
        <div className=" mx-[55px] flex flex-col justify-center items-start h-full">
          <BreadCrumb heading="Safari Packages" title="Trips" />
        </div>
      </div>
    </div>
  );
}
