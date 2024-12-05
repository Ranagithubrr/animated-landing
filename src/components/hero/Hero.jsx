import { SlArrowDownCircle } from "react-icons/sl";
import HeroBg from "../../assets/img/hero-bg.webp";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <div
      className="h-screen max-w-screen-2xl mx-auto flex items-left justify-center flex-col -mt-36"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-brand-primary text-6xl font-extrabold">
        EMPOWER YOUR GLOBAL TRADE
      </h1>
      <p className="text-brand-primary text-3xl mt-5">
        with high-efficiency and FTZ solutions.
      </p>
      <div className="absolute right-[10%] bottom-[10%] flex items-center flex-col">
        <p className="text-center text-brand-primary text-3xl font-semibold">
          Scroll more
          <br />& explore!
        </p>
        <motion.span
          className="text-brand-primary text-5xl mt-5"
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
        </motion.span>
      </div>
    </div>
  );
};

export default Hero;
