import { useState } from "react";

import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${
        nav ? "nav active" : "nav"
      } w-full flex py-8 justify-around items-center navbar fixed z-[1] -left-0 -top-0 bg-transparent transition ease-in-out duration-200`}
    >
      <img src={logo} alt="gym" className="w-[90px]" />
      <ul className="list-none sm:flex hidden justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] text-white`}
          >
            <a
              href={`#${nav.id}`}
              className="flex font-lato h-[40px] leading-[43px] m-[3px] px-[22px] text-[0.9rem] font-medium text-white tracking-[1px] rounded-[3px] transition ease-in-out duration-200 hover:bg-[#FF1414] hover:shadow-[5px_10px_30px_rgba(255,2,2,0.336)] hover:transition-all hover:duration-200"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>



      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black absolute top-20 left-0 my-2 min-w-[140px] w-[100%] border-b-solid border-b-[#FF1414] border-b-[2px]`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal curstor-pointer text-[16px]  hover:bg-[#FF1414] w-[100%] py-[10px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`} className="text-white w-[100%] flex items-center justify-center">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
