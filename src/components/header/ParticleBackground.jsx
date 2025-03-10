import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let mouseX = 0;
    let mouseY = 0;

    // Initialize canvas size immediately
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Get CSS variables
    const getParticleColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--particle-color")
        .trim();
    const getParticleLineColor = (opacity) => {
      const baseColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--particle-line-color")
        .trim();
      return baseColor.replace(/[\d.]+\)$/g, `${opacity})`);
    };
    const getParticleMouseColor = (opacity) => {
      const baseColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--particle-mouse-color")
        .trim();
      return baseColor.replace(/[\d.]+\)$/g, `${opacity})`);
    };

    // Particle class with enhanced properties
    class Particle {
      constructor(forceSpread = false) {
        this.initializePosition(forceSpread);
        // Varying speeds for more dynamic movement
        this.vx = (Math.random() * 2 - 1) * (Math.random() * 0.5 + 0.5);
        this.vy = (Math.random() * 2 - 1) * (Math.random() * 0.5 + 0.5);
        // Varying sizes for more visual interest
        this.radius = Math.random() * 2 + 0.5;
        // Add pulse effect
        this.baseRadius = this.radius;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      initializePosition(forceSpread) {
        if (forceSpread) {
          // Ensure particles are spread across the entire canvas initially
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        } else {
          // For new particles during runtime, start at edges
          const side = Math.floor(Math.random() * 4);
          switch (side) {
            case 0: // top
              this.x = Math.random() * canvas.width;
              this.y = -10;
              break;
            case 1: // right
              this.x = canvas.width + 10;
              this.y = Math.random() * canvas.height;
              break;
            case 2: // bottom
              this.x = Math.random() * canvas.width;
              this.y = canvas.height + 10;
              break;
            case 3: // left
              this.x = -10;
              this.y = Math.random() * canvas.height;
              break;
          }
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges with slight randomization
        if (this.x < 0 || this.x > canvas.width) {
          this.vx = -this.vx * (0.95 + Math.random() * 0.1);
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy = -this.vy * (0.95 + Math.random() * 0.1);
        }

        // Pulse size effect
        this.radius =
          this.baseRadius +
          Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = getParticleColor();
        ctx.fill();
      }
    }

    // Create particles with forced spread
    particlesRef.current = Array.from({ length: 70 }, () => new Particle(true));

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Redistribute particles on resize
      particlesRef.current = Array.from(
        { length: 70 },
        () => new Particle(true)
      );
    };

    // Enhanced mouse interaction
    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      // Add slight movement to nearby particles
      particlesRef.current.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 8000;
          particle.vx += dx * force;
          particle.vy += dy * force;
        }
      });
    };

    // Draw lines between particles with enhanced connection logic
    const connectParticles = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 0.25 * (1 - distance / 150);
            ctx.beginPath();
            ctx.strokeStyle = getParticleLineColor(opacity);
            ctx.lineWidth = 0.6;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }

        // Enhanced mouse connection effect
        const dx = particlesRef.current[i].x - mouseX;
        const dy = particlesRef.current[i].y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const opacity = 0.35 * (1 - distance / 150);
          ctx.beginPath();
          ctx.strokeStyle = getParticleMouseColor(opacity);
          ctx.lineWidth = 0.8;
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }
    };

    // Animation loop with performance optimization
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animate();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initialize
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        background: "transparent",
        pointerEvents: "none",
        opacity: 1,
      }}
    />
  );
};

export default ParticleBackground;
