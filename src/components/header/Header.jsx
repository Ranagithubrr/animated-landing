import React from "react";
import Logo from "../../assets/img/logo.png";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="sticky flex items-center justify-between h-24 border-b border-black">
      <div className="flex items-center h-full pl-10 pr-20 border-r border-black 2xl:pl-32">
        <img src={Logo} alt="TRI LINK" className="" />
      </div>
      <div className="flex items-center h-full">
        <div>
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
        <div className="h-full">
          <button className="h-full bg-[#193444] flex items-center text-white hover:bg-[#50845E] px-10">
            Clients Portal{" "}
            <span className="ml-2 transform rotate-90">
              <FaSquareArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
