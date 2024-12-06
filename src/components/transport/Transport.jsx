import React, { useEffect, useState } from "react";
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
//   const adjustedScrollY = useTransform(scrollY, (y) => Math.max(0, y - 800));


const [screenWidth, setScreenWidth] = useState(window.innerWidth);

// Listen for window resize events
useEffect(() => {
  const handleResize = () => {
    setScreenWidth(window.innerWidth); // Update the screen width state
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize); // Cleanup the event listener
}, []);

// Adjust scrollY transformation based on the screen width
const adjustedScrollY = useTransform(scrollY, (y) => {
  let offset = 800; // Default offset for large screens (desktop/laptop)

  if (screenWidth <= 768) {
    // For mobile and small screens (tablets/phones)
    offset = 200; // Smaller offset for mobile devices
  } else if (screenWidth <= 1024) {
    // For medium screens (small laptops/tablets)
    offset = 200;
  }
   else if (screenWidth >= 1024) {
    // For medium screens (small laptops/tablets)
    offset = 600;
  }

  // Apply the calculated offset
  return Math.max(0, y - offset);
});

  // Calculate the animations for the horizontal alignment
  const transformPosition = (startX) => ({
    x: useTransform(adjustedScrollY, [0, 500, 1000], [startX, 0, 0]),
    y: useTransform(adjustedScrollY, [0, 500, 1000], [0, 0, 0]),
    scale: useTransform(adjustedScrollY, [0, 500, 1000], [1, 1, 50]), // The circle will scale up to 10 times its original size
  });

  const serviceTransforms = [
    transformPosition(-550), // Far left
    transformPosition(-180), // Mid left
    transformPosition(180), // Mid right
    transformPosition(550), // Far right
  ];

  // Make the single circle appear
  const singleOpacity = useTransform(adjustedScrollY, [400, 500], [0, 1]);

  // Calculate opacity for text (will hide when the circle collapses)
  const textOpacity = useTransform(adjustedScrollY, [0, 500], [1, 0]);

  return (
    <div style={{ maxWidth:'100vw', overflow:'hidden' }} className="h-[200vh] 2xl:h-[180vh]">
      <div className="relative flex flex-col items-center py-16">
        <h2 className="mb-32 text-6xl font-semibold text-brand-primary">
          Worldwide Transport, Simplified
        </h2>

        {/* Four circles in a single row */}
        <div className="relative flex items-center justify-center w-full h-64 -z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="absolute flex items-center justify-center w-64 h-64 text-center text-white rounded-full 2xl:h-80 2xl:w-80 bg-brand-primary"
              style={serviceTransforms[index]}
            >
              <motion.p
                className="p-4 text-3xl font-semibold"
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
