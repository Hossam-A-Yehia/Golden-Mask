import Map from "./Map";

export default function Options() {
  return (
    <div className=" col-span-3 lg:col-span-2 border border-slate-200 p-4 rounded-[40px]">
      <div className="flex items-center gap-3">
        <button className="py-2 px-4 rounded-md text-[18px] ">
          First Option
        </button>
        <button className="py-2 px-4 rounded-md text-[18px] font-semibold bg-main-color text-white">
          Second Option
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-5 mb-3 ">
        <h1 className="text-[22px] font-bold font-[Volkhov]">Description</h1>

        <p className="text-[14px] text-[#767681]">
          Let’s take a 3 day Cairo trip to see the finest monuments in the land
          of the Pharaohs. You’ll appreciate seeing the Great Pyramids of Giza,
          the Step Pyramid of Saqqara, Memphis City, the Egyptian Museum, and
          the Cairo Citadel.
        </p>

        <p className="text-[14px] text-[#767681]">
          Let’s take a 3 day Cairo trip to see the finest monuments in the land
          of the Pharaohs. You’ll appreciate seeing the Great Pyramids of Giza,
          the Step Pyramid of Saqqara, Memphis City, the Egyptian Museum, and
          the Cairo Citadel Let’s take a 3 day Cairo trip to see the finest
          monuments in the land of the Pharaohs. You’ll appreciate seeing the
          Great Pyramids of Giza, the Step Pyramid of Saqqara, Memphis City, the
          Egyptian Museum, and the Cairo Citadel.
        </p>
      </div>
      <hr />
      <div className="flex flex-col gap-3 mt-3 mb-3 ">
        <h1 className="text-[22px] font-bold font-[Volkhov]">Activity</h1>

        <ul className="flex flex-col ">
          <span className="text-[16px] text-[#333333] font-semibold">
            What You Will Do
          </span>
          <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc">
            Discover London on board a classic Route master vintage double
            decker bus
          </li>
          <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc">
            Cruise down the River Thames
          </li>
          <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc">
            See the Changing of the Guard
          </li>
          <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc">
            Go to Westminster Abbey
          </li>
          <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc">
            Listen to the chimes of Big Ben and see the Houses of Parliament
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex flex-col gap-3 mt-3 mb-3">
        <h1 className="text-[22px] font-bold font-[Volkhov]">
          What is included / not included
        </h1>

        <div className="flex items-start  gap-[100px]">
          <ul className="flex flex-col ">
            <span className="text-[16px] text-[#333333] font-semibold">
              Includes
            </span>
            <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc whitespace-nowrap">
              Giza Plateau, Pyramids and Sphinx.
            </li>
            <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc whitespace-nowrap">
              The Valley Temple in Giza Plateau.
            </li>
            <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc whitespace-nowrap">
              Sakkara Pyramids (The Step Pyramids).{" "}
            </li>
            <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc whitespace-nowrap">
              The Statue of Ramses II in Memphis.
            </li>
            <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc whitespace-nowrap">
              Traditional Egyptian Meal (Grilled Meats).{" "}
            </li>
          </ul>
          <ul className="flex flex-col ">
            <span className="text-[16px] text-[#333333] font-semibold">
              Not Includes
            </span>
            <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc whitespace-nowrap">
              Double-decker Routemaster tour
            </li>
            <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc whitespace-nowrap">
              Short trip along the River Thames
            </li>
            <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc whitespace-nowrap">
              Changing of the Guard{" "}
            </li>
            <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc whitespace-nowrap">
              Gratuities{" "}
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-3 mt-3 mb-3 ">
        <h1 className="text-[22px] font-bold font-[Volkhov]">Safety</h1>

        <ul className="flex flex-col ">
          <span className="text-[16px] text-[#333333] font-semibold">
            Health precautions
          </span>
          <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc">
            All required protective equipment is provided
          </li>
          <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc">
            All areas that customers touch are frequently cleaned
          </li>
          <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc">
            You must keep social distance while in vehicles
          </li>
          <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc">
            The number of visitors is limited to reduce crowds{" "}
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex flex-col gap-3 mt-3 mb-3 ">
        <h1 className="text-[22px] font-bold font-[Volkhov]">
          Meeting point address
        </h1>

        <ul className="flex flex-col ">
          <li className=" font-normal text-[15px] text-[#767681] ml-6  list-disc">
            Meet your guide inside the west entrance of Altab Ali Park
            (Whitechapel Road). It's opposite the entrance to Aldgate East Tube
            Station and the Whitechapel Gallery. Look for a guide wearing SMT
            attire and holding a red SMT flag
          </li>
        </ul>
      </div>
      <Map />
    </div>
  );
}
