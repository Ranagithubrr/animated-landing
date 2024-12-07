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
    <footer className="px-5 py-10 text-white border-b border-brand-primary">
      <div className="flex justify-between mx-auto max-w-screen-2xl">
        {/* Left Section */}
        <div className="w-4/12">
          <div className="flex flex-col items-start w-3/4 justify-left">
            <img src={Logo} alt="Tri Link" className="mx-auto max-w-64"/>           
            <p className="mt-2 text-center text-brand-primary">
              Tri Link delivers exceptional FTZ and 3PL services tailored to
              your global trade needs.
            </p>
            <p className="mt-2 text-center text-brand-primary">
              Our solutions combine innovation, quality, and efficiency to
              exceed your expectations and meet your specific requirements.
            </p>
          </div>
        </div>

        {/* Middle Section (General Links) */}
        <div className="w-2/12">
          <h3 className="text-2xl font-semibold text-brand-primary">General</h3>
          <ul className="mt-3 space-y-2">
            {menuItems.general.map((item, index) => (
              <li key={index} className="py-2">
                <a
                  href={item.link}
                  className="text-lg text-brand-primary hover:text-brand-secondary"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (Services Links) */}
        <div className="w-2/12">
          <h3 className="text-2xl font-semibold text-brand-primary">
            Services
          </h3>
          <ul className="mt-3 space-y-2">
            {menuItems.services.map((item, index) => (
              <li key={index} className="py-2">
                <a
                  href={item.link}
                  className="text-lg text-brand-primary hover:text-brand-secondary"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Call Us Section */}
        <div className="w-full mt-6 md:w-auto ">
          <h3 className="text-2xl font-semibold text-brand-primary">
            Call Us!
          </h3>
          <div className="mt-3 space-y-1">
            <p className="text-lg text-brand-primary hover:text-brand-secondary">
              +1-888-487-7707
            </p>
            <p className="text-lg text-brand-primary hover:text-brand-secondary">
              in California: +1-562-280-7200
            </p>
            <p className="text-lg text-brand-primary hover:text-brand-secondary">
              in Florida: +1-786-249-7200
            </p>
            <p className="text-lg text-brand-primary hover:text-brand-secondary">
              in New York: +1-631-737-7500
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
        <div className="mt-10 text-lg font-semibold text-center text-brand-primary">
          <p>Empowering Your Global Trade</p>
        </div>
        {/* Social Icons Section */}
        <div className="flex justify-center mt-8 space-x-5">
          <a
            href="#"
            className="p-3 text-2xl duration-200 ease-linear border rounded-full text-brand-primary hover:text-white broder border-brand-primary hover:bg-brand-primary"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-3 text-2xl duration-200 ease-linear border rounded-full text-brand-primary hover:text-white broder border-brand-primary hover:bg-brand-primary"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-3 text-2xl duration-200 ease-linear border rounded-full text-brand-primary hover:text-white broder border-brand-primary hover:bg-brand-primary"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-3 text-2xl duration-200 ease-linear border rounded-full text-brand-primary hover:text-white broder border-brand-primary hover:bg-brand-primary"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
