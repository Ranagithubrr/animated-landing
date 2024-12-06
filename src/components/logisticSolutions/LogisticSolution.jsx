import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Counter({ initialValue }) {
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
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {count}
        </motion.span>
      </motion.div>
    </section>
  );
}

export default function LogisticSolution() {
  return (
    <>
      <p
        className="sticky top-0"
        style={{
          zIndex: 10,
          backgroundColor: "white",
          padding: "10px",
          fontWeight: "bold",
        }}
      >
        3PL and FTZ logistic solutions to Optimize Your Operations, Streamline
        Transportation, and Link You with Your Customers
      </p>
      {[80, 95, 76].map((value, index) => (
        <Counter key={index} initialValue={value} />
      ))}
    </>
  );
}
