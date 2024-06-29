import { IoArrowForward } from "react-icons/io5";
import IMG1 from "../../assets/Home/places/Place1.jpeg";

export default function SideLeft() {
  return (
    <div className="col-span-3 lg:col-span-1  flex flex-col gap-6">
      <div className=" rounded-[40px] border-[1px] border-slate-200 pb-4 pt-3">
        <h2 className="px-[25px] py-2 border-b-[1px] border-slate-200 text-[18px] font-bold">
          Booking
        </h2>
        <form action="" className="px-[25px] py-2 mt-4 flex flex-col gap-4">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2  text-gray-900 text-[15px] font-bold"
            >
              From
            </label>
            <input
              type="date"
              id="default-search"
              class="block w-full px-4 py-3  text-sm text-gray-900 border border-slate-300 rounded-[40px] focus:border-sky-400 focus:outline-none bg-slate-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2  text-gray-900 text-[15px] font-bold"
            >
              To
            </label>
            <input
              type="date"
              id="default-search"
              class="block w-full px-4 py-3  text-sm text-gray-900 border border-slate-300 rounded-[40px] focus:border-sky-400 focus:outline-none bg-slate-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2  text-gray-900 text-[15px] font-bold"
            >
              No. Of Guest
            </label>
            <input
              type="number"
              id="default-search"
              class="block w-full px-4 py-3  text-sm text-gray-900 border border-slate-300 rounded-[40px] focus:border-sky-400 focus:outline-none bg-slate-200"
              required
              placeholder="0"
            />
            <div className="flex gap-2 items-center justify-center mt-4">
              <span className="text-[16px] font-semibold text-[#8F8F8F]">
                Per Person
              </span>
              <span className="text-[35px] text-main-color font-extrabold">
                100$
              </span>
            </div>
            <button className="bg-main-color mt-4 w-full text-white px-6 py-2.5 rounded-3xl text-lg">
              Confirm Booking{" "}
            </button>
          </div>
        </form>
      </div>
      <div className="   row-span-1  lg:row-span-2 max-h-[590px] relative group rounded-[2rem] overflow-hidden">
        <img
          src={IMG1}
          alt=""
          className="w-full rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300 "
        />
        <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
          <div className="flex justify-end items-start gap-10 flex-col p-7 h-full">
            <div className="flex flex-col gap-3 text-white">
              <h1 className=" font-bold text-[31px]">Luxor</h1>
              <p className="text-[14px]">
                Ain Musa lies to the southeast of the Ahmed Hamdi Tunnel.
              </p>
            </div>
            <div className="border border-white py-2 px-5 rounded-full flex items-center gap-3 text-white">
              <span>View All Posts</span>
              <div className="p-2 size-[40px] rounded-full border border-white bg-white flex items-center justify-center rotate-[-37deg]">
                <IoArrowForward className="text-main-color text-3xl font-light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
