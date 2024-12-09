import { useState, useEffect, useRef } from "react";
import { SlArrowDownCircle } from "react-icons/sl";
import HeroBg from "../../assets/img/hero-bg.webp";
import { motion } from "motion/react";

const Hero = () => {
  const [closestWord, setClosestWord] = useState(null);
  const titleRef = useRef(null);
  const wordsRef = useRef([]);

  // Create references for each word dynamically
  useEffect(() => {
    wordsRef.current = Array.from(titleRef.current.querySelectorAll(".word"));
  }, []);

  // Mouse move handler
  const handleMouseMove = (e) => {
    if (titleRef.current) {
      const mouseX = e.clientX; // Get the mouse's X position
      let closest = null;
      let minDistance = Infinity;

      // Iterate over each word and calculate the distance from the mouse
      wordsRef.current.forEach((word) => {
        const wordRect = word.getBoundingClientRect();
        const wordCenterX = (wordRect.left + wordRect.right) / 2; // Get the center of each word
        const distance = Math.abs(mouseX - wordCenterX); // Get the distance from the mouse

        if (distance < minDistance) {
          minDistance = distance;
          closest = word; // Track the closest word
        }
      });

      // Update the closest word in the state
      setClosestWord(closest ? closest.textContent : null);
    }
  };

  return (
    <div
      className="flex flex-col justify-center h-[120vh] mx-auto max-w-screen-lg 2xl:max-w-screen-2xl items-left -mt-36"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseMove={handleMouseMove}
    >
      <h1 ref={titleRef} className="px-4 font-extrabold text-center lg:text-left text-brand-primary lg:px-0">
        <span
          className={` ${
            closestWord === "EMPOWER" ? "text-4xl lg:text-6xl 2xl:text-7xl" : "text-3xl lg:text-5xl 2xl:text-6xl"
          } word transition-all duration-500 ease-in-out mr-2`}
        >
          EMPOWER
        </span>
        <span
          className={` ${
            closestWord === "YOUR" ? "text-4xl lg:text-6xl 2xl:text-7xl" : "text-3xl lg:text-5xl 2xl:text-6xl"
          } word transition-all duration-500 ease-in-out mr-2`}
        >
          YOUR
        </span>{" "}
        <span
          className={` ${
            closestWord === "GLOBAL" ? "text-4xl lg:text-6xl 2xl:text-7xl" : "text-3xl lg:text-5xl 2xl:text-6xl"
          } word transition-all duration-500 ease-in-out mr-2`}
        >
          GLOBAL
        </span>{" "}
        <span
          className={` ${
            closestWord === "TRADE" ? "text-4xl lg:text-6xl 2xl:text-7xl" : "text-3xl lg:text-5xl 2xl:text-6xl"
          } word transition-all duration-500 ease-in-out`}
        >
          TRADE
        </span>
      </h1>
      <p className="px-5 mt-5 text-2xl text-center lg:text-3xl text-brand-primary lg:text-left lg:px-0">
        with high-efficiency and FTZ solutions.
      </p>
      <div className="absolute lg:right-[10%] bottom-[10%] flex items-center flex-col w-full lg:w-auto">
        <p className="text-3xl font-semibold text-center text-brand-primary">
          Scroll more
          <br />& explore!
        </p>
        <motion.a
        href="#transportSection"
          className="mt-5 text-5xl text-brand-primary"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <SlArrowDownCircle />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
