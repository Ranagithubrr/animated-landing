import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import LogoWhite from "../../assets/img/logo-white.png";

const KeepInTouch = () => {
  return (
    <div className="bg-brand-primary">
      <div className="items-center justify-between py-20 mx-auto lg:flex max-w-screen-2xl">
        <div className="flex flex-col items-center w-full mb-6 text-center lg:mb-0 lg:w-1/2">
          <img src={LogoWhite} alt="tri link" className="w-64"/>
          <p className="mt-2 text-3xl font-normal text-gray-100">Keep in touch!</p>
        </div>
        {/* Social Icons Section */}
        <div className="flex justify-center w-full space-x-5 lg:justify-end lg:w-1/2">
          <a
            href="#"
            className="p-3 text-2xl text-gray-100 duration-200 ease-linear border border-gray-100 rounded-full hover:bg-gray-100 hover:text-brand-primary broder"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-3 text-2xl text-gray-100 duration-200 ease-linear border border-gray-100 rounded-full hover:bg-gray-100 hover:text-brand-primary broder"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-3 text-2xl text-gray-100 duration-200 ease-linear border border-gray-100 rounded-full hover:bg-gray-100 hover:text-brand-primary broder"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-3 text-2xl text-gray-100 duration-200 ease-linear border border-gray-100 rounded-full hover:bg-gray-100 hover:text-brand-primary broder"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default KeepInTouch;
