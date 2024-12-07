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
      <div className="flex items-center justify-between px-5 py-20 mx-auto max-w-screen-2xl">
        <div>
          <img src={LogoWhite} alt="tri link" className="w-4/6"/>
          <p className="mt-2 text-3xl font-normal text-gray-100">Keep in touch!</p>
        </div>
        {/* Social Icons Section */}
        <div className="flex justify-center space-x-5">
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
