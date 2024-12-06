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

  // State to track screen width
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
    let offset = 1500; // Default offset for large screens (desktop/laptop)

    if (screenWidth <= 768) {
      // For mobile and small screens (tablets/phones)
      offset = 200; // Smaller offset for mobile devices
    } else if (screenWidth <= 1024) {
      // For medium screens (small laptops/tablets)
      offset = 200;
    } else if (screenWidth > 1024) {
      // For large screens (desktops)
      offset = 600;
    } else if (screenWidth > 1440) {
      // For large screens (desktops)
      offset = 1000;
    }

    // Apply the calculated offset
    return Math.max(0, y - offset);
  });

  // Function to calculate position
  const transformPosition = (startX) => ({
    x: useTransform(adjustedScrollY, [0, 500, 1000], [startX, 0, 0]),
    y: useTransform(adjustedScrollY, [0, 500, 1000], [0, 0, 0]),
    scale: useTransform(adjustedScrollY, [0, 500, 1000], [1, 1, 50]), // The circle will scale up to 50 times its original size
  });

  // Dynamically adjust the starting x values based on the screen width
  const serviceTransforms = [
    transformPosition(screenWidth <= 1280 ? -450 : -550), // Adjust for small to medium screens
    transformPosition(screenWidth <= 1280 ? -150 : -180), // Adjust for small to medium screens
    transformPosition(screenWidth <= 1280 ? 150 : 180), // Adjust for small to medium screens
    transformPosition(screenWidth <= 1280 ? 450 : 550), // Adjust for small to medium screens
  ];

  // Make the single circle appear
  const singleOpacity = useTransform(adjustedScrollY, [400, 500], [0, 1]);

  // Calculate opacity for text (will hide when the circle collapses)
  const textOpacity = useTransform(adjustedScrollY, [0, 500], [1, 0]);

  return (
    <section id="transportSection">
      <div
        style={{ maxWidth: "100vw", overflow: "hidden" }}
        className="h-[180vh] 2xl:h-[180vh]"
      >
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
    </section>
  );
};

export default Transport;
