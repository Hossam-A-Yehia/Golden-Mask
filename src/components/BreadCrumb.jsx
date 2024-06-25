import { IoIosArrowForward } from "react-icons/io";

function BreadCrumb({ heading, title }) {
  return (
    <>
      <h1 className=" text-[51px] font-bold text-white">{heading}</h1>
      <div className="flex items-center justify-start gap-2 text-white">
        <span>Home</span>
        {title && (
          <>
            <IoIosArrowForward />
            <span>{title}</span>
          </>
        )}
      </div>
    </>
  );
}
export default BreadCrumb;
