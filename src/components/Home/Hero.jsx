import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
  return (
    <div className="bg-hero min-h-screen pt-[100px] bg-cover relative flex justify-center items-center font-[Volkhov]">
      <div className=" bg-[#0000009e] absolute top-0 left-0 w-full h-full"></div>
      <div className="flex flex-col justify-center items-center w-full px-6 lg:px-0 lg:w-[900px]">
        <div className="flex flex-col w-[600px] z-50 text-center ">
          <h1 className="md:text-[70px] text-[50px] leading-[60px] font-bold text-white md:leading-[80px] ">
            Explore Each <br /> Part in Egypt
          </h1>
          <p className="text-sm text-slate-100 mt-[30px] leading-[30px] w-[400px] md:w-full mx-auto md:mx-0">
            Li Europan ligues es member del sam familie. Lor separat existentie
            es un myth. Por scientie, musica, sport etc, litol Europe use li sam
            vocabular
          </p>
        </div>
        <form className="bg-white flex-col lg:flex-row flex items-center justify-between gap-3 w-full mt-5 p-3 z-50 rounded-lg ">
          <div className=" w-full lg:w-2/6">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-slate-300 rounded-lg focus:border-sky-400 focus:outline-none"
                placeholder="Search activities or Destinations"
                required
              />
            </div>
          </div>
          <div className="flex w-full lg:w-3/6 items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-sm font-thin">Guests</span>
              <span className="text-xs font-thin flex items-center gap-1 text-slate-700">
                2 Adult <IoIosArrowDown className="text-main-color text-lg" />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-sm font-thin">Date</span>
              <span className="text-xs font-thin flex items-center gap-1 text-slate-700">
                12 - 13 April 2021{" "}
                <IoIosArrowDown className="text-main-color text-lg" />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-sm font-thin">Package</span>
              <span className="text-xs font-thin flex items-center gap-1 text-slate-700">
                All <IoIosArrowDown className="text-main-color text-lg" />
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/6 text-center lg:text-right mt-3 lg:mt-0 ">
            <button className="bg-main-color text-white px-6 py-2.5 rounded-3xl ">
              Book new{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
