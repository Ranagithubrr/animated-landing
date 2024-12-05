import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../../assets/img/logo.png";

const Footer = () => {
  // State for menu items
  const [menuItems] = useState({
    general: [
      { name: "Service", link: "#" },
      { name: "Warehouse", link: "#" },
      { name: "Industries", link: "#" },
      { name: "Technology", link: "#" },
      { name: "About Us", link: "#" },
      { name: "Contact", link: "#" },
      { name: "Privacy Policy", link: "#" },
    ],
    services: [
      { name: "Third Party Logistic (3PL)", link: "#" },
      { name: "Foreign Trade Zone (FTZ)", link: "#" },
      { name: "Handling & Relabeling", link: "#" },
      { name: "Documentation", link: "#" },
      { name: "Compliance", link: "#" },
    ],
  });

  return (
    <footer className="text-white py-10 border-b border-brand-primary">
      <div className="max-w-screen-2xl mx-auto flex justify-between">
        {/* Left Section */}
        <div className="w-4/12">
          <div className="w-3/4 flex justify-left items-start flex-col">
            <img src={Logo} alt="Tri Link" className="max-w-64 mx-auto"/>
            <h2 className="text-2xl font-bold">TRI LINK</h2>
            <p className="mt-2 text-brand-primary text-center">
              Tri Link delivers exceptional FTZ and 3PL services tailored to
              your global trade needs.
            </p>
            <p className="mt-2 text-brand-primary text-center">
              Our solutions combine innovation, quality, and efficiency to
              exceed your expectations and meet your specific requirements.
            </p>
          </div>
        </div>

        {/* Middle Section (General Links) */}
        <div className="w-2/12">
          <h3 className="text-brand-primary font-semibold text-2xl">General</h3>
          <ul className="mt-3 space-y-2">
            {menuItems.general.map((item, index) => (
              <li key={index} className="py-2">
                <a
                  href={item.link}
                  className="text-brand-primary hover:text-brand-secondary text-lg"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (Services Links) */}
        <div className="w-2/12">
          <h3 className="text-brand-primary font-semibold text-2xl">
            Services
          </h3>
          <ul className="mt-3 space-y-2">
            {menuItems.services.map((item, index) => (
              <li key={index} className="py-2">
                <a
                  href={item.link}
                  className="text-brand-primary hover:text-brand-secondary text-lg"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Call Us Section */}
        <div className="w-full mt-6 md:w-auto ">
          <h3 className="text-brand-primary font-semibold text-2xl">
            Call Us!
          </h3>
          <div className="mt-3 space-y-1">
            <p className="text-brand-primary hover:text-brand-secondary text-lg">
              +1-888-487-7707
            </p>
            <p className="text-brand-primary hover:text-brand-secondary text-lg">
              in California: +1-562-280-7200
            </p>
            <p className="text-brand-primary hover:text-brand-secondary text-lg">
              in Florida: +1-786-249-7200
            </p>
            <p className="text-brand-primary hover:text-brand-secondary text-lg">
              in New York: +1-631-737-7500
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <div className="mt-10 text-center text-brand-primary text-lg font-semibold">
          <p>Empowering Your Global Trade</p>
        </div>
        {/* Social Icons Section */}
        <div className="mt-8 flex justify-center space-x-5">
          <a
            href="#"
            className="text-brand-primary hover:text-white broder border-brand-primary border rounded-full p-3 text-2xl hover:bg-brand-primary ease-linear duration-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-brand-primary hover:text-white broder border-brand-primary border rounded-full p-3 text-2xl hover:bg-brand-primary ease-linear duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-brand-primary hover:text-white broder border-brand-primary border rounded-full p-3 text-2xl hover:bg-brand-primary ease-linear duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-brand-primary hover:text-white broder border-brand-primary border rounded-full p-3 text-2xl hover:bg-brand-primary ease-linear duration-200"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
