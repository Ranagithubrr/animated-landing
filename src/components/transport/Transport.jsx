import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Transport = () => {
  const services = [
    { title: "Cost-Saving FTZ Fulfillment" },
    { title: "Unmatched FDA/EPA Approved Relabeling" },
    { title: "World-Class Warehouse Services" },
    { title: "Efficient 3PL Services" },
  ];

  const { scrollY } = useScroll();

  // Offset the animations to start after 500px of scrolling
  const adjustedScrollY = useTransform(scrollY, (y) => Math.max(0, y - 500));

  // Calculate the animations for the horizontal alignment
  const transformPosition = (startX) => ({
    x: useTransform(adjustedScrollY, [0, 500, 1000], [startX, 0, 0]),
    y: useTransform(adjustedScrollY, [0, 500, 1000], [0, 0, 0]),
    scale: useTransform(adjustedScrollY, [0, 500, 1000], [1, 1, 10]), // The circle will scale up to 10 times its original size
  });

  const serviceTransforms = [
    transformPosition(-450), // Far left
    transformPosition(-150), // Mid left
    transformPosition(150), // Mid right
    transformPosition(450), // Far right
  ];

  // Make the single circle appear
  const singleOpacity = useTransform(adjustedScrollY, [400, 500], [0, 1]);

  // Calculate opacity for text (will hide when the circle collapses)
  const textOpacity = useTransform(adjustedScrollY, [0, 500], [1, 0]);

  return (
    <div style={{ height: "150vh" }}> {/* Adjusted to allow for more scroll */}
      <div className="relative flex flex-col items-center py-16">
        <h2 className="mb-8 text-3xl font-semibold text-gray-700">
          Worldwide Transport, Simplified
        </h2>

        {/* Four circles in a single row */}
        <div className="relative flex items-center justify-center w-full h-64">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="absolute flex items-center justify-center w-64 h-64 text-center text-white rounded-full bg-brand-primary"
              style={serviceTransforms[index]}
            >
              <motion.p
                className="text-sm font-semibold"
                style={{ opacity: textOpacity }}
              >
                {service.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transport;
