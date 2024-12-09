import React, { useEffect, useRef } from "react";

const PointerDots = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = 100; // Number of dots
    const groupOffset = { x: 0, y: 0 }; // Group offset from the original position
    let lastMouse = { x: canvas.width / 2, y: canvas.height / 2 }; // Store last mouse position

    // Initialize particles with a grid of points
    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({ x, y, size: 2 });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(
          particle.x + groupOffset.x, // Apply the group offset
          particle.y + groupOffset.y,
          particle.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fill();
      });
    };

    const updateParticles = () => {
      // Gradually ease the group toward the mouse position
      groupOffset.x += (lastMouse.x - canvas.width / 2 - groupOffset.x) * 0.02; // Move the group slowly
      groupOffset.y += (lastMouse.y - canvas.height / 2 - groupOffset.y) * 0.02;
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      lastMouse.x = e.clientX;
      lastMouse.y = e.clientY;
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
      className="box-border overflow-hidden max-w-[100vw]"
    />
  );
};

export default PointerDots;
