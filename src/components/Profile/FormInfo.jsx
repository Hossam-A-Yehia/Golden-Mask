import { motion } from "framer-motion";

export default function FormInfo({ profileType, setprofileType }) {
  return (
    <>
      {profileType === "info" && (
        <motion.div
          initial={{ x: 200 }}
          transition={{ duration: 0.7 }}
          whileInView={{
            x: 0,
          }}
          className=" col-span-3 lg:col-span-2 "
        >
          <form className=" mx-auto p-5 border border-slate-200  rounded-[40px] ">
            <h1 className="text-[23px] font-bold mb-4">Personal Information</h1>
            <div className="mb-5">
              <label
                htmlFor="first-name"
                className="block mb-2 text-[16px] font-semibold text-[#333333] "
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                class="block w-full p-4 ps-4 text-sm text-gray-900 border border-slate-300 rounded-lg focus:border-sky-400 focus:outline-none"
                placeholder="Hossam"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="last-name"
                className="block mb-2 text-[16px] font-semibold text-[#333333] "
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                class="block w-full p-4 ps-4 text-sm text-gray-900 border border-slate-300 rounded-lg focus:border-sky-400 focus:outline-none"
                placeholder="Yehia"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 text-[16px] font-semibold text-[#333333] "
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                class="block w-full p-4 ps-4 text-sm text-gray-900 border border-slate-300 rounded-lg focus:border-sky-400 focus:outline-none"
                placeholder="Hossam"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="date"
                className="block mb-2 text-[16px] font-semibold text-[#333333] "
              >
                Date Og Birth
              </label>
              <input
                type="date"
                id="date"
                class="block w-full p-4 ps-4 text-sm text-gray-900 border border-slate-300 rounded-lg focus:border-sky-400 focus:outline-none"
                placeholder="Hossam"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="location"
                className="block mb-2 text-[16px] font-semibold text-[#333333] "
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                class="block w-full p-4 ps-4 text-sm text-gray-900 border border-slate-300 rounded-lg focus:border-sky-400 focus:outline-none"
                placeholder="Cairo"
                required
              />
            </div>
            <button className="bg-main-color mt-4 w-full md:w-1/4 text-white px-8  py-4 rounded-lg text-xl ">
              Save
            </button>
          </form>
          <form className=" mx-auto p-5 border border-slate-200  rounded-[40px] mt-8">
            <h1 className="text-[23px] font-bold mb-4">Security</h1>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-[16px] font-semibold text-[#333333] "
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                class="block w-full p-4 ps-4 text-sm text-gray-900 border border-slate-300 rounded-lg focus:border-sky-400 focus:outline-none"
                placeholder="EreYehia@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-[16px] font-semibold text-[#333333] "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="block w-full p-4 ps-4 text-sm text-gray-900 border border-slate-300 rounded-lg focus:border-sky-400 focus:outline-none"
                placeholder="Yehia"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-[16px] font-semibold text-[#333333] "
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                class="block w-full p-4 ps-4 text-sm text-gray-900 border border-slate-300 rounded-lg focus:border-sky-400 focus:outline-none"
                placeholder="Hossam"
                required
              />
            </div>

            <button className="bg-main-color mt-4 w-full md:w-1/4 text-white px-8  py-4 rounded-lg text-xl ">
              Save
            </button>
          </form>
        </motion.div>
      )}
      {profileType === "booking" && (
        <motion.div
          initial={{ x: 200 }}
          transition={{ duration: 0.7 }}
          whileInView={{
            x: 0,
          }}
          className=" col-span-3 lg:col-span-2 "
        >
          <h1 className="text-[23px] font-bold mb-4">Booking History</h1>

          <div className=" mx-auto p-5 border border-slate-200  rounded-[40px] flex flex-col ">
            <div className="flex justify-around items-center py-5">
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Trip Name
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  Pyramids of Giza, Sakkara Pyramids & Memphis{" "}
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Date from
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  12-2-2024
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  date to
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  14-2-2024
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Payment
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  Visa
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-around items-center py-5">
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Trip Name
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  Pyramids of Giza, Sakkara Pyramids & Memphis{" "}
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Date from
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  12-2-2024
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  date to
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  14-2-2024
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Payment
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  Visa
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-around items-center py-5">
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Trip Name
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  Pyramids of Giza, Sakkara Pyramids & Memphis{" "}
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Date from
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  12-2-2024
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  date to
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  14-2-2024
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Payment
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  Visa
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-around items-center py-5">
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Trip Name
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  Pyramids of Giza, Sakkara Pyramids & Memphis{" "}
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Date from
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  12-2-2024
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  date to
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  14-2-2024
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-main-color text-[14px] font-semibold">
                  Payment
                </span>
                <div className="text-[16px] text-[#5E5E5E] font-medium">
                  Visa
                </div>
              </div>
            </div>
            <hr />
          </div>
        </motion.div>
      )}
    </>
  );
}
