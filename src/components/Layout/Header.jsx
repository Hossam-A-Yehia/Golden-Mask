import { Link } from "react-router-dom";
import IMG from "/logo.svg";
import Avatar from "../../assets/Home/Avatar.jpeg";
export default function Header() {
  return (
    <div className=" container mx-auto flex items-center justify-between py-4 absolute left-1/2 translate-x-[-50%]  max-h-[100px] z-50 px-3 md:px-0">
      <img src={IMG} alt="LOGO" />
      <nav className="items-center gap-6 hidden md:flex">
        <a className=" text-main-color transition duration-300" href="/">
          Home
        </a>
        <a
          className="text-white hover:text-main-color transition duration-300"
          href="#services"
        >
          Our Services
        </a>
        <a
          className="text-white hover:text-main-color transition duration-300"
          href="#about"
        >
          About Us
        </a>
        <a
          className="text-white hover:text-main-color transition duration-300"
          href="#trips"
        >
          Our Trips
        </a>
        <a
          className="text-white hover:text-main-color transition duration-300"
          href="#places"
        >
          Best Desitnation
        </a>
        <a
          className="text-white hover:text-main-color transition duration-300"
          href="#blog"
        >
          Our Blog
        </a>
        <a
          className="text-white hover:text-main-color transition duration-300"
          href="#testimonials"
        >
          Testimonials
        </a>
      </nav>
      <div className="md:flex hidden items-center gap-2">
        <div className="rounded-full size-[50px] border border-main-color flex items-center justify-center">
          <img src={Avatar} alt="avatar" className="size-[50px] rounded-full" />
        </div>
        <span className="text-white">Hossam Yehia</span>
      </div>
    </div>
  );
}
