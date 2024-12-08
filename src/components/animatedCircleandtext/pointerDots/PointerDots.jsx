import React, { useEffect, useRef } from "react";

const PointerDots = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const createParticle = (x, y) => {
      particles.push({ x, y, size: Math.random() * 3 + 1 });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fill();
        particle.size -= 0.05;
        if (particle.size <= 0) particles.splice(index, 1);
      });
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default PointerDots;
