import SpecialHeading from "./SpecialHeading";
import IMG1 from "../../assets/Home/places/Place1.jpeg";
import IMG2 from "../../assets/Home/places/Place2.jpeg";
import IMG3 from "../../assets/Home/places/Place3.jpeg";
import IMG4 from "../../assets/Home/places/Place4.jpeg";
import IMG5 from "../../assets/Home/places/Place5.jpeg";
import IMG6 from "../../assets/Home/places/Place6.jpeg";
import IMG7 from "../../assets/Home/places/Place7.jpeg";
import IMG8 from "../../assets/Home/places/Place8.jpeg";
import IMG9 from "../../assets/Home/places/Place9.jpeg";
import IMG10 from "../../assets/Home/places/Place10.jpeg";
import { IoArrowForward } from "react-icons/io5";
export default function MorePlaces() {
  return (
    <section
      id="places"
      className="mt-[80px] container mx-auto relative px-3 md:px-0"
    >
      <SpecialHeading
        title="Discover More Places in EGYPT"
        desc="The tourism and travel industry has become more accessible than ever. The  trips, all with just a few clicks. You can find everything from flights, hotels, and restaurants to car rentals and local experiences online."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 grid-rows-1 lg:grid-rows-5 ">
        <div className="   row-span-1  lg:row-span-2 max-h-[590px] relative group rounded-[2rem] overflow-hidden">
          <img
            src={IMG1}
            alt=""
            className="w-full rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300 "
          />
          <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
            <div className="flex justify-between items-start flex-col p-7 h-full">
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
        <div className="max-h-[332.67px] min-h-[332.67px] md:min-h-full relative group rounded-[2rem] overflow-hidden">
          {" "}
          <img
            src={IMG2}
            alt=""
            className="w-full  rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300"
          />
          <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
            <div className="flex justify-between items-start flex-col p-7 h-full">
              <div className="flex flex-col gap-3 text-white">
                <h1 className=" font-bold text-[31px]">Snorkeling</h1>
                <p className="text-[14px]">
                  ractice of swimming face down on or through a body of water
                  while breathing the ambient air through a shaped tube called a
                  snorkel,
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
        <div className=" row-span-1  lg:row-span-2 max-h-[598px] relative group rounded-[2rem] overflow-hidden">
          {" "}
          <img
            src={IMG3}
            alt=""
            className="w-full  rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300"
          />
          <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
            <div className="flex justify-between items-start flex-col p-7 h-full">
              <div className="flex flex-col gap-3 text-white">
                <h1 className=" font-bold text-[31px]">Fayoum Packages</h1>
                <p className="text-[14px]">
                  The small village of Tunis (‘izbat Tunis) is located in the
                  oasis of Fayoum , on the way to Wadi Rayan. Located on a hill
                  facing a large salt water lake, the village overlooks a
                  stunning view of the edge of the desert on the other side of
                  the lake. It is one of the most beautiful places in Egypt.
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

        <div className=" row-span-1  lg:row-span-2 max-h-[623px] relative group rounded-[2rem] overflow-hidden">
          <img
            src={IMG5}
            alt=""
            className="w-full  rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300"
          />
          <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
            <div className="flex justify-between items-start flex-col p-7 h-full">
              <div className="flex flex-col gap-3 text-white">
                <h1 className=" font-bold text-[31px]">Nuba Culture</h1>
                <p className="text-[14px]">
                  distinctive culture, and they are culturally vivid and
                  physically diverse ethnic group inhabiting central Sudan.
                  Among the many cultural activities which the Nuba have, is
                  'Kambala Dance
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
        <div className="max-h-[367.69px] relative group rounded-[2rem] overflow-hidden">
          <img
            src={IMG4}
            alt=""
            className="w-full  rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300"
          />
          <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
            <div className="flex justify-between items-start flex-col p-7 h-full">
              <div className="flex flex-col gap-3 text-white">
                <h1 className=" font-bold text-[31px] leading-8">
                  Sauna & Spa – healing getaways for body and soul
                </h1>
                <p className="text-[14px]">
                  Demand is growing steadily in the sauna & spa sector – and
                  spas are more popular than ever in Germany too. There are many
                  good reasons for this – not only are saunas
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
        <div className=" max-h-[358px] relative group rounded-[2rem] overflow-hidden">
          <img
            src={IMG6}
            alt=""
            className="w-full  rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300"
          />
          <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
            <div className="flex justify-between items-start flex-col p-7 h-full">
              <div className="flex flex-col gap-3 text-white">
                <h1 className=" font-bold text-[31px]">Delphine House </h1>
                <p className="text-[14px]">
                  SNORKELING AT DOLPHIN HOUSE FROM MARSA ALAM
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
        <div className=" col-span-1 lg:col-span-2 max-h-[260px] relative group rounded-[2rem] overflow-hidden ">
          <img
            src={IMG7}
            alt=""
            className="w-full  rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300"
          />
          <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
            <div className="flex justify-between items-start flex-col p-7 h-full">
              <div className="flex flex-col gap-3 text-white">
                <h1 className=" font-bold text-[31px]">Siaw</h1>
                <p className="text-[14px]">
                  Swim the springs, walk the soft sands, drive the dunes, bike
                  around the lakes, dance to the music, eat amazing food and be
                  merry
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
        <div className="  row-span-1  lg:row-span-2 max-h-[650px] relative group rounded-[2rem] overflow-hidden">
          <img
            src={IMG10}
            alt=""
            className="w-full  rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300"
          />
          <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
            <div className="flex justify-between items-start flex-col p-7 h-full">
              <div className="flex flex-col gap-3 text-white">
                <h1 className=" font-bold text-[31px]">Aswan Trips</h1>
                <p className="text-[14px]">
                  Demand is growing steadily in the sauna & spa sector – and
                  spas are more popular than ever in Germany too. There are many
                  good reasons for this – not only are saunas
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
        <div className=" max-h-[368px]  lg:mt-[-38px] relative group rounded-[2rem] overflow-hidden">
          <img
            src={IMG8}
            alt=""
            className="w-full  rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300"
          />
          <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
            <div className="flex justify-between items-start flex-col p-7 h-full">
              <div className="flex flex-col gap-3 text-white">
                <h1 className=" font-bold text-[31px]">Safari</h1>
                <p className="text-[14px]">
                  Demand is growing steadily in the sauna & spa sector – and
                  spas are more popular than ever in Germany too. There are many
                  good reasons for this – not only are saunas
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
        <div className=" max-h-[368px] lg:mt-[-38px] relative group rounded-[2rem] overflow-hidden">
          <img
            src={IMG9}
            alt=""
            className="w-full  rounded-[2rem] h-full group-hover:scale-[1.1] group-hover:rotate-[2deg] duration-300"
          />
          <div className="bg-[#00000052] absolute top-0 left-0 w-full h-full rounded-[2rem] ">
            <div className="flex justify-between items-start flex-col p-7 h-full">
              <div className="flex flex-col gap-3 text-white">
                <h1 className=" font-bold text-[31px]">Hot Air Balloon</h1>
                <p className="text-[14px]">
                  Demand is growing steadily in the sauna & spa sector – and
                  spas are more popular than ever in Germany too. There are many
                  good reasons for this – not only are saunas
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
    </section>
  );
}
