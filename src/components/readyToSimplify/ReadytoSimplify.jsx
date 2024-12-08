import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ReadytoSimplify = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (bottom < 0 || top > windowHeight) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#E2E2E2] py-20" ref={sectionRef}>
      <motion.div
        className="h-[40rem] w-[40rem] p-10 flex items-center justify-center rounded-full bg-[#A3B4BD] mx-auto"
        initial={{ y: -500, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: -500, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <p className="text-3xl text-center text-white">
          Ready to Simplify Logistics and Reduce Costs with World-Class 3PL and
          FTZ Solutions?
        </p>
      </motion.div>
    </div>
  );
};

export default ReadytoSimplify;
