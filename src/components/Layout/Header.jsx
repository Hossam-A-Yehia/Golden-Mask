import { Link } from "react-router-dom";
import IMG from "/logo.svg";
import Avatar from "../../assets/Home/Avatar.jpeg";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

export default function Header({ whiteHeader }) {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <div
        className={`container mx-auto flex items-center justify-between py-4 ${
          whiteHeader ? "" : "absolute left-1/2 translate-x-[-50%] "
        } max-h-[100px] z-50 px-3 md:px-0`}
      >
        <Link to="/">
          <img src={IMG} alt="LOGO" />
        </Link>
        <nav className="items-center gap-6 hidden lg:flex">
          <Link to="/" className=" text-main-color transition duration-300">
            Home
          </Link>
          <a
            className={`${
              whiteHeader ? "text-black" : "text-white"
            } hover:text-main-color transition duration-300`}
            href="#services"
          >
            Our Services
          </a>
          <a
            className={`${
              whiteHeader ? "text-black" : "text-white"
            } hover:text-main-color transition duration-300`}
            href="#about"
          >
            About Us
          </a>
          <a
            className={`${
              whiteHeader ? "text-black" : "text-white"
            } hover:text-main-color transition duration-300`}
            href="#trips"
          >
            Our Trips
          </a>
          <a
            className={`${
              whiteHeader ? "text-black" : "text-white"
            } hover:text-main-color transition duration-300`}
            href="#places"
          >
            Best Desitnation
          </a>
          <a
            className={`${
              whiteHeader ? "text-black" : "text-white"
            } hover:text-main-color transition duration-300`}
            href="#blog"
          >
            Our Blog
          </a>
          <a
            className={`${
              whiteHeader ? "text-black" : "text-white"
            } hover:text-main-color transition duration-300`}
            href="#testimonials"
          >
            Testimonials
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <Link to="/profile/12" className="flex items-center gap-2">
            <div className="rounded-full size-[50px] border border-main-color flex items-center justify-center">
              <img
                src={Avatar}
                alt="avatar"
                className="size-[50px] rounded-full"
              />
            </div>
            <span
              className={`${
                whiteHeader ? "text-black" : "text-white"
              } hidden md:block font-bold`}
            >
              Hossam Yehia
            </span>
          </Link>
          <FaBarsStaggered
            onClick={() => setToggleNav(true)}
            className={` ${
              whiteHeader ? "text-black" : "text-white"
            } lg:hidden text-2xl cursor-pointer`}
          />
        </div>
      </div>
      <div
        className={`bg-[#00000036] fixed top-0 left-0 ${
          toggleNav ? " w-full" : " w-0"
        } h-screen lg:hidden z-50 duration-300`}
      >
        <nav
          className={`items-start gap-6 lg:hidden flex flex-col p-3 ${
            toggleNav ? "w-1/2 opacity-1" : "w-0 opacity-0"
          } bg-white h-full`}
        >
          <IoClose
            onClick={() => setToggleNav(false)}
            className="text-xl transition-all duration-300 hover:text-red-500 ml-auto cursor-pointer"
          />
          <Link to="/" className=" text-main-color transition duration-300">
            Home
          </Link>
          <a
            className={`text-black hover:text-main-color transition duration-300`}
            href="#services"
          >
            Our Services
          </a>
          <a
            className={`text-black hover:text-main-color transition duration-300`}
            href="#about"
          >
            About Us
          </a>
          <a
            className={`text-black hover:text-main-color transition duration-300`}
            href="#trips"
          >
            Our Trips
          </a>
          <a
            className={`text-black hover:text-main-color transition duration-300`}
            href="#places"
          >
            Best Desitnation
          </a>
          <a
            className={`text-black hover:text-main-color transition duration-300`}
            href="#blog"
          >
            Our Blog
          </a>
          <a
            className={`${
              whiteHeader ? "text-black" : "text-white"
            } hover:text-main-color transition duration-300`}
            href="#testimonials"
          >
            Testimonials
          </a>
        </nav>
      </div>
    </>
  );
}
