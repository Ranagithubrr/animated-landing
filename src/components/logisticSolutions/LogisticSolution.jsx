import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/img/logistic-bg.webp"; // Import the background image

function Counter({ initialValue, label, color }) {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);

  // Reset and start counting when the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCounting(true); // Start counting
            setCount(0); // Reset the count to 0
          } else {
            setIsCounting(false); // Stop counting when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [initialValue]);

  // Counting logic
  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < initialValue) return prevCount + 1; // Increment count until initialValue
          clearInterval(interval); // Stop the counting when initialValue is reached
          return prevCount;
        });
      }, 30); // Adjust counting speed in milliseconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [isCounting, initialValue]);

  return (
    <section
      ref={counterRef}
      className="relative bg-fixed bg-brand-primary" // Add bg-fixed for a stationary background
      style={{
        position: "relative",
        height: "100vh",        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "cover", // Make sure the image covers the section
        backgroundPosition: "bottom left", // Position it at the bottom-left
        backgroundRepeat: "no-repeat", // Prevent repeating
      }}
    >
      <motion.div
        style={{          
          fontWeight: "bold",
          color: "white",
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`absolute right-[5%] flex items-center ${color}`}
        >
          <span className="text-7xl 2xl:text-9xl">{count}</span> <span className="text-2xl font-normal leading-7 w-52">{label}</span>
        </motion.span>    
      </motion.div>
    </section>
  );
}

export default function LogisticSolution() {
  const data = [
    { value: 80, label: "Average Number Of Clients", color: "text-white" },
    { value: 95, label: "% Rate of orders completed on time", color: "text-gray-500" },
    { value: 76, label: "% Warehouse capacity utilization rate", color: "text-brand-secondary" },
  ];

  return (
    <div className="bg-brand-primary">
      <p
        className="sticky top-0 w-full px-5 pt-20 mx-auto text-2xl text-center text-gray-200 lg:px-44 2xl:px-[30rem] md:px-10 lg:text-4xl bg-brand-primary"
        style={{
          zIndex: 10,                       
        }}
      >
        3PL and FTZ <span className="font-bold text-brand-secondary">logistic solutions</span> to Optimize Your Operations, Streamline
        Transportation, and Link You with Your Customers
      </p>
      {data.map((item, index) => (
        <Counter 
          key={index} 
          initialValue={item.value} 
          label={item.label} 
          color={item.color} // Pass the color
        />
      ))}
    </div>
  );
}
