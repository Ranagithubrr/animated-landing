import { motion } from "framer-motion";
import bgRoundImage from "../../assets/img/circleimg.webp";

const AnimatedCircleAndText = () => {
  return (
    <div className="flex items-center justify-between w-full h-full py-10 bg-white">
      {/* Left Section: Circle */}
      <motion.div
        initial={{ scale: 0.3, x: "50%", y: "-100%" }}
        animate={{ scale: 1, x: "0%", y: "0%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex items-center justify-center w-1/2 h-full"
      >
        <motion.div
          className="bg-gray-400 rounded-full"
          style={{
            width: "600px",
            height: "600px",        
            backgroundImage: `url(${bgRoundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",            
          }}
        />
      </motion.div>

      {/* Right Section: Text */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col w-1/2 p-8 space-y-4 text-left text-gray-800"
      >
        <h1 className="text-3xl font-bold text-right">
          Specializing in Efficient, Lower-Cost Transport of Key Retail Products
        </h1>
        <p className="text-lg text-right">
          They say, "Money Makes the World Go Round," but it’s actually
          Tri-Link’s global shipping and 3PL services, and the products we
          specialize in delivering efficiently with reduced duties and fees.
        </p>
      </motion.div>
    </div>
  );
};

export default AnimatedCircleAndText;
