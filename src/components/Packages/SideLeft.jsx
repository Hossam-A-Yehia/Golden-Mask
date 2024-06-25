export default function SideLeft() {
  return (
    <div className="col-span-3 lg:col-span-1  flex flex-col gap-6">
      <div className=" rounded-[40px] border-[1px] border-slate-200 pb-4 pt-3">
        <h2 className="px-[25px] py-2 border-b-[1px] border-slate-200 text-[18px] font-bold">
          Availability
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
        </form>
      </div>
      <div className=" rounded-[40px] border-[1px] border-slate-200 pb-4 pt-3">
        <h2 className="px-[25px] py-2 border-b-[1px] border-slate-200 text-[18px] font-bold">
          Duration
        </h2>
        <div className="px-[25px] py-2 mt-4 flex flex-col gap-4">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center  rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                checked
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main-color checked:bg-main-color checked:before:bg-main-color hover:before:opacity-10"
                id="checkbox"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="checkbox"
              className="ms-3 text-[15px] font-medium text-gray-900 "
            >
              0-3 hours
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center  rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main-color checked:bg-main-color checked:before:bg-main-color hover:before:opacity-10"
                id="checkbox"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="checkbox"
              className="ms-3 text-[15px] font-medium text-gray-900 "
            >
              3-5 hours
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center  rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main-color checked:bg-main-color checked:before:bg-main-color hover:before:opacity-10"
                id="checkbox"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="checkbox"
              className="ms-3 text-[15px] font-medium text-gray-900 "
            >
              5-7 hours
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center  rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main-color checked:bg-main-color checked:before:bg-main-color hover:before:opacity-10"
                id="checkbox"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="checkbox"
              className="ms-3 text-[15px] font-medium text-gray-900 "
            >
              Full day (7 + hours)
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center  rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main-color checked:bg-main-color checked:before:bg-main-color hover:before:opacity-10"
                id="checkbox"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="checkbox"
              className="ms-3 text-[15px] font-medium text-gray-900 "
            >
              Multi-day
            </label>
          </div>
        </div>
      </div>
      <div className=" rounded-[40px] border-[1px] border-slate-200 pb-4 pt-3">
        <h2 className="px-[25px] py-2 border-b-[1px] border-slate-200 text-[18px] font-bold">
          Destination
        </h2>
        <div className="px-[25px] py-2 mt-4 flex flex-col gap-4">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center  rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                checked
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main-color checked:bg-main-color checked:before:bg-main-color hover:before:opacity-10"
                id="checkbox"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="checkbox"
              className="ms-3 text-[15px] font-medium text-gray-900 "
            >
              Alexandria
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center  rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main-color checked:bg-main-color checked:before:bg-main-color hover:before:opacity-10"
                id="checkbox"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="checkbox"
              className="ms-3 text-[15px] font-medium text-gray-900 "
            >
              Egypt
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center  rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main-color checked:bg-main-color checked:before:bg-main-color hover:before:opacity-10"
                id="checkbox"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="checkbox"
              className="ms-3 text-[15px] font-medium text-gray-900 "
            >
              Giza
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center  rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main-color checked:bg-main-color checked:before:bg-main-color hover:before:opacity-10"
                id="checkbox"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="checkbox"
              className="ms-3 text-[15px] font-medium text-gray-900 "
            >
              Sharm- Elsheikh
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center  rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main-color checked:bg-main-color checked:before:bg-main-color hover:before:opacity-10"
                id="checkbox"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="checkbox"
              className="ms-3 text-[15px] font-medium text-gray-900 "
            >
              Dahab
            </label>
          </div>
        </div>
        <span className=" underline font-semibold text-sm text-main-color px-[25px] py-2 mt-1 block">
          Show More Destinations
        </span>
      </div>
    </div>
  );
}
