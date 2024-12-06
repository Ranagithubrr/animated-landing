import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Transport = () => {
  const services = [
    { title: "Cost-Saving FTZ Fulfillment" },
    { title: "Unmatched FDA/EPA Approved Relabeling" },
    { title: "World-Class Warehouse Services" },
    { title: "Efficient 3PL Services" },
  ];

  const { scrollYProgress } = useScroll();

  // Calculate the animations for the horizontal alignment
  const transformPosition = (startX) => ({
    x: useTransform(scrollYProgress, [0, 0.5], [startX, 0]),
    y: useTransform(scrollYProgress, [0, 0.5], [0, 0]),
    scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.5]),
  });

  const serviceTransforms = [
    transformPosition(-300), // Far left
    transformPosition(-100), // Mid left
    transformPosition(100), // Mid right
    transformPosition(300), // Far right
  ];

  // Make the single circle appear
  const singleOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <div style={{ height: "200vh" }}>
      <div className="relative flex flex-col items-center py-16">
        <h2 className="mb-8 text-3xl font-semibold text-gray-700">
          Worldwide Transport, Simplified
        </h2>

        {/* Four circles in a single row */}
        <div className="relative flex items-center justify-center w-full h-64">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="absolute flex items-center justify-center w-32 h-32 text-center text-white bg-blue-900 rounded-full"
              style={serviceTransforms[index]}
            >
              <p className="text-sm font-semibold">{service.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Single merged circle */}
        <motion.div
          className="fixed flex items-center justify-center w-64 h-64 text-center text-white bg-blue-900 rounded-full"
          style={{ opacity: singleOpacity }}
        >
          <p className="text-lg font-semibold">Worldwide Transport</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Transport;
