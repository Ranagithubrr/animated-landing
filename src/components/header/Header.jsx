import { FaTimes, FaBars  } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="sticky flex items-center justify-between h-24 border-b border-black">
      {/* Left section with logo */}
      <div className="flex items-center h-full pl-10 pr-20 border-r border-black 2xl:pl-32">
        <img src={Logo} alt="TRI LINK" className="w-32 lg:w-56" />
      </div>

      {/* Right section: Desktop Menu */}
      <div className="flex items-center h-full">
        {/* Desktop Menu (hidden on mobile) */}
        <div className="items-center hidden h-full lg:flex">
          <ul className="flex items-center">
            <li className="px-5 text-[#193444] hover:text-[#50845E]">
              <a href="#" className="flex items-center">
                Service{" "}
                <span className="ml-2 transform rotate-90">
                  <FaSquareArrowUpRight />
                </span>
              </a>
            </li>
            <li className="px-5 text-[#193444] hover:text-[#50845E]">
              <a href="#">Warehouse</a>
            </li>
            <li className="px-5 text-[#193444] hover:text-[#50845E]">
              <a href="#">Industries</a>
            </li>
            <li className="px-5 text-[#193444] hover:text-[#50845E]">
              <a href="#">Technology</a>
            </li>
            <li className="px-5 text-[#193444] hover:text-[#50845E]">
              <a href="#" className="flex items-center">
                About Us
                <span className="ml-2 transform rotate-90">
                  <FaSquareArrowUpRight />
                </span>
              </a>
            </li>
            <li className="px-5 text-[#193444] hover:text-[#50845E]">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Clients Portal Button (hidden on mobile) */}
        <div className="hidden h-full lg:block">
          <button className="h-full bg-[#193444] flex items-center text-white hover:bg-[#50845E] px-10">
            Clients Portal{" "}
            <span className="ml-2 transform rotate-90">
              <FaSquareArrowUpRight />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle (shown only on mobile) */}
        <div className="z-20 flex items-center h-full px-5 lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-brand-primary">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-full bg-white border-b border-black p-5`}
      >
        <ul className="flex flex-col items-center">
          <li className="py-3 text-[#193444] hover:text-[#50845E]">
            <a href="#" className="flex items-center">
              Service
              <span className="ml-2 transform rotate-90">
                <FaSquareArrowUpRight />
              </span>
            </a>
          </li>
          <li className="py-3 text-[#193444] hover:text-[#50845E]">
            <a href="#">Warehouse</a>
          </li>
          <li className="py-3 text-[#193444] hover:text-[#50845E]">
            <a href="#">Industries</a>
          </li>
          <li className="py-3 text-[#193444] hover:text-[#50845E]">
            <a href="#">Technology</a>
          </li>
          <li className="py-3 text-[#193444] hover:text-[#50845E]">
            <a href="#" className="flex items-center">
              About Us
              <span className="ml-2 transform rotate-90">
                <FaSquareArrowUpRight />
              </span>
            </a>
          </li>
          <li className="py-3 text-[#193444] hover:text-[#50845E]">
            <a href="#">Contact</a>
          </li>
          <li>
            <button className="h-full bg-[#193444] flex items-center text-white hover:bg-[#50845E] px-10">
              Clients Portal{" "}
              <span className="ml-2 transform rotate-90">
                <FaSquareArrowUpRight />
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
