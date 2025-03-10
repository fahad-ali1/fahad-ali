import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;
    let isRunning = true;

    // Initialize canvas size immediately
    const updateCanvasSize = () => {
      canvas.width =
        window.innerWidth || document.documentElement.clientWidth || 375;
      canvas.height =
        window.innerHeight || document.documentElement.clientHeight || 667;
    };

    updateCanvasSize();

    // Responsive settings based on screen size
    const getResponsiveSettings = () => {
      const width =
        window.innerWidth || document.documentElement.clientWidth || 375;
      if (width < 480) {
        return {
          particleCount: 15, // Even fewer for mobile
          connectionDistance: 60,
          mouseConnectionDistance: 60,
          mouseForceRadius: 40,
        };
      } else if (width < 768) {
        return {
          particleCount: 30,
          connectionDistance: 80,
          mouseConnectionDistance: 80,
          mouseForceRadius: 60,
        };
      } else {
        return {
          particleCount: 50,
          connectionDistance: 150,
          mouseConnectionDistance: 150,
          mouseForceRadius: 100,
        };
      }
    };

    let settings = getResponsiveSettings();

    // Get CSS variables with safety checks
    const getParticleColor = () => {
      try {
        return getComputedStyle(document.documentElement)
          .getPropertyValue("--particle-color")
          .trim();
      } catch (e) {
        return "rgba(255, 255, 255, 0.7)";
      }
    };

    const getParticleLineColor = (opacity) => {
      try {
        const baseColor = getComputedStyle(document.documentElement)
          .getPropertyValue("--particle-line-color")
          .trim();
        return baseColor.replace(/[\d.]+\)$/g, `${opacity})`);
      } catch (e) {
        return `rgba(255, 255, 255, ${opacity})`;
      }
    };

    const getParticleMouseColor = (opacity) => {
      try {
        const baseColor = getComputedStyle(document.documentElement)
          .getPropertyValue("--particle-mouse-color")
          .trim();
        return baseColor.replace(/[\d.]+\)$/g, `${opacity})`);
      } catch (e) {
        return `rgba(255, 255, 255, ${opacity})`;
      }
    };

    // Particle class with enhanced properties
    class Particle {
      constructor(forceSpread = false) {
        this.initializePosition(forceSpread);
        // Adjust speeds for mobile
        const speedMultiplier = window.innerWidth < 480 ? 0.7 : 1;
        this.vx =
          (Math.random() * 2 - 1) *
          (Math.random() * 0.5 + 0.5) *
          speedMultiplier;
        this.vy =
          (Math.random() * 2 - 1) *
          (Math.random() * 0.5 + 0.5) *
          speedMultiplier;
        // Adjust sizes for mobile
        const sizeMultiplier = window.innerWidth < 480 ? 0.8 : 1;
        this.radius = (Math.random() * 2 + 0.5) * sizeMultiplier;
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

    // Create particles with safety check
    const createParticles = () => {
      try {
        settings = getResponsiveSettings();
        const particles = [];
        const count = Math.min(settings.particleCount, 50); // Lower maximum cap

        for (let i = 0; i < count; i++) {
          const particle = new Particle(true);
          if (
            particle &&
            particle.x !== undefined &&
            particle.y !== undefined
          ) {
            particles.push(particle);
          }
        }
        return particles;
      } catch (error) {
        console.error("Error creating particles:", error);
        return [];
      }
    };

    // Draw lines between particles with safety checks
    const connectParticles = () => {
      if (!ctx || !isRunning) return;

      const particles = particlesRef.current;
      if (!Array.isArray(particles) || particles.length === 0) return;

      const len = particles.length;

      for (let i = 0; i < len; i++) {
        const particleA = particles[i];
        if (
          !particleA ||
          typeof particleA.x !== "number" ||
          typeof particleA.y !== "number"
        )
          continue;

        // Connect to other particles
        for (let j = i + 1; j < len; j++) {
          const particleB = particles[j];
          if (
            !particleB ||
            typeof particleB.x !== "number" ||
            typeof particleB.y !== "number"
          )
            continue;

          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < settings.connectionDistance) {
            const opacity = Math.max(
              0,
              Math.min(0.25 * (1 - distance / settings.connectionDistance), 1)
            );
            ctx.beginPath();
            ctx.strokeStyle = getParticleLineColor(opacity);
            ctx.lineWidth = 0.6;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        }

        // Mouse connection with safety check
        if (mouseX && mouseY) {
          const dx = particleA.x - mouseX;
          const dy = particleA.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < settings.mouseConnectionDistance) {
            const opacity = Math.max(
              0,
              Math.min(
                0.35 * (1 - distance / settings.mouseConnectionDistance),
                1
              )
            );
            ctx.beginPath();
            ctx.strokeStyle = getParticleMouseColor(opacity);
            ctx.lineWidth = 0.8;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop with safety checks
    const animate = () => {
      if (!canvas || !ctx || !isRunning) return;

      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const particles = particlesRef.current;
        if (!Array.isArray(particles)) return;

        particles.forEach((particle, index) => {
          if (!particle || typeof particle.update !== "function") {
            particles.splice(index, 1);
            return;
          }

          try {
            particle.update();
            particle.draw();
          } catch (error) {
            particles.splice(index, 1);
          }
        });

        if (particles.length < settings.particleCount / 2) {
          particlesRef.current = createParticles();
        }

        connectParticles();
        animationRef.current = requestAnimationFrame(animate);
      } catch (error) {
        console.error("Animation error:", error);
        isRunning = false;
      }
    };

    // Handle window resize with debounce and safety
    let resizeTimeout;
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = setTimeout(() => {
        if (!canvas || !isRunning) return;

        try {
          updateCanvasSize();
          particlesRef.current = createParticles();
        } catch (error) {
          console.error("Resize error:", error);
        }
      }, 250);
    };

    // Enhanced mouse interaction with safety checks
    const handleMouseMove = (event) => {
      if (!particlesRef.current || !isRunning) return;

      mouseX = event.clientX;
      mouseY = event.clientY;

      const particles = particlesRef.current;
      if (!Array.isArray(particles)) return;

      particles.forEach((particle) => {
        if (
          !particle ||
          typeof particle.x !== "number" ||
          typeof particle.y !== "number"
        )
          return;

        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < settings.mouseForceRadius) {
          const force = (settings.mouseForceRadius - distance) / 8000;
          particle.vx += dx * force;
          particle.vy += dy * force;
        }
      });
    };

    // Initialize particles safely
    try {
      if (!isInitializedRef.current) {
        particlesRef.current = createParticles();
        isInitializedRef.current = true;
      }
    } catch (error) {
      console.error("Initialization error:", error);
    }

    // Initialize events
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    // Cleanup
    return () => {
      isRunning = false;
      isInitializedRef.current = false;
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
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
